import { useEffect, useState } from "react";

export const DEPARTMENT_NAMES = [
  "General Medicine",
  "Cardiology",
  "Pediatrics",
  "Dermatology",
  "Internal Medicine",
  "Orthopedics",
  "Neurology",
  "Oncology",
  "Obstetrics and Gynecology (OB/GYN)",
];

const departmentImages = {
  "General Medicine": "all-images/body-images/dept-general-medicine.jpg",
  Cardiology: "all-images/body-images/dept-cardiology.jpg",
  Pediatrics: "all-images/body-images/dept-pediatrics.jpg",
  Dermatology: "all-images/body-images/dept-dermatology.jpg",
  "Internal Medicine": "all-images/body-images/dept-internal-medicine.jpg",
  Orthopedics: "all-images/body-images/dept-orthopedics.jpg",
  Neurology: "all-images/body-images/dept-neurology.jpg",
  Oncology: "all-images/body-images/dept-oncology.jpg",
  "Obstetrics and Gynecology (OB/GYN)": "all-images/body-images/dept-obgyn.jpg",
};

const demoDepartments = [
  ["General Medicine", "Active", "Provides comprehensive healthcare services including routine check-ups, preventive care, and treatment for a wide range of illnesses.", 15],
  ["Cardiology", "Active", "Specializes in the diagnosis and treatment of heart-related conditions, offering advanced cardiac care and preventive cardiology.", 10],
  ["Pediatrics", "Active", "Dedicated to the health and well-being of children, providing specialized care for infants, children, and adolescents.", 7],
  ["Dermatology", "Active", "Focuses on the treatment of skin conditions, offering medical and cosmetic dermatology services to improve skin health.", 5],
  ["Internal Medicine", "Active", "Provides primary care for adults, focusing on the prevention, diagnosis, and treatment of adult diseases.", 13],
  ["Orthopedics", "Active", "Specializes in the treatment of musculoskeletal system disorders, including bones, joints, ligaments, tendons, and muscles.", 9],
  ["Neurology", "Active", "Deals with disorders of the nervous system, offering expert care for conditions affecting the brain, spinal cord, and nerves.", 6],
  ["Oncology", "Inactive", "Focuses on the diagnosis and treatment of cancer, providing comprehensive cancer care and support services.", 8],
  ["Obstetrics and Gynecology (OB/GYN)", "Active", "Provides care for women's health, including pregnancy, childbirth, and reproductive health.", 11],
];

const legacyAppointmentIds = new Set([
  "appointment-001",
  "appointment-002",
  "appointment-003",
  "appointment-004",
  "appointment-005",
  "appointment-006",
  "appointment-007",
  "appointment-008",
  "appointment-009",
  "appointment-010",
]);

export const SESSION_SEEDS = {
  appointments: [],
  departments: demoDepartments.map(([title, status, desc, staffCount], index) => ({
    id: `department-${String(index + 1).padStart(3, "0")}`,
    title,
    status,
    desc,
    staffCount,
    deptHead: "Dr. Medical Director",
    profileImage: departmentImages[title],
  })),
  payments: [],
  inventory: [],
};

const storageKey = (collection) => `clincore:session:${collection}`;
const legacyDemoIdPatterns = {
  payments: /^payment-\d{3}$/,
  inventory: /^inventory-\d{3}$/,
};

export function readSessionCollection(collection) {
  const key = storageKey(collection);
  const saved = window.sessionStorage.getItem(key);
  if (saved !== null) {
    let records = JSON.parse(saved);
    if (!Array.isArray(records)) {
      throw new Error(`Saved ${collection} data must be an array.`);
    }
    const legacyDemoIdPattern = legacyDemoIdPatterns[collection];
    if (legacyDemoIdPattern) {
      const activeRecords = records.filter((record) => !legacyDemoIdPattern.test(record.id));
      if (activeRecords.length !== records.length) {
        records = activeRecords;
        window.sessionStorage.setItem(key, JSON.stringify(records));
      }
    }
    if (collection === "appointments") {
      const activeRecords = records.filter((record) => !legacyAppointmentIds.has(record.id));
      if (activeRecords.length !== records.length) {
        records = activeRecords;
        window.sessionStorage.setItem(key, JSON.stringify(records));
      }
    }
    return records;
  }

  const initialRecords = JSON.parse(JSON.stringify(SESSION_SEEDS[collection] || []));
  window.sessionStorage.setItem(key, JSON.stringify(initialRecords));
  return initialRecords;
}

export function saveSessionRecord(collection, record, isEdit) {
  const records = readSessionCollection(collection);
  const updatedRecord = {
    ...record,
    id: record.id || `record-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  };
  const existingIndex = records.findIndex((item) => item.id === updatedRecord.id);
  if (isEdit && existingIndex === -1) {
    throw new Error(`The ${collection} record could not be found in this session.`);
  }

  if (existingIndex === -1) {
    records.unshift(updatedRecord);
  } else {
    records[existingIndex] = { ...records[existingIndex], ...updatedRecord };
  }

  window.sessionStorage.setItem(storageKey(collection), JSON.stringify(records));
  window.dispatchEvent(new CustomEvent("clincore:session-data-changed", { detail: { collection } }));
  return updatedRecord;
}

export function deleteSessionRecord(collection, id) {
  const records = readSessionCollection(collection);
  const remainingRecords = records.filter((record) => record.id !== id);
  if (remainingRecords.length === records.length) {
    throw new Error(`The ${collection} record could not be found in this session.`);
  }

  window.sessionStorage.setItem(storageKey(collection), JSON.stringify(remainingRecords));
  window.dispatchEvent(new CustomEvent("clincore:session-data-changed", { detail: { collection } }));
}

export function useSessionCollection(collection) {
  const [records, setRecords] = useState(() => readSessionCollection(collection));

  useEffect(() => {
    const refresh = (event) => {
      if (!event.detail || event.detail.collection === collection) {
        setRecords(readSessionCollection(collection));
      }
    };
    const handleStorage = (event) => {
      if (event.key === storageKey(collection)) {
        setRecords(readSessionCollection(collection));
      }
    };

    window.addEventListener("clincore:session-data-changed", refresh);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("clincore:session-data-changed", refresh);
      window.removeEventListener("storage", handleStorage);
    };
  }, [collection]);

  return records;
}
