import api from "./axios";

export const CREATE_ROOM_API_URL =
  import.meta.env.VITE_CREATE_ROOM_API_URL ||
  "https://clincore.niitwebdev.com.ng/clincore-api/admin/room/create-room.php";

export const FETCH_EACH_ROOM_API_URL =
  import.meta.env.VITE_FETCH_EACH_ROOM_API_URL ||
  "https://clincore.niitwebdev.com.ng/clincore-api/admin/room/fetch-each-room.php";

export const FETCH_ALL_ROOMS_API_URL =
  import.meta.env.VITE_FETCH_ALL_ROOMS_API_URL ||
  "https://clincore.niitwebdev.com.ng/clincore-api/admin/room/fetch-all-room.php";

export const DELETE_ROOM_API_URL =
  import.meta.env.VITE_DELETE_ROOM_API_URL ||
  "https://clincore.niitwebdev.com.ng/clincore-api/admin/room/delete-room.php";

const ROOM_STORAGE_KEY = "clincore_rooms";

function normalizeStatus(statusValue = "Available") {
  const raw = String(statusValue ?? "").trim();
  const value = raw.toLowerCase();

  if (!raw) return { statusId: "A", status: "Available" };

  if (value.includes("unavailable") || value.includes("maintenance") || value.includes("inactive") || value === "u") {
    return { statusId: "U", status: "Unavailable" };
  }

  if (value.includes("occupied") || value.includes("busy") || value === "o") {
    return { statusId: "O", status: "Occupied" };
  }

  if (value.includes("reserved") || value === "r") {
    return { statusId: "R", status: "Reserved" };
  }

  if (value === "active" || value === "available" || value === "a") {
    return { statusId: "A", status: "Available" };
  }

  return { statusId: raw.toUpperCase(), status: raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase() };
}

export function normalizeRoomRecord(room = {}, fallbackIndex = 1) {
  const roomId =
    room.roomId ||
    room.room_id ||
    room.id ||
    room.roomID ||
    `ROOM-${String(fallbackIndex).padStart(3, "0")}`;

  const defaultName = room.roomName || room.room_name || room.name || `Room ${roomId}`;
  const roomName = (defaultName || "").trim() || `Room ${roomId}`;
  const roomType = room.roomType || room.room_type || room.type || "Single Ward";
  const capacity = Number(room.capacity ?? room.bedCapacity ?? room.bed_capacity ?? 1) || 1;
  const status = normalizeStatus(
    room.status || room.statusName || room.status_name || room.statusId || room.status_id || "Available"
  );

  return {
    ...room,
    roomId,
    room_id: roomId,
    id: roomId,
    name: roomName,
    roomName,
    room_name: roomName,
    roomType,
    room_type: roomType,
    capacity,
    dailyRate: room.dailyRate ?? room.daily_rate ?? room.rate ?? "0.00",
    status: status.status,
    statusId: room.statusId || room.status_id || status.statusId,
    status_id: room.statusId || room.status_id || status.statusId,
    createdAt: room.createdAt || room.created_at || new Date().toISOString(),
  };
}

function notifyRoomChange(record = null, isEdit = false, isDelete = false) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("clincore:room-changed", {
        detail: { record, isEdit, isDelete },
      })
    );
  }
}

export function getStoredRooms() {
  try {
    const raw = localStorage.getItem(ROOM_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((room, idx) => normalizeRoomRecord(room, idx + 1));
  } catch (error) {
    console.error("Error reading stored rooms:", error);
    return [];
  }
}

export function saveStoredRooms(rooms) {
  try {
    const valid = Array.isArray(rooms) ? rooms : [];
    localStorage.setItem(ROOM_STORAGE_KEY, JSON.stringify(valid));
  } catch (error) {
    console.error("Error saving rooms:", error);
  }
}

export function addStoredRoom(room) {
  const normalized = normalizeRoomRecord(room);
  const existing = getStoredRooms();
  const updated = [
    normalized,
    ...existing.filter(
      (item) => String(item.roomId) !== String(normalized.roomId) && String(item.room_id) !== String(normalized.roomId)
    ),
  ];
  saveStoredRooms(updated);
  notifyRoomChange(normalized, false);
  return updated;
}

export function updateStoredRoom(updatedRoom) {
  const existing = getStoredRooms();
  const current = existing.find(
    (room) => String(room.roomId) === String(updatedRoom.roomId || updatedRoom.room_id)
  ) || {};
  const merged = normalizeRoomRecord({ ...current, ...updatedRoom });

  const updated = existing.map((room) =>
    String(room.roomId) === String(merged.roomId) || String(room.room_id) === String(merged.roomId)
      ? merged
      : room
  );

  saveStoredRooms(updated);
  notifyRoomChange(merged, true);
  return updated;
}

export async function deleteRoomProfile(roomId) {
  if (!roomId) {
    throw new Error("A room ID is required to delete a room.");
  }

  const requestData = new FormData();
  requestData.append("roomId", String(roomId));
  requestData.append("room_id", String(roomId));

  const response = await api.post(DELETE_ROOM_API_URL, requestData);
  if (response?.data?.success === false) {
    throw new Error(response.data.message || "Unable to delete room.");
  }

  const existing = getStoredRooms();
  const deletedRoom = existing.find(
    (room) => String(room.roomId) === String(roomId) || String(room.room_id) === String(roomId)
  ) || { roomId, room_id: roomId, id: roomId };
  const updated = existing.filter(
    (room) => String(room.roomId) !== String(roomId) && String(room.room_id) !== String(roomId)
  );

  saveStoredRooms(updated);
  notifyRoomChange(deletedRoom, false, true);
  return { success: true, rooms: updated };
}

export async function fetchEachRoom(roomId) {
  if (!roomId) {
    throw new Error("A room ID is required to fetch a room.");
  }

  const requestData = new FormData();
  requestData.append("roomId", String(roomId));

  const response = await api.post(FETCH_EACH_ROOM_API_URL, requestData);
  const responseData = response?.data;

  if (!responseData || responseData.success === false) {
    throw new Error(responseData?.message || "Unable to fetch room details.");
  }

  const roomData = responseData.data || responseData.room || responseData;
  const room = normalizeRoomRecord(roomData);
  const storedRooms = getStoredRooms();
  const updatedRooms = [
    room,
    ...storedRooms.filter((storedRoom) => String(storedRoom.roomId) !== String(room.roomId)),
  ];
  saveStoredRooms(updatedRooms);

  return room;
}

export async function createRoomProfile(formValues = {}) {
  const roomName = (formValues.roomName || formValues.name || formValues.room_name || "").trim();
  const capacity = Number(formValues.capacity ?? formValues.bedCapacity ?? formValues.bed_capacity ?? 1) || 1;
  const { statusId, status } = normalizeStatus(formValues.status || formValues.statusName || "Available");

  const requestData = new FormData();
  requestData.append("name", roomName);
  requestData.append("capacity", String(capacity));
  requestData.append("statusId", statusId.toLowerCase());

  let apiSuccess = false;
  let apiMessage = "";
  let returnedData = null;

  try {
    const response = await api.post(CREATE_ROOM_API_URL, requestData);
    returnedData = response.data;
    if (returnedData) {
      apiSuccess = returnedData.success !== false;
      apiMessage = returnedData.message || "ROOM CREATED SUCCESSFUL";
    }
  } catch (err) {
    console.warn("Room API creation request warning/error:", err.message);
    apiSuccess = false;
    apiMessage =
      err.response?.data?.message ||
      err.message ||
      "Unable to create room profile on server. Saved locally.";
  }

  const roomId =
    returnedData?.data?.roomId ||
    returnedData?.data?.room_id ||
    returnedData?.roomId ||
    returnedData?.room_id ||
    `ROOM-${Date.now()}`;

  const createdRoom = normalizeRoomRecord({
    ...formValues,
    roomId,
    room_id: roomId,
    name: roomName,
    roomName,
    capacity,
    dailyRate: formValues.dailyRate || "0.00",
    status,
    statusId,
    status_id: statusId,
    createdAt: new Date().toISOString(),
  });

  addStoredRoom(createdRoom);

  return {
    success: true,
    message: apiMessage || "ROOM CREATED SUCCESSFUL",
    data: createdRoom,
    apiSuccess,
  };
}

export async function fetchAllRooms() {
  try {
    const response = await api.post(FETCH_ALL_ROOMS_API_URL);
    const resData = response?.data;
    let list = [];

    if (Array.isArray(resData)) {
      list = resData;
    } else if (resData && Array.isArray(resData.data)) {
      list = resData.data;
    } else if (resData && Array.isArray(resData.date)) {
      list = resData.date;
    } else if (resData && Array.isArray(resData.rooms)) {
      list = resData.rooms;
    } else if (resData && Array.isArray(resData.result)) {
      list = resData.result;
    } else if (resData && typeof resData === "object") {
      const candidate = Object.values(resData).find((value) => Array.isArray(value));
      if (candidate) list = candidate;
    }

    if (Array.isArray(list) && list.length > 0) {
      const formatted = list.map((room, index) => normalizeRoomRecord(room, index + 1));
      saveStoredRooms(formatted);
      return formatted;
    }

    const stored = getStoredRooms();
    if (stored.length > 0) {
      return stored;
    }

    return [];
  } catch (err) {
    console.warn("fetchAllRooms warning:", err?.message || err);
    const stored = getStoredRooms();
    if (stored.length > 0) {
      return stored;
    }
    return [];
  }
}
