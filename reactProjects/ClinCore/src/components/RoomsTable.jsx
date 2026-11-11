import { useState } from "react";
import { fetchEachRoom } from "../api/room";
import { useModalState } from "../js/components/ModalContext";

export default function RoomsTable({ rooms = [], isLoading = false }) {
    const { openEditDrawer, showToast } = useModalState();
    const [loadingRoomId, setLoadingRoomId] = useState(null);

    const handleEditRoom = async (room) => {
        const roomId = room.roomId || room.room_id || room.id;
        setLoadingRoomId(roomId);
        try {
            const fetchedRoom = await fetchEachRoom(roomId);
            openEditDrawer(fetchedRoom, "room");
        } catch (error) {
            console.error("Unable to fetch room details before editing:", error);
            showToast(error.message || "Unable to load room details.", "error");
        } finally {
            setLoadingRoomId(null);
        }
    };

    const formatStatusClass = (status = "") => {
        const normalized = String(status).toLowerCase();
        if (normalized.includes("occupied")) return "status-occupied";
        if (normalized.includes("unavailable") || normalized.includes("maintenance") || normalized.includes("inactive")) return "status-unavailable";
        return "status-available";
    };

    if (isLoading) {
        return (
            <div className="appointments-main-card">
                <div className="doctors-loading-card" style={{ minHeight: 180 }}>
                    <div className="rolling-circle-spinner" role="status" aria-label="Loading rooms" />
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="appointments-main-card">
                <div className="appointments-table-wrap">
                    <table className="appointments-data-table">
                        <thead>
                            <tr>
                                <th className="checkbox-col">
                                    <input type="checkbox" className="table-checkbox" />
                                </th>
                                <th className="sortable-th id-col">
                                    <span>S/N</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Room Name</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Capacity</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Status</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map((room, index) => {
                                const roomStatus = room.status || "Available";
                                const roomData = {
                                    roomId: room.roomId || room.room_id || room.id,
                                    room_id: room.roomId || room.room_id || room.id,
                                    roomName: room.roomName || room.name || `Room ${room.roomId || index + 1}`,
                                    roomType: room.roomType || room.room_type || "Single Ward",
                                    capacity: room.capacity || 1,
                                    dailyRate: room.dailyRate || room.daily_rate || "0.00",
                                    status: roomStatus,
                                };

                                return (
                                    <tr key={room.roomId || room.id || index}>
                                        <td>
                                            <input type="checkbox" className="table-checkbox" />
                                        </td>
                                        <td>
                                            <span className="room-name-txt">{index + 1}</span>
                                        </td>
                                        <td>
                                            <div className="room-cell-info">
                                                <span className="room-name-txt">{room.name || room.roomName || `Room ${index + 1}`}</span>
                                                <span className="room-id-txt">{room.roomId || room.room_id || room.id || `RM-${String(index + 1).padStart(3, "0")}`}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="room-capacity-badge">{room.capacity || 1}</span>
                                        </td>
                                        <td>
                                            <span className={`appointment-status-pill ${formatStatusClass(roomStatus)}`}>{roomStatus}</span>
                                        </td>
                                        <td>
                                            <div className="appointment-row-actions">
                                                <button
                                                    type="button"
                                                    className="btn-action-reschedule"
                                                    onClick={() => handleEditRoom(roomData)}
                                                    disabled={String(loadingRoomId) === String(roomData.roomId)}
                                                    title="Edit Room"
                                                >
                                                    <i className="bi bi-pencil-square"></i>
                                                    {String(loadingRoomId) === String(roomData.roomId) ? "Loading..." : "Edit"}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="appointments-pagination-row">
                    <div className="appointments-pagination-info">
                        <span>Showing</span>
                        <select className="appointments-page-select" defaultValue="10">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <span>out of {rooms.length}</span>
                    </div>

                    <div className="appointments-pagination-controls">
                        <button type="button" className="btn-appointments-step" title="Previous Page">
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button type="button" className="btn-appointments-step active">1</button>
                        <button type="button" className="btn-appointments-step">2</button>
                        <button type="button" className="btn-appointments-step">3</button>
                        <span className="page-step-ellipsis">...</span>
                        <button type="button" className="btn-appointments-step">5</button>
                        <button type="button" className="btn-appointments-step" title="Next Page">
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
