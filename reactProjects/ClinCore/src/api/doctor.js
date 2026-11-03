

import api from "./axios";



export const CREATE_DOCTOR_API_URL =
  import.meta.env.VITE_CREATE_DOCTOR_API_URL ||
  "";

export const FETCH_EACH_DOCTOR_API_URL =
  import.meta.env.VITE_FETCH_EACH_DOCTOR_API_URL ||
  "";

export const DELETE_DOCTOR_API_URL =
  import.meta.env.VITE_DELETE_DOCTOR_API_URL ||
  "";

export const SEARCH_DOCTOR_API_URL =
  import.meta.env.VITE_SEARCH_DOCTOR_API_URL ||
  "";

export const FETCH_ALL_DOCTORS_API_URL =
  import.meta.env.VITE_FETCH_ALL_DOCTORS_API_URL ||
  "";

export const FETCH_DEPARTMENTS_API_URL =
  import.meta.env.VITE_FETCH_DEPARTMENTS_API_URL ||
  "";

export const FETCH_ROLES_API_URL =
  import.meta.env.VITE_FETCH_ROLES_API_URL ||
  "";

export const FETCH_STATUS_API_URL =
  import.meta.env.VITE_FETCH_STATUS_API_URL ||
  "";



export const DEPARTMENT_ID_MAP = {
  "Cardiology": "DEPARTMENT202609",
  "General Medicine": "DEPARTMENT202601",
  "Pediatrics": "DEPARTMENT202602",
  "Dermatology": "DEPARTMENT202603",
  "Internal Medicine": "DEPARTMENT202604",
  "Orthopedics": "DEPARTMENT202605",
  "Neurology": "DEPARTMENT202606",
  "Ophthalmology": "DEPARTMENT202607",
  "Dental Care": "DEPARTMENT202608",
};

export const REVERSE_DEPARTMENT_MAP = Object.entries(DEPARTMENT_ID_MAP).reduce(
  (acc, [name, id]) => {
    acc[id] = name;
    return acc;
  },
  {}
);

export const STATUS_ID_MAP = {
  Available: "A",
  Active: "A",
  Unavailable: "U",
  Inactive: "U",
};

export const REVERSE_STATUS_MAP = {
  A: "Available",
  U: "Unavailable",
};


export function resolveDepartment(departmentId, departmentName, specialist = "") {
  let resolvedId = departmentId;
  let resolvedName = departmentName;

  if (resolvedId && REVERSE_DEPARTMENT_MAP[resolvedId]) {
    resolvedName = REVERSE_DEPARTMENT_MAP[resolvedId];
  }

  // If department name is still not resolved, infer from departmentId or specialist
  if (!resolvedName) {
    if (resolvedId && typeof resolvedId === "string" && resolvedId.startsWith("DEPARTMENT202609")) {
      resolvedName = "Cardiology";
    } else if (specialist) {
      const specLower = specialist.toLowerCase();
      if (specLower.includes("heart") || specLower.includes("cardio")) resolvedName = "Cardiology";
      else if (specLower.includes("child") || specLower.includes("pediatric")) resolvedName = "Pediatrics";
      else if (specLower.includes("skin") || specLower.includes("derma")) resolvedName = "Dermatology";
      else if (specLower.includes("bone") || specLower.includes("ortho")) resolvedName = "Orthopedics";
      else if (specLower.includes("brain") || specLower.includes("neuro")) resolvedName = "Neurology";
      else resolvedName = "General Medicine";
    } else {
      resolvedName = "Cardiology";
    }
  }

  if (!resolvedId) {
    resolvedId = DEPARTMENT_ID_MAP[resolvedName] || "DEPARTMENT202609";
  }

  return { departmentId: resolvedId, department: resolvedName };
}

/**
 * Resolve status ID and status name
 */
export function resolveStatus(statusId, statusName) {
  let resolvedId = statusId;
  let resolvedName = statusName;

  if (!resolvedId && resolvedName) {
    resolvedId = STATUS_ID_MAP[resolvedName] || (resolvedName.toLowerCase() === "unavailable" || resolvedName.toLowerCase() === "inactive" ? "U" : "A");
  } else if (resolvedId) {
    resolvedName = REVERSE_STATUS_MAP[resolvedId] || (resolvedId === "A" ? "Available" : "Unavailable");
  } else {
    resolvedId = "A";
    resolvedName = "Available";
  }

  return { statusId: resolvedId, status: resolvedName };
}

/**
 * Cleanly format doctor display name with proper title and capitalization
 */
export function formatDoctorName(raw = "") {
  if (!raw || typeof raw !== "string") return "";
  let trimmed = raw.trim().replace(/\s+/g, " ");
  if (!trimmed) return "";

  const capitalizeWord = (word) => {
    if (!word) return "";
    const lower = word.toLowerCase();
    if (lower === "dr" || lower === "dr.") return "Dr.";
    if (lower === "prof" || lower === "prof.") return "Prof.";
    if (lower === "mr" || lower === "mr.") return "Mr.";
    if (lower === "mrs" || lower === "mrs.") return "Mrs.";
    if (lower === "ms" || lower === "ms.") return "Ms.";
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const words = trimmed.split(" ").map(capitalizeWord);
  let formatted = words.join(" ");

  const hasHonorific = /^(dr\.|dr\b|prof\.|prof\b|doctor\b)/i.test(formatted);
  if (!hasHonorific) {
    formatted = `Dr. ${formatted}`;
  } else if (/^dr\b(?!\.)/i.test(formatted)) {
    formatted = formatted.replace(/^dr\b\s*/i, "Dr. ");
  }

  return formatted;
}

export function formatSpecialist(raw = "") {
  if (!raw || typeof raw !== "string") return "General Specialist";
  const trimmed = raw.trim().replace(/\s+/g, " ");
  if (!trimmed) return "General Specialist";
  return trimmed
    .split(" ")
    .map((w) => (w.length <= 2 && w.toLowerCase() !== "up" ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

export function getDoctorInitials(name = "") {
  if (!name) return "DR";
  const clean = name.replace(/^(dr\.|dr\b|prof\.|prof\b|mr\.|mr\b|mrs\.|mrs\b|ms\.|ms\b)\s*/i, "").trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return clean.slice(0, 2).toUpperCase() || "DR";
}

export function normalizeDoctorRecord(doc = {}, fallbackIndex = 1) {
  const doctorId =
    doc.doctorId ||
    doc.doctor_id ||
    doc.id ||
    doc.staffId ||
    `WNH-DOC-${String(fallbackIndex).padStart(3, "0")}`;

  const rawFirstLast = [doc.firstName, doc.lastName].filter(Boolean).join(" ").trim();
  const candidateName =
    (doc.doctor_name && doc.doctor_name.trim() !== "Dr. Medical Specialist" ? doc.doctor_name.trim() : null) ||
    (rawFirstLast && rawFirstLast !== "Dr. Medical Specialist" && rawFirstLast !== "Medical Specialist" ? rawFirstLast : null) ||
    (doc.fullName && doc.fullName.trim() !== "Dr. Medical Specialist" ? doc.fullName.trim() : null) ||
    (doc.name && doc.name.trim() !== "Dr. Medical Specialist" ? doc.name.trim() : null) ||
    (doc.doctorName && doc.doctorName.trim() !== "Dr. Medical Specialist" ? doc.doctorName.trim() : null) ||
    doc.doctor_name ||
    doc.name ||
    doc.fullName ||
    "";

  const name = candidateName ? formatDoctorName(candidateName) : "Dr. Medical Specialist";

  const cleanWithoutTitle = name
    .replace(/^(dr\.|dr\b|prof\.|prof\b|mr\.|mr\b|mrs\.|mrs\b|ms\.|ms\b)\s*/i, "")
    .trim();
  const nameParts = cleanWithoutTitle.split(/\s+/).filter(Boolean);

  const firstName =
    doc.firstName ||
    nameParts[0] ||
    "";
  const lastName =
    doc.lastName ||
    nameParts.slice(1).join(" ") ||
    "";

  const email = (doc.emailAddress || doc.email || doc.email_address || "").trim();
  const phone = (doc.phone || doc.phoneNumber || doc.phone_number || "").trim();
  const rawSpecialist = (doc.specialist || doc.role || doc.specialistName || "heart specialist").trim();
  const specialist = formatSpecialist(rawSpecialist);

  const { departmentId, department } = resolveDepartment(
    doc.departmentId || doc.department_id,
    doc.department || doc.departmentName || doc.department_name,
    specialist
  );

  const { statusId, status } = resolveStatus(
    doc.statusId || doc.status_id,
    doc.status || doc.statusName || doc.status_name
  );

  const createdAt = doc.createdAt || doc.created_at || new Date().toISOString();

  return {
    doctorId,
    doctor_id: doctorId,
    id: doctorId,
    name,
    fullName: name,
    doctor_name: name,
    doctorName: name,
    firstName,
    lastName,
    emailAddress: email,
    email,
    email_address: email,
    phone,
    phoneNumber: phone,
    phone_number: phone,
    specialist,
    departmentId,
    department,
    departmentName: department,
    statusId,
    status,
    totalPatients: Number(doc.totalPatients ?? doc.total_patients ?? 0) || 0,
    todayAppointments: Number(doc.todayAppointments ?? doc.today_appointments ?? 0) || 0,
    createdAt,
    created_at: createdAt,
    avatar: doc.avatar || null,
  };
}



const LOCAL_STORAGE_KEY = "clincore_doctors";

function notifyDoctorChange(record = null, isEdit = false) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("clincore:doctor-changed", {
        detail: { record, isEdit },
      })
    );
  }
}


export function getStoredDoctors() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((doc, idx) => normalizeDoctorRecord(doc, idx + 1));
  } catch (err) {
    console.error("Error reading stored doctors:", err);
    return [];
  }
}


export function saveStoredDoctors(doctors) {
  try {
    const validArray = Array.isArray(doctors) ? doctors : [];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(validArray));
  } catch (err) {
    console.error("Error saving stored doctors:", err);
  }
}


export function addStoredDoctor(doctor) {
  const normalized = normalizeDoctorRecord(doctor);
  const existing = getStoredDoctors();
  const updated = [
    normalized,
    ...existing.filter((d) => d.doctorId !== normalized.doctorId && d.doctor_id !== normalized.doctorId),
  ];
  saveStoredDoctors(updated);
  notifyDoctorChange(normalized, false);
  return updated;
}


export function removeStoredDoctor(doctorId) {
  const existing = getStoredDoctors();
  const updated = existing.filter((d) => d.doctorId !== doctorId && d.doctor_id !== doctorId);
  saveStoredDoctors(updated);
  notifyDoctorChange({ doctorId }, false);
  return updated;
}


export function updateStoredDoctor(updatedDoctor) {
  const existing = getStoredDoctors();
  const current = existing.find((d) => (d.doctorId === updatedDoctor.doctorId || d.doctorId === updatedDoctor.doctor_id || d.doctor_id === updatedDoctor.doctorId)) || {};
  const merged = normalizeDoctorRecord({ ...current, ...updatedDoctor });

  const updated = existing.map((d) =>
    (d.doctorId === merged.doctorId || d.doctor_id === merged.doctorId || d.doctorId === merged.doctor_id) ? merged : d
  );

  saveStoredDoctors(updated);
  notifyDoctorChange(merged, true);
  return updated;
}



/**
 * Create a doctor profile via ClinCore API
 * POST https://clincore.niitwebdev.com.ng/clincore-api/admin/doctor/create-doctor.php
 *
 * @param {Object} formValues Form values from Add/Create Doctor drawer
 * @returns {Promise<{success: boolean, message: string, data: Object, apiSuccess: boolean}>}
 */
export async function createDoctorProfile(formValues = {}) {
  const firstName = (formValues.firstName || "").trim();
  const lastName = (formValues.lastName || "").trim();
  const concatenatedName = [firstName, lastName].filter(Boolean).join(" ");
  const rawName = concatenatedName || (formValues.name || formValues.fullName || "").trim();
  const name = formatDoctorName(rawName || "Medical Specialist");

  const emailAddress = (formValues.emailAddress || formValues.email || formValues.email_address || "").trim();
  const phone = (formValues.phone || formValues.phoneNumber || formValues.phone_number || "").trim();
  const specialist = formatSpecialist(formValues.specialist || "heart specialist");

  const { departmentId, department } = resolveDepartment(
    formValues.departmentId || formValues.department_id,
    formValues.department || formValues.departmentName,
    specialist
  );
  const { statusId, status } = resolveStatus(
    formValues.statusId || formValues.status_id,
    formValues.status || formValues.statusName
  );

  const requestData = new FormData();
  requestData.append("name", name);
  requestData.append("doctor_name", name);
  requestData.append("emailAddress", emailAddress);
  requestData.append("email_address", emailAddress);
  requestData.append("phone", phone);
  requestData.append("specialist", specialist);
  requestData.append("departmentId", departmentId);
  requestData.append("department_id", departmentId);
  requestData.append("statusId", statusId);
  requestData.append("status_id", statusId);

  let apiSuccess = false;
  let apiMessage = "";
  let returnedData = null;

  try {
    const response = await api.post(CREATE_DOCTOR_API_URL, requestData);
    returnedData = response.data;
    if (returnedData) {
      apiSuccess = returnedData.success !== false;
      apiMessage = returnedData.message || "DOCTOR CREATED SUCCESSFUL";
    }
  } catch (err) {
    console.warn("Doctor API creation request warning/error:", err.message);
    apiSuccess = false;
    apiMessage =
      err.response?.data?.message ||
      err.message ||
      "Unable to create doctor profile on server. Saved locally.";
  }

  const doctorId =
    returnedData?.data?.doctorId ||
    returnedData?.data?.doctor_id ||
    returnedData?.doctorId ||
    returnedData?.doctor_id ||
    `DOCTOR${Date.now()}`;

  const createdDoctor = normalizeDoctorRecord({
    ...formValues,
    doctorId,
    doctor_id: doctorId,
    name,
    fullName: name,
    doctor_name: name,
    firstName: firstName || name.replace(/^Dr\.\s*/i, "").split(" ")[0] || "",
    lastName: lastName || name.replace(/^Dr\.\s*/i, "").split(" ").slice(1).join(" ") || "",
    emailAddress,
    email: emailAddress,
    phone,
    phoneNumber: phone,
    specialist,
    departmentId,
    department,
    statusId,
    status,
    totalPatients: 0,
    todayAppointments: 0,
    createdAt: new Date().toISOString(),
  });

  addStoredDoctor(createdDoctor);

  return {
    success: true,
    message: apiMessage || "DOCTOR CREATED SUCCESSFUL",
    data: createdDoctor,
    apiSuccess,
  };
}

/**
 * Fetch a single doctor profile by doctorId
 * POST https://clincore.niitwebdev.com.ng/clincore-api/admin/doctor/fetch-each-doctor.php
 *
 * @param {string} doctorId Unique Doctor identifier
 * @returns {Promise<Object|null>} Normalized doctor record or null
 */
export async function fetchEachDoctor(doctorId) {
  if (!doctorId) return null;

  const requestData = new FormData();
  requestData.append("doctorId", doctorId);
  requestData.append("doctor_id", doctorId);

  try {
    const response = await api.post(FETCH_EACH_DOCTOR_API_URL, requestData);
    const resData = response.data;

    if (resData && (resData.success || resData.data)) {
      const doc = resData.data || resData;
      const formatted = normalizeDoctorRecord({ ...doc, doctorId });
      updateStoredDoctor(formatted);
      return formatted;
    }
    return null;
  } catch (err) {
    console.warn("fetchEachDoctor error:", err.message);
    return null;
  }
}

/**
 * Fetch all doctor profiles from backend API
 * GET / POST https://clincore.niitwebdev.com.ng/clincore-api/admin/doctor/fetch-all-doctor.php
 *
 * @returns {Promise<Array|null>} Array of normalized doctors or null
 */
export async function fetchAllDoctors() {
  if (typeof navigator !== "undefined" && !navigator.onLine) {
    const offlineErr = new Error("No internet connection");
    offlineErr.isNetworkError = true;
    throw offlineErr;
  }

  try {
    let response;
    try {
      response = await api.get(FETCH_ALL_DOCTORS_API_URL);
    } catch (getErr) {
      if (
        (typeof navigator !== "undefined" && !navigator.onLine) ||
        getErr.code === "ERR_NETWORK" ||
        getErr.message?.toLowerCase().includes("network error") ||
        getErr.isNetworkError
      ) {
        throw getErr;
      }
      response = await api.post(FETCH_ALL_DOCTORS_API_URL);
    }

    const resData = response?.data;
    let list = [];

    if (Array.isArray(resData)) {
      list = resData;
    } else if (resData && Array.isArray(resData.data)) {
      list = resData.data;
    } else if (resData && Array.isArray(resData.date)) {
      list = resData.date;
    } else if (resData && Array.isArray(resData.doctors)) {
      list = resData.doctors;
    } else if (resData && typeof resData === "object") {
      const foundArray = Object.values(resData).find((v) => Array.isArray(v));
      if (foundArray) list = foundArray;
    }

    if (Array.isArray(list) && list.length > 0) {
      const formattedList = list.map((doc, idx) =>
        normalizeDoctorRecord(doc, idx + 1)
      );

      saveStoredDoctors(formattedList);
      return formattedList;
    }

    return [];
  } catch (err) {
    console.warn("fetchAllDoctors API warning:", err.message);
    if (
      (typeof navigator !== "undefined" && !navigator.onLine) ||
      err.code === "ERR_NETWORK" ||
      err.message?.toLowerCase().includes("network error") ||
      err.isNetworkError
    ) {
      throw err;
    }
    return null;
  }
}

/**
 * Synchronize all stored doctors with backend
 *
 * @returns {Promise<Array>} Refreshed doctors array
 */
export async function syncAllDoctorsWithApi() {
  // 1. Attempt fetching fresh full list first
  const allFresh = await fetchAllDoctors();
  if (allFresh && allFresh.length > 0) {
    return allFresh;
  }

  // 2. Fallback: refresh individual records if stored list exists
  const stored = getStoredDoctors();
  if (!stored.length) return [];

  const promises = stored.map(async (doc) => {
    if (doc.doctorId) {
      try {
        const refreshed = await fetchEachDoctor(doc.doctorId);
        return refreshed || doc;
      } catch {
        return doc;
      }
    }
    return doc;
  });

  const updated = await Promise.all(promises);
  saveStoredDoctors(updated);
  return updated;
}

/**
 * Delete a doctor profile from backend and localStorage
 * POST https://clincore.niitwebdev.com.ng/clincore-api/admin/doctor/delete-doctor.php
 *
 * @param {string} doctorId Unique Doctor identifier
 * @returns {Promise<{success: boolean, doctors: Array}>}
 */
export async function deleteDoctorProfile(doctorId) {
  if (!doctorId) return { success: false, doctors: getStoredDoctors() };

  try {
    const requestData = new FormData();
    requestData.append("doctorId", doctorId);
    requestData.append("doctor_id", doctorId);
    await api.post(DELETE_DOCTOR_API_URL, requestData);
  } catch (err) {
    console.warn("deleteDoctorProfile warning:", err.message);
  }

  const updated = removeStoredDoctor(doctorId);
  return { success: true, doctors: updated };
}

/**
 * Search doctor profiles via backend search-doctor.php API
 *
 * @param {string} searchContent Search keyword
 * @returns {Promise<any>} Response from backend
 */
export async function searchDoctorProfile(searchContent) {
  if (!searchContent) return null;

  const requestData = new FormData();
  requestData.append("searchContent", searchContent);

  try {
    const response = await api.post(SEARCH_DOCTOR_API_URL, requestData);
    return response.data;
  } catch (err) {
    console.warn("searchDoctorProfile error:", err.message);
    return null;
  }
}



/**
 *
 * @returns {Promise<{departments: string[], roles: string[], statuses: string[]}>}
 */
export async function fetchDoctorMetadata() {
  const metadata = {
    departments: [],
    roles: [],
    statuses: [],
  };

  const [deptResult, rolesResult, statusResult] = await Promise.allSettled([
    api.get(FETCH_DEPARTMENTS_API_URL).catch(() => api.post(FETCH_DEPARTMENTS_API_URL)),
    api.get(FETCH_ROLES_API_URL).catch(() => api.post(FETCH_ROLES_API_URL)),
    api.get(FETCH_STATUS_API_URL).catch(() => api.post(FETCH_STATUS_API_URL)),
  ]);

  if (deptResult.status === "fulfilled" && deptResult.value?.data) {
    const items = deptResult.value.data.data || deptResult.value.data;
    if (Array.isArray(items) && items.length > 0) {
      metadata.departments = items.map((d) => {
        if (typeof d === "string") return d;
        return d.departmentName || d.name || d.title || d.department || String(d);
      });
    }
  }

  if (rolesResult.status === "fulfilled" && rolesResult.value?.data) {
    const items = rolesResult.value.data.data || rolesResult.value.data;
    if (Array.isArray(items) && items.length > 0) {
      metadata.roles = items.map((r) => {
        if (typeof r === "string") return r;
        return r.roleName || r.name || r.specialist || r.specialistName || String(r);
      });
    }
  }

  if (statusResult.status === "fulfilled" && statusResult.value?.data) {
    const items = statusResult.value.data.data || statusResult.value.data;
    if (Array.isArray(items) && items.length > 0) {
      metadata.statuses = items.map((s) => {
        if (typeof s === "string") return s;
        return s.statusName || s.name || s.status || String(s);
      });
    }
  }

  return metadata;
}

export default {
  createDoctorProfile,
  fetchEachDoctor,
  fetchAllDoctors,
  syncAllDoctorsWithApi,
  deleteDoctorProfile,
  searchDoctorProfile,
  fetchDoctorMetadata,
  getStoredDoctors,
  saveStoredDoctors,
  addStoredDoctor,
  removeStoredDoctor,
  updateStoredDoctor,
  normalizeDoctorRecord,
  formatDoctorName,
  formatSpecialist,
  getDoctorInitials,
  resolveDepartment,
  resolveStatus,
  DEPARTMENT_ID_MAP,
  REVERSE_DEPARTMENT_MAP,
  STATUS_ID_MAP,
  REVERSE_STATUS_MAP,
};
