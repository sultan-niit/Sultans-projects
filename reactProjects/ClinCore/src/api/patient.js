import api from "./axios";

const API_ROOT = "https://clincore.niitwebdev.com.ng/clincore-api/admin/staff";
export const CREATE_PATIENT_API_URL =
  import.meta.env.VITE_CREATE_PATIENT_API_URL || `${API_ROOT}/create-staff.php`;
export const FETCH_EACH_PATIENT_API_URL =
  import.meta.env.VITE_FETCH_EACH_PATIENT_API_URL || `${API_ROOT}/fetch-each-staff.php`;
export const DELETE_PATIENT_API_URL =
  import.meta.env.VITE_DELETE_PATIENT_API_URL || `${API_ROOT}/delete-staff.php`;
export const SEARCH_PATIENT_API_URL =
  import.meta.env.VITE_SEARCH_PATIENT_API_URL || `${API_ROOT}/search-staff.php`;
export const FETCH_ALL_PATIENTS_API_URL =
  import.meta.env.VITE_FETCH_ALL_PATIENTS_API_URL || `${API_ROOT}/fetch-all-staff.php`;

const STORAGE_KEY = "clincore_patients";

function notifyChange(record, isEdit = false) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("clincore:patient-changed", { detail: { record, isEdit } })
  );
}

function isNetworkError(error) {
  return (
    (typeof navigator !== "undefined" && !navigator.onLine) ||
    error.code === "ERR_NETWORK" ||
    error.message?.toLowerCase().includes("network error") ||
    error.isNetworkError
  );
}

function formData(fields) {
  const data = new FormData();
  Object.entries(fields).forEach(([key, value]) => data.append(key, value ?? ""));
  return data;
}

export function getPatientInitials(name = "") {
  const parts = name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/i, "").trim().split(/\s+/).filter(Boolean);
  return parts.length > 1
    ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
    : parts[0]?.slice(0, 2).toUpperCase() || "PT";
}

export function normalizePatientRecord(record = {}) {
  const patientId = String(
    record.patientId ||
      record.patientID ||
      record.patient_id ||
      record.id ||
      record.staffId ||
      record.staffID ||
      record.staff_id ||
      ""
  );
  const name = (
    record.fullName ||
    record.patientName ||
    record.patient_name ||
    record.staffName ||
    record.staff_name ||
    record.name ||
    [record.firstName, record.lastName].filter(Boolean).join(" ")
  ).trim();
  const email = (record.emailAddress || record.email || "").trim();
  const phone = (record.phoneNumber || record.phone || "").trim();
  const status =
    record.status || record.statusName || (record.statusId === "A" ? "Active" : "");

  return {
    ...record,
    patientId,
    id: patientId,
    staffId: record.staffId || patientId,
    name,
    fullName: name,
    firstName: record.firstName || name.split(/\s+/)[0] || "",
    lastName: record.lastName || name.split(/\s+/).slice(1).join(" "),
    email,
    emailAddress: email,
    phone,
    phoneNumber: phone,
    age: record.age === "" || record.age == null ? "" : Number(record.age),
    gender: record.gender || "",
    checkIn:
      record.checkIn ||
      (record.createdAt
        ? new Date(record.createdAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        : ""),
    treatment: record.treatment || record.position || record.role || record.department || "",
    doctor: record.doctor || record.doctorAssigned || "",
    doctorAssigned: record.doctorAssigned || record.doctor || "",
    room: record.room || "",
    status: status === "Unavailable" ? "Inactive" : status,
    statusId: record.statusId || (status === "Active" ? "A" : ""),
    avatar:
      record.avatar ||
      record.profileImage ||
      record.profile_image ||
      record.photo ||
      null,
    createdAt: record.createdAt || "",
  };
}

export function getStoredPatients() {
  try {
    const records = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(records) ? records : [];
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
  const records = [record, ...existing.filter((item) => item.patientId !== record.patientId)];
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
  const current = records.find((item) => item.patientId === String(patient.patientId)) || {};
  const record = normalizePatientRecord({ ...current, ...patient });
  const updated = current.patientId
    ? records.map((item) => (item.patientId === record.patientId ? record : item))
    : [record, ...records];
  saveStoredPatients(updated);
  notifyChange(record, true);
  return record;
}

export async function createPatientProfile(values = {}) {
  const { password = "", ...patientValues } = values;
  const name = (values.fullName || values.name || [values.firstName, values.lastName].filter(Boolean).join(" ")).trim();
  const emailAddress = (values.emailAddress || values.email || "").trim();
  const phone = (values.phone || values.phoneNumber || "").trim();
  const payload = formData({
    name,
    emailAddress,
    phone,
    password,
    position: values.position || values.treatment || "",
    department: values.department || "General Medicine",
    status: values.status || "Active",
  });

  let response;
  try {
    ({ data: response } = await api.post(CREATE_PATIENT_API_URL, payload));
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.message || "Unable to create patient.",
      { cause: error }
    );
  }
  if (response?.success === false) {
    throw new Error(response.message || "Unable to create patient.");
  }

  const patientId =
    response?.data?.patientId || response?.data?.id || response?.data?.staffId ||
    response?.patientId || response?.id || response?.staffId || String(Date.now());
  const record = normalizePatientRecord(
    {
      ...patientValues,
      patientId,
      name,
      email: emailAddress,
      emailAddress,
      phone,
      phoneNumber: phone,
      createdAt: new Date().toISOString(),
    }
  );
  addStoredPatient(record);
  return {
    success: true,
    apiSuccess: true,
    message: response?.message || "Patient created successfully.",
    data: record,
  };
}

export async function fetchEachPatient(patientId) {
  if (!patientId) return null;
  try {
    const { data } = await api.post(
      FETCH_EACH_PATIENT_API_URL,
      formData({ staffId: patientId })
    );
    if (data?.success === false || (!data?.data && !data?.staffId && !data?.patientId)) return null;
    return updateStoredPatient({ ...(data.data || data), patientId });
  } catch (error) {
    console.warn("Unable to fetch patient:", error.message);
    return null;
  }
}

function extractPatients(data) {
  if (Array.isArray(data)) return data;
  for (const key of [
    "data",
    "patients",
    "patientData",
    "patientList",
    "staff",
    "staffData",
    "staffList",
    "records",
    "date",
  ]) {
    if (Array.isArray(data?.[key])) return data[key];
  }
  if (data && typeof data === "object") {
    const list = Object.values(data).find(Array.isArray);
    if (list) return list;
  }
  return null;
}

export async function fetchAllPatients() {
  if (typeof navigator !== "undefined" && !navigator.onLine) {
    const error = new Error("No internet connection");
    error.isNetworkError = true;
    throw error;
  }

  try {
    let response;
    try {
      response = await api.get(FETCH_ALL_PATIENTS_API_URL);
    } catch (error) {
      if (isNetworkError(error)) throw error;
      response = await api.post(FETCH_ALL_PATIENTS_API_URL);
    }

    const patients = extractPatients(response.data);
    if (!patients) return getStoredPatients();
    const records = patients.map(normalizePatientRecord);
    saveStoredPatients(records);
    return records;
  } catch (error) {
    if (isNetworkError(error)) throw error;
    console.warn("Unable to fetch patients:", error.message);
    return getStoredPatients();
  }
}

export const syncAllPatientsWithApi = fetchAllPatients;

export async function deletePatientProfile(patientId) {
  if (!patientId) return { success: false, patients: getStoredPatients() };
  try {
    const { data } = await api.post(DELETE_PATIENT_API_URL, formData({ staffId: patientId }));
    if (data?.success === false) throw new Error(data.message || "Unable to delete patient.");
  } catch (error) {
    console.warn("Unable to delete patient from server:", error.message);
  }
  return { success: true, patients: removeStoredPatient(patientId) };
}

export async function searchPatientProfile(searchContent) {
  if (!searchContent) return null;
  try {
    const { data } = await api.post(SEARCH_PATIENT_API_URL, formData({ searchContent }));
    return data;
  } catch (error) {
    console.warn("Unable to search patients:", error.message);
    return null;
  }
}

export default {
  createPatientProfile,
  fetchEachPatient,
  fetchAllPatients,
  syncAllPatientsWithApi,
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
