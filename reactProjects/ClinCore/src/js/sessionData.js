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
  payments: [
    { id: "payment-001", invoiceId: "INV-WNH-001", patientName: "John Doe", treatment: "Routine Check-Up", department: "General Medicine", date: "2028-07-01", amount: "100.00", paymentMethod: "Credit Card", status: "Paid" },
    { id: "payment-002", invoiceId: "INV-WNH-002", patientName: "Mary Johnson", treatment: "Heart Surgery", department: "Cardiology", date: "2028-07-02", amount: "5000.00", paymentMethod: "Bank Transfer", status: "Pending" },
    { id: "payment-003", invoiceId: "INV-WNH-003", patientName: "Robert Brown", treatment: "Flu Symptoms", department: "General Medicine", date: "2028-07-03", amount: "120.00", paymentMethod: "Credit Card", status: "Paid" },
    { id: "payment-004", invoiceId: "INV-WNH-004", patientName: "Susan Lee", treatment: "Skin Treatment", department: "Dermatology", date: "2028-07-04", amount: "200.00", paymentMethod: "Cash", status: "Paid" },
    { id: "payment-005", invoiceId: "INV-WNH-005", patientName: "James Wilson", treatment: "Arthritis Management", department: "Orthopedics", date: "2028-07-05", amount: "140.00", paymentMethod: "Credit Card", status: "Pending" },
    { id: "payment-006", invoiceId: "INV-WNH-006", patientName: "Caren G. Simpson", treatment: "Routine Check-Up", department: "General Medicine", date: "2028-07-06", amount: "100.00", paymentMethod: "Cash", status: "Paid" },
    { id: "payment-007", invoiceId: "INV-WNH-007", patientName: "Patricia Clark", treatment: "Hypertension Management", department: "Internal Medicine", date: "2028-07-07", amount: "150.00", paymentMethod: "Bank Transfer", status: "Pending" },
    { id: "payment-008", invoiceId: "INV-WNH-008", patientName: "Kevin White", treatment: "Respiratory Infection", department: "General Medicine", date: "2028-07-08", amount: "180.00", paymentMethod: "Credit Card", status: "Paid" },
    { id: "payment-009", invoiceId: "INV-WNH-009", patientName: "Jennifer Adams", treatment: "Preventive Care", department: "General Medicine", date: "2028-07-09", amount: "130.00", paymentMethod: "Cash", status: "Paid" },
    { id: "payment-010", invoiceId: "INV-WNH-010", patientName: "Barbara Harris", treatment: "Medication Review", department: "Internal Medicine", date: "2028-07-10", amount: "110.00", paymentMethod: "Credit Card", status: "Pending" },
    { id: "payment-011", invoiceId: "INV-WNH-011", patientName: "Michael Thompson", treatment: "Routine Check-Up", department: "General Medicine", date: "2028-07-11", amount: "100.00", paymentMethod: "Credit Card", status: "Paid" },
    { id: "payment-012", invoiceId: "INV-WNH-012", patientName: "Rachel Green", treatment: "Asthma Management", department: "Pulmonology", date: "2028-07-12", amount: "160.00", paymentMethod: "Cash", status: "Pending" },
  ],
  inventory: [
    { id: "inventory-001", name: "Surgical Masks", category: "Personal Protective", qty: 500, reorderQty: 200, price: "12.50", status: "In Stock", image: "all-images/body-images/surgical-masks.svg" },
    { id: "inventory-002", name: "Gloves", category: "Personal Protective", qty: 50, reorderQty: 150, price: "15.00", status: "Low Stock", image: "all-images/body-images/gloves.svg" },
    { id: "inventory-003", name: "Hand Sanitizer", category: "Medical Supplies", qty: 200, reorderQty: 100, price: "8.00", status: "In Stock", image: "all-images/body-images/hand-sanitizer.svg" },
    { id: "inventory-004", name: "Thermometers", category: "Medical Supplies", qty: 0, reorderQty: 300, price: "45.00", status: "Out of Stock", image: "all-images/body-images/thermometers.svg" },
    { id: "inventory-005", name: "Stethoscopes", category: "Medical Supplies", qty: 30, reorderQty: 50, price: "85.00", status: "In Stock", image: "all-images/body-images/stethoscopes.svg" },
    { id: "inventory-006", name: "Blood Pressure Monitors", category: "Medical Supplies", qty: 20, reorderQty: 100, price: "65.00", status: "Low Stock", image: "all-images/body-images/blood-pressure-monitors.svg" },
    { id: "inventory-007", name: "Bandages", category: "Medical Supplies", qty: 300, reorderQty: 200, price: "5.00", status: "In Stock", image: "all-images/body-images/bandages.svg" },
    { id: "inventory-008", name: "IV Fluids", category: "Pharmaceuticals", qty: 10, reorderQty: 150, price: "22.00", status: "Low Stock", image: "all-images/body-images/iv-fluids.svg" },
    { id: "inventory-009", name: "Scalpel Blades", category: "Surgical Equipment", qty: 0, reorderQty: 200, price: "30.00", status: "Out of Stock", image: "all-images/body-images/scalpel-blades.svg" },
    { id: "inventory-010", name: "Syringes", category: "Medical Supplies", qty: 400, reorderQty: 300, price: "18.00", status: "In Stock", image: "all-images/body-images/syringes.svg" },
    { id: "inventory-011", name: "Medical Gowns", category: "Personal Protective", qty: 150, reorderQty: 100, price: "28.00", status: "In Stock", image: "all-images/body-images/medical-gowns.svg" },
    { id: "inventory-012", name: "Disinfectant Wipes", category: "Medical Supplies", qty: 25, reorderQty: 200, price: "9.00", status: "Low Stock", image: "all-images/body-images/disinfectant-wipes.svg" },
  ],
};

const storageKey = (collection) => `clincore:session:${collection}`;

export function readSessionCollection(collection) {
  const key = storageKey(collection);
  const saved = window.sessionStorage.getItem(key);
  if (saved !== null) {
    let records = JSON.parse(saved);
    if (!Array.isArray(records)) {
      throw new Error(`Saved ${collection} data must be an array.`);
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
