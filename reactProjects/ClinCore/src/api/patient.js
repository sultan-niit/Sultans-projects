import api from "./axios";

export const CREATE_PATIENT_API_URL =
  import.meta.env.VITE_CREATE_PATIENT_API_URL ||
  "https://clincore.niitwebdev.com.ng/clincore-api/admin/patient/create-patient.php";

export const FETCH_EACH_PATIENT_API_URL =
  import.meta.env.VITE_FETCH_EACH_PATIENT_API_URL ||
  "https://clincore.niitwebdev.com.ng/clincore-api/admin/patient/patient-fetch-each.php";

export const FETCH_ALL_PATIENTS_API_URL =
  import.meta.env.VITE_FETCH_ALL_PATIENTS_API_URL ||
  "https://clincore.niitwebdev.com.ng/clincore-api/admin/patient/fetch-all-patient.php";

export const SEARCH_PATIENT_API_URL =
  import.meta.env.VITE_SEARCH_PATIENT_API_URL ||
  "https://clincore.niitwebdev.com.ng/clincore-api/admin/patient/patient-search.php";

export const DELETE_PATIENT_API_URL =
  import.meta.env.VITE_DELETE_PATIENT_API_URL ||
  "https://clincore.niitwebdev.com.ng/clincore-api/admin/patient/delete-patient.php";

const STORAGE_KEY = "clincore_patients";

function createPatientFormData(values) {
  const requestData = new FormData();
  const patientName = values.patientName || values.fullName || values.name || "";
  const emailAddress = values.emailAddress || values.email || "";
  const password = values.password || "";
  const phone = values.phone || values.phoneNumber || "";
  const address = values.address || values.homeAddress || "";
  const doctorId = values.doctorId || values.doctor_id || values.doctor || "";
  const roomId = values.roomId || values.room_id || values.room || "";
  const rawStatus = String(values.statusId || values.status_id || values.status || "A").toLowerCase();
  const statusId = ["u", "inactive", "unavailable", "discharged"].includes(rawStatus) ? "U" : "A";

  requestData.append("patientName", String(patientName).trim());
  requestData.append("emailAddress", String(emailAddress).trim());
  requestData.append("password", String(password));
  requestData.append("phone", String(phone).trim());
  requestData.append("homeAddress", String(address).trim());
  requestData.append("treatment", String(values.treatment || "").trim());
  requestData.append("doctorId", String(doctorId).trim());
  requestData.append("doctor_id", String(doctorId).trim());
  requestData.append("roomId", String(roomId).trim());
  requestData.append("room_id", String(roomId).trim());
  requestData.append("statusId", statusId);
  requestData.append("status_id", statusId);

  return requestData;
}

function extractPatientList(responseData) {
  if (Array.isArray(responseData)) return responseData;
  if (Array.isArray(responseData?.data)) return responseData.data;
  if (Array.isArray(responseData?.date)) return responseData.date;
  if (Array.isArray(responseData?.patients)) return responseData.patients;
  return [];
}

function notifyChange(record, isEdit = false) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("clincore:patient-changed", { detail: { record, isEdit } })
  );
}

export function getPatientInitials(name = "") {
  const parts = String(name || "")
    .replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/i, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  return parts.length > 1
    ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
    : parts[0]?.slice(0, 2).toUpperCase() || "PT";
}

export function normalizePatientRecord(record = {}) {
  const patientData = { ...record };
  delete patientData.password;
  const patientId = String(
    record.patientId ||
      record.patientID ||
      record.patient_id ||
      record.id ||
      ""
  );
  const name = (
    record.fullName ||
    record.patientName ||
    record.patient_name ||
    record.name ||
    [record.firstName, record.lastName].filter(Boolean).join(" ")
  || "Patient").trim();
  const email = (record.emailAddress || record.email_address || record.email || "").trim();
  const phone = (record.phoneNumber || record.phone || "").trim();
  const statusId = record.statusId || record.status_id || "";
  const status =
    record.status ||
    record.statusName ||
    (statusId === "A" ? "Active" : statusId === "U" ? "Inactive" : "");
  const createdAt = record.createdAt || record.created_at || "";

  return {
    ...patientData,
    patientId,
    id: patientId,
    name,
    fullName: name,
    firstName: record.firstName || name.split(/\s+/)[0] || "",
    lastName: record.lastName || name.split(/\s+/).slice(1).join(" "),
    email,
    emailAddress: email,
    phone,
    phoneNumber: phone,
    address: record.address || record.home_address || "",
    age: record.age === "" || record.age == null ? "" : Number(record.age),
    gender: record.gender || "",
    checkIn:
      record.checkIn ||
      (createdAt
        ? new Date(createdAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        : ""),
    treatment: record.treatment || record.position || record.role || record.department || "",
    doctor: record.doctor || record.doctorAssigned || record.doctor_id || "",
    doctorName:
      record.doctorName ||
      record.doctor_name ||
      record.doctorAssignedName ||
      record.doctor_assigned_name ||
      "",
    doctorId: record.doctorId || record.doctor_id || "",
    doctorAssigned: record.doctorAssigned || record.doctor || record.doctor_id || "",
    room: record.room || record.room_id || "",
    roomName: record.roomName || record.room_name || "",
    roomId: record.roomId || record.room_id || "",
    status: status === "Unavailable" ? "Inactive" : status,
    statusId: statusId || (status === "Active" ? "A" : ""),
    avatar:
      record.avatar ||
      record.profileImage ||
      record.profile_image ||
      record.photo ||
      null,
    createdAt,
  };
}

export function getStoredPatients() {
  try {
    const records = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(records)) return [];

    const patients = records.filter((record) => {
      const patientId = String(
        record.patientId || record.patientID || record.patient_id || record.id || ""
      );
      return patientId && !/^staff/i.test(patientId);
    });

    if (patients.length !== records.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
    }

    return patients;
  } catch (error) {
    console.error("Unable to read saved patients:", error);
    return [];
  }
}

export function saveStoredPatients(records) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.isArray(records) ? records : []));
  } catch (error) {
    console.error("Unable to save patients:", error);
  }
}

export function addStoredPatient(patient) {
  const existing = getStoredPatients();
  const record = normalizePatientRecord(patient);
  const records = [record, ...existing.filter((item) => String(item.patientId) !== String(record.patientId))];
  saveStoredPatients(records);
  notifyChange(record);
  return records;
}

export function removeStoredPatient(patientId) {
  const records = getStoredPatients().filter(
    (patient) => String(patient.patientId) !== String(patientId)
  );
  saveStoredPatients(records);
  notifyChange({ patientId });
  return records;
}

export function updateStoredPatient(patient) {
  const records = getStoredPatients();
  const current = records.find((item) => String(item.patientId) === String(patient.patientId)) || {};
  const record = normalizePatientRecord({ ...current, ...patient });
  const updated = current.patientId
    ? records.map((item) => (String(item.patientId) === String(record.patientId) ? record : item))
    : [record, ...records];
  saveStoredPatients(updated);
  notifyChange(record, true);
  return record;
}

export async function createPatientProfile(values = {}) {
  const phone = (values.phone || values.phoneNumber || "").trim();

  let response;
  try {
    response = await api.post(CREATE_PATIENT_API_URL, createPatientFormData(values));
  } catch (error) {
    const responseData = error.response?.data;
    const serverMessage =
      responseData?.message ||
      responseData?.error ||
      (typeof responseData === "string" && !responseData.trim().startsWith("<")
        ? responseData.trim()
        : "");
    const message =
      serverMessage ||
      (error.response?.status
        ? `Patient API request failed with HTTP ${error.response.status}.`
        : error.message || "Unable to create patient.");
    throw new Error(message, { cause: error });
  }

  const responseData = response?.data;
  if (responseData?.success === false) {
    throw new Error(responseData.message || "Unable to create patient.");
  }

  const returnedRecord = responseData?.data || responseData || {};
  const name = (
    values.patientName ||
    values.fullName ||
    values.name ||
    returnedRecord.fullName ||
    returnedRecord.patientName ||
    returnedRecord.patient_name ||
    [values.firstName, values.lastName].filter(Boolean).join(" ") ||
    (phone ? `Patient ${phone}` : "Patient")
  ).trim();
  const patientValues = { ...values };
  delete patientValues.password;
  const patientId = String(
    returnedRecord.patientId ||
      returnedRecord.patientID ||
      returnedRecord.patient_id ||
      responseData?.patientId ||
      responseData?.patient_id ||
      `LOCAL-PAT-${Date.now()}`
  );
  const record = normalizePatientRecord({
    ...patientValues,
    ...returnedRecord,
    patientName: name,
    fullName: name,
    patientId,
    name,
    phone,
    phoneNumber: phone,
    createdAt: new Date().toISOString(),
  });

  addStoredPatient(record);

  return {
    success: true,
    apiSuccess: true,
    message: responseData?.message || "Patient created successfully.",
    data: record,
  };
}

export async function fetchEachPatient(patientId) {
  if (!patientId) return null;

  const requestData = new FormData();
  requestData.append("patientId", String(patientId));
  requestData.append("patient_id", String(patientId));
  const response = await api.post(FETCH_EACH_PATIENT_API_URL, requestData);
  const responseData = response?.data;

  if (responseData?.success === false) return null;

  const patient = responseData?.data || responseData;
  if (!patient || typeof patient !== "object" || Array.isArray(patient)) return null;

  const record = normalizePatientRecord({ ...patient, patientId });
  updateStoredPatient(record);
  return record;
}

export async function fetchAllPatients() {
  if (typeof navigator !== "undefined" && !navigator.onLine) {
    const offlineErr = new Error("No internet connection");
    offlineErr.isNetworkError = true;
    throw offlineErr;
  }

  try {
    const response = await api.post(FETCH_ALL_PATIENTS_API_URL);

    const storedNames = new Map(
      getStoredPatients().map((patient) => [
        String(patient.patientId),
        patient.fullName || patient.name,
      ])
    );
    const list = extractPatientList(response?.data);
    const formattedList = list
      .filter((patient) =>
        patient.patientId || patient.patientID || patient.patient_id || patient.id
      )
      .map((patient) => normalizePatientRecord(patient))
      .filter((patient) => patient.patientId && !/^staff/i.test(patient.patientId))
      .map((patient) => {
        const storedName = storedNames.get(patient.patientId);
        return storedName
          ? { ...patient, name: storedName, fullName: storedName }
          : patient;
      });
    saveStoredPatients(formattedList);
    return formattedList;
  } catch (err) {
    console.warn("fetchAllPatients API warning:", err.message);
    if (
      (typeof navigator !== "undefined" && !navigator.onLine) ||
      err.code === "ERR_NETWORK" ||
      err.message?.toLowerCase().includes("network error") ||
      err.isNetworkError
    ) {
      throw err;
    }
    return getStoredPatients();
  }
}

export const syncAllPatientsWithApi = fetchAllPatients;

export async function deletePatientProfile(patientId) {
  if (!patientId) return { success: false, patients: getStoredPatients() };

  const requestData = new FormData();
  requestData.append("patientId", String(patientId));
  requestData.append("patient_id", String(patientId));
  const response = await api.post(DELETE_PATIENT_API_URL, requestData);
  if (response?.data?.success === false) {
    throw new Error(response.data.message || "Unable to delete patient.");
  }

  const updated = removeStoredPatient(patientId);
  return { success: true, patients: updated };
}

export async function searchPatientProfile(searchContent) {
  if (!searchContent) return [];
  const query = String(searchContent).trim();
  if (!query) return [];

  const requestData = new FormData();
  requestData.append("searchContent", query);
  const response = await api.post(SEARCH_PATIENT_API_URL, requestData);
  const responseData = response?.data;
  if (responseData?.success === false) return [];

  return extractPatientList(responseData)
    .filter((patient) =>
      patient.patientId || patient.patientID || patient.patient_id || patient.id
    )
    .map((patient) => normalizePatientRecord(patient))
    .filter((patient) => patient.patientId && !/^staff/i.test(patient.patientId));
}

export default {
  createPatientProfile,
  fetchEachPatient,
  fetchAllPatients,
  syncAllPatientsWithApi,
  CREATE_PATIENT_API_URL,
  FETCH_EACH_PATIENT_API_URL,
  FETCH_ALL_PATIENTS_API_URL,
  SEARCH_PATIENT_API_URL,
  DELETE_PATIENT_API_URL,
  deletePatientProfile,
  searchPatientProfile,
  getStoredPatients,
  saveStoredPatients,
  addStoredPatient,
  removeStoredPatient,
  updateStoredPatient,
  normalizePatientRecord,
  getPatientInitials,
};
