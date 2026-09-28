/**
 * Form Schemas and Data definitions for ClinCore dynamic drawers & edit modals.
 * Configured according to page entity requirements and exact user designs.
 * 
 * Each schema supports both ADD and EDIT modes:
 * - ADD mode uses `title`, `subtitle`, and `sections`
 * - EDIT mode uses `editTitle`, `editSubtitle`, and `editSections` (falls back to sections)
 */

export const ENTITY_SCHEMAS = {
  staff: {
    type: 'staff',
    entityName: 'Staff Member',
    title: 'Create New Staff',
    editTitle: 'Edit Staff Member',
    subtitle: 'Complete the form below to add a new staff member.',
    editSubtitle: 'Update staff information and employment details.',
    icon: 'bi-person',
    profileTitle: 'Staff Profile',
    profileIcon: 'bi-person',
    bannerImg: '/all-images/body-images/dept-general-medicine.jpg',
    defaultAvatar: 'CH',
    sections: [
      {
        id: 'basic_info',
        title: 'Staff Basic Info',
        icon: 'bi-person',
        fields: [
          { name: 'title', label: 'Select Title', type: 'select', required: true, options: ['Select here', 'Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.'], colSpan: 2 },
          { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter first name', required: true, colSpan: 1 },
          { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Enter last name', required: true, colSpan: 1 },
          { name: 'email', label: 'Email Address', type: 'email', placeholder: 'name@niit.edu / email@clincore.com', required: true, colSpan: 2 },
          { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '080 3123 4567', required: true, colSpan: 2 },
          { name: 'homeAddress', label: 'Home Address', type: 'text', placeholder: 'Enter home address', required: true, colSpan: 2 },
        ]
      },
      {
        id: 'professional_info',
        title: 'Professional & Role Info',
        icon: 'bi-building',
        fields: [
          { name: 'position', label: 'Position / Role', type: 'select', required: true, options: ['Tutor - Web Development', 'Senior Medical Specialist', 'Clinical Director', 'Head Nurse', 'Administrative Officer'], colSpan: 1 },
          { name: 'department', label: 'Department', type: 'select', required: true, options: ['General Medicine', 'Cardiology', 'Pediatrics', 'Dermatology', 'Internal Medicine', 'Orthopedics', 'Neurology'], colSpan: 1 },
          { name: 'status', label: 'Employment Status', type: 'select', required: true, options: ['Active', 'On Leave', 'Inactive'], colSpan: 1 },
          { name: 'startDate', label: 'Joining Date', type: 'date', required: false, colSpan: 1 },
        ]
      }
    ],
    editSections: [
      {
        id: 'basic_info',
        title: 'Staff Basic Info',
        icon: 'bi-person',
        fields: [
          { name: 'title', label: 'Select Title', type: 'select', required: true, options: ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.'], colSpan: 2 },
          { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter first name', required: true, colSpan: 1 },
          { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Enter last name', required: true, colSpan: 1 },
          { name: 'email', label: 'Email Address', type: 'email', placeholder: 'name@niit.edu / email@clincore.com', required: true, colSpan: 2 },
          { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '080 3123 4567', required: true, colSpan: 2 },
          { name: 'homeAddress', label: 'Home Address', type: 'text', placeholder: 'Enter home address', required: true, colSpan: 2 },
        ]
      },
      {
        id: 'professional_info',
        title: 'Professional & Role Info',
        icon: 'bi-building',
        fields: [
          { name: 'position', label: 'Position / Role', type: 'select', required: true, options: ['Tutor - Web Development', 'Senior Medical Specialist', 'Clinical Director', 'Head Nurse', 'Administrative Officer'], colSpan: 1 },
          { name: 'department', label: 'Department', type: 'select', required: true, options: ['General Medicine', 'Cardiology', 'Pediatrics', 'Dermatology', 'Internal Medicine', 'Orthopedics', 'Neurology'], colSpan: 1 },
          { name: 'status', label: 'Employment Status', type: 'select', required: true, options: ['Active', 'On Leave', 'Inactive', 'Suspended', 'Terminated'], colSpan: 1 },
          { name: 'startDate', label: 'Joining Date', type: 'date', required: false, colSpan: 1 },
        ]
      }
    ]
  },

  doctor: {
    type: 'doctor',
    entityName: 'Doctor',
    title: 'Add New Doctor',
    editTitle: 'Edit Doctor Info',
    subtitle: 'Complete the form below to register a new medical specialist.',
    editSubtitle: 'Update doctor information, specialization, and availability status.',
    icon: 'bi-person',
    profileTitle: 'Doctor Profile',
    profileIcon: 'bi-heart-pulse',
    bannerImg: '/all-images/body-images/dept-cardiology.jpg',
    defaultAvatar: 'DR',
    sections: [
      {
        id: 'doctor_basic',
        title: 'Doctor Basic Info',
        icon: 'bi-person',
        fields: [
          { name: 'title', label: 'Title', type: 'select', required: true, options: ['Dr.', 'Prof. Dr.'], colSpan: 2 },
          { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'e.g. Dr. Petra Winsburry', required: true, colSpan: 2 },
          { name: 'email', label: 'Email Address', type: 'email', placeholder: 'doctor@clincore.com', required: true, colSpan: 1 },
          { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 019-2834', required: true, colSpan: 1 },
        ]
      },
      {
        id: 'doctor_specialty',
        title: 'Medical Specialization',
        icon: 'bi-heart-pulse',
        fields: [
          { name: 'department', label: 'Department', type: 'select', required: true, options: ['General Medicine', 'Cardiology', 'Pediatrics', 'Dermatology', 'Internal Medicine', 'Orthopedics', 'Neurology'], colSpan: 1 },
          { name: 'specialist', label: 'Specialist Focus', type: 'select', required: true, options: ['Routine Check-Ups', 'Heart Specialist', 'Child Health', 'Skin Specialist', 'Internal Health', 'Bone Specialist', 'Brain Specialist'], colSpan: 1 },
          { name: 'status', label: 'Availability Status', type: 'select', required: true, options: ['Available', 'On Duty'], colSpan: 1 },
          { name: 'maxPatients', label: 'Daily Patient Capacity', type: 'number', placeholder: '20', required: false, colSpan: 1 },
        ]
      }
    ],
    editSections: [
      {
        id: 'doctor_basic',
        title: 'Doctor Basic Info',
        icon: 'bi-person',
        fields: [
          { name: 'title', label: 'Title', type: 'select', required: true, options: ['Dr.', 'Prof. Dr.'], colSpan: 2 },
          { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'e.g. Dr. Petra Winsburry', required: true, colSpan: 2 },
          { name: 'email', label: 'Email Address', type: 'email', placeholder: 'doctor@clincore.com', required: true, colSpan: 1 },
          { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 019-2834', required: true, colSpan: 1 },
        ]
      },
      {
        id: 'doctor_specialty',
        title: 'Medical Specialization',
        icon: 'bi-heart-pulse',
        fields: [
          { name: 'department', label: 'Department', type: 'select', required: true, options: ['General Medicine', 'Cardiology', 'Pediatrics', 'Dermatology', 'Internal Medicine', 'Orthopedics', 'Neurology'], colSpan: 1 },
          { name: 'specialist', label: 'Specialist Focus', type: 'select', required: true, options: ['Routine Check-Ups', 'Heart Specialist', 'Child Health', 'Skin Specialist', 'Internal Health', 'Bone Specialist', 'Brain Specialist'], colSpan: 1 },
          { name: 'status', label: 'Availability Status', type: 'select', required: true, options: ['Available', 'Unavailable', 'On Duty', 'On Leave', 'Suspended'], colSpan: 1 },
          { name: 'maxPatients', label: 'Daily Patient Capacity', type: 'number', placeholder: '20', required: false, colSpan: 1 },
        ]
      }
    ]
  },

  patient: {
    type: 'patient',
    entityName: 'Patient',
    title: 'Add New Patient',
    editTitle: 'Edit Patient Record',
    subtitle: 'Complete the form below to register a new patient file.',
    editSubtitle: 'Update patient information, treatment, and admission status.',
    icon: 'bi-person',
    profileTitle: 'Patient Medical Record',
    profileIcon: 'bi-clipboard-plus',
    bannerImg: '/all-images/body-images/dept-pediatrics.jpg',
    defaultAvatar: 'PT',
    sections: [
      {
        id: 'patient_personal',
        title: 'Patient Personal Info',
        icon: 'bi-person',
        fields: [
          { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'e.g. Caren G. Simpson', required: true, colSpan: 2 },
          { name: 'age', label: 'Age', type: 'number', placeholder: '35', required: true, colSpan: 1 },
          { name: 'gender', label: 'Gender', type: 'select', required: true, options: ['Male', 'Female', 'Other'], colSpan: 1 },
          { name: 'email', label: 'Email Address', type: 'email', placeholder: 'patient@gmail.com', required: false, colSpan: 2 },
          { name: 'phone', label: 'Contact Phone', type: 'tel', placeholder: '080 3123 4567', required: true, colSpan: 2 },
        ]
      },
      {
        id: 'patient_admission',
        title: 'Admission & Doctor Assignment',
        icon: 'bi-hospital-bed',
        fields: [
          { name: 'treatment', label: 'Treatment Required', type: 'text', placeholder: 'e.g. Routine Check-Up', required: true, colSpan: 1 },
          { name: 'doctor', label: 'Doctor Assigned', type: 'select', required: true, options: ['Dr. Petra Winsburry', 'Dr. Olivia Martinez', 'Dr. Damian Sanchez', 'Dr. Chloe Harrington', 'Dr. Julian Vance'], colSpan: 1 },
          { name: 'room', label: 'Room Assignment', type: 'select', required: false, options: ['None (Outpatient)', 'Single - 304', 'Double - 303', 'ICU - 101', 'VIP Suite - 501'], colSpan: 1 },
          { name: 'status', label: 'Patient Status', type: 'select', required: true, options: ['New Patient', 'Active'], colSpan: 1 },
        ]
      }
    ],
    editSections: [
      {
        id: 'patient_personal',
        title: 'Patient Personal Info',
        icon: 'bi-person',
        fields: [
          { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'e.g. Caren G. Simpson', required: true, colSpan: 2 },
          { name: 'age', label: 'Age', type: 'number', placeholder: '35', required: true, colSpan: 1 },
          { name: 'gender', label: 'Gender', type: 'select', required: true, options: ['Male', 'Female', 'Other'], colSpan: 1 },
          { name: 'email', label: 'Email Address', type: 'email', placeholder: 'patient@gmail.com', required: false, colSpan: 2 },
          { name: 'phone', label: 'Contact Phone', type: 'tel', placeholder: '080 3123 4567', required: true, colSpan: 2 },
        ]
      },
      {
        id: 'patient_admission',
        title: 'Admission & Doctor Assignment',
        icon: 'bi-hospital-bed',
        fields: [
          { name: 'treatment', label: 'Treatment Required', type: 'text', placeholder: 'e.g. Routine Check-Up', required: true, colSpan: 1 },
          { name: 'doctor', label: 'Doctor Assigned', type: 'select', required: true, options: ['Dr. Petra Winsburry', 'Dr. Olivia Martinez', 'Dr. Damian Sanchez', 'Dr. Chloe Harrington', 'Dr. Julian Vance'], colSpan: 1 },
          { name: 'room', label: 'Room Assignment', type: 'select', required: false, options: ['None (Outpatient)', 'Single - 304', 'Double - 303', 'ICU - 101', 'VIP Suite - 501'], colSpan: 1 },
          { name: 'status', label: 'Patient Status', type: 'select', required: true, options: ['Active', 'New Patient', 'Inactive', 'Discharged', 'Critical', 'Recovering'], colSpan: 1 },
        ]
      }
    ]
  },

  appointment: {
    type: 'appointment',
    entityName: 'Appointment',
    title: 'Add New Appointment',
    editTitle: 'Edit Appointment',
    subtitle: 'Schedule a new medical consultation or check-up.',
    editSubtitle: 'Update appointment details, reschedule, or change status.',
    icon: 'bi-calendar-check',
    profileTitle: 'Appointment Details',
    profileIcon: 'bi-calendar-event',
    bannerImg: '/all-images/body-images/dept-internal-medicine.jpg',
    defaultAvatar: 'AP',
    sections: [
      {
        id: 'appt_details',
        title: 'Appointment Info',
        icon: 'bi-calendar-week',
        fields: [
          { name: 'patientName', label: 'Patient Name', type: 'text', placeholder: 'Search or enter patient name', required: true, colSpan: 2 },
          { name: 'doctor', label: 'Doctor', type: 'select', required: true, options: ['Dr. Petra Winsburry', 'Dr. Olivia Martinez', 'Dr. Damian Sanchez', 'Dr. Chloe Harrington'], colSpan: 1 },
          { name: 'department', label: 'Department', type: 'select', required: true, options: ['General Medicine', 'Cardiology', 'Pediatrics', 'Dermatology'], colSpan: 1 },
          { name: 'treatment', label: 'Treatment', type: 'text', placeholder: 'e.g. Routine Check-Up', required: true, colSpan: 2 },
          { name: 'date', label: 'Appointment Date', type: 'date', required: true, colSpan: 1 },
          { name: 'time', label: 'Time Slot', type: 'time', required: true, colSpan: 1 },
          { name: 'status', label: 'Status', type: 'select', required: true, options: ['Scheduled', 'Confirmed'], colSpan: 2 },
        ]
      }
    ],
    editSections: [
      {
        id: 'appt_details',
        title: 'Appointment Info',
        icon: 'bi-calendar-week',
        fields: [
          { name: 'patientName', label: 'Patient Name', type: 'text', placeholder: 'Search or enter patient name', required: true, colSpan: 2 },
          { name: 'doctor', label: 'Doctor', type: 'select', required: true, options: ['Dr. Petra Winsburry', 'Dr. Olivia Martinez', 'Dr. Damian Sanchez', 'Dr. Chloe Harrington'], colSpan: 1 },
          { name: 'department', label: 'Department', type: 'select', required: true, options: ['General Medicine', 'Cardiology', 'Pediatrics', 'Dermatology'], colSpan: 1 },
          { name: 'treatment', label: 'Treatment', type: 'text', placeholder: 'e.g. Routine Check-Up', required: true, colSpan: 2 },
          { name: 'date', label: 'Appointment Date', type: 'date', required: true, colSpan: 1 },
          { name: 'time', label: 'Time Slot', type: 'time', required: true, colSpan: 1 },
          { name: 'status', label: 'Status', type: 'select', required: true, options: ['Scheduled', 'Confirmed', 'Completed', 'Cancelled', 'No Show'], colSpan: 2 },
        ]
      }
    ]
  },

  department: {
    type: 'department',
    entityName: 'Department',
    title: 'Add New Department',
    editTitle: 'Edit Department',
    subtitle: 'Create a new clinical department and assign head officers.',
    editSubtitle: 'Update department details, staffing, and operational status.',
    icon: 'bi-building',
    profileTitle: 'Department Overview',
    profileIcon: 'bi-building',
    bannerImg: '/all-images/body-images/dept-orthopedics.jpg',
    defaultAvatar: 'DP',
    sections: [
      {
        id: 'dept_info',
        title: 'Department Information',
        icon: 'bi-building',
        fields: [
          { name: 'title', label: 'Department Name', type: 'text', placeholder: 'e.g. Neurology', required: true, colSpan: 2 },
          { name: 'deptHead', label: 'Head of Department', type: 'text', placeholder: 'Dr. Nathan Drake', required: true, colSpan: 2 },
          { name: 'status', label: 'Status', type: 'select', required: true, options: ['Active'], colSpan: 1 },
          { name: 'staffCount', label: 'Initial Staff Count', type: 'number', placeholder: '15', required: false, colSpan: 1 },
          { name: 'desc', label: 'Description', type: 'textarea', placeholder: 'Enter department overview and services...', required: true, colSpan: 2 },
          { name: 'profileImage', label: 'Department Profile Image', type: 'file', accept: 'image/*', placeholder: 'Upload department profile picture', required: false, colSpan: 2 },
        ]
      }
    ],
    editSections: [
      {
        id: 'dept_info',
        title: 'Department Information',
        icon: 'bi-building',
        fields: [
          { name: 'title', label: 'Department Name', type: 'text', placeholder: 'e.g. Neurology', required: true, colSpan: 2 },
          { name: 'deptHead', label: 'Head of Department', type: 'text', placeholder: 'Dr. Nathan Drake', required: true, colSpan: 2 },
          { name: 'status', label: 'Status', type: 'select', required: true, options: ['Active', 'Inactive', 'Under Review'], colSpan: 1 },
          { name: 'staffCount', label: 'Staff Count', type: 'number', placeholder: '15', required: false, colSpan: 1 },
          { name: 'desc', label: 'Description', type: 'textarea', placeholder: 'Enter department overview and services...', required: true, colSpan: 2 },
          { name: 'profileImage', label: 'Department Profile Image', type: 'file', accept: 'image/*', placeholder: 'Upload department profile picture', required: false, colSpan: 2 },
        ]
      }
    ]
  },

  inventory: {
    type: 'inventory',
    entityName: 'Inventory Item',
    title: 'Add Inventory Item',
    editTitle: 'Edit Inventory Item',
    subtitle: 'Add new medical stock, pharmaceutical supplies, or equipment.',
    editSubtitle: 'Update item details, stock levels, and availability status.',
    icon: 'bi-box-seam',
    profileTitle: 'Item Details & Stock',
    profileIcon: 'bi-box-seam',
    bannerImg: '/all-images/body-images/dept-dermatology.jpg',
    defaultAvatar: 'INV',
    sections: [
      {
        id: 'inv_info',
        title: 'Item & Stock Specification',
        icon: 'bi-box-seam',
        fields: [
          { name: 'itemName', label: 'Item Name', type: 'text', placeholder: 'e.g. Amoxicillin 500mg', required: true, colSpan: 2 },
          { name: 'category', label: 'Category', type: 'select', required: true, options: ['Pharmaceuticals', 'Medical Supplies', 'Surgical Equipment', 'Personal Protective'], colSpan: 1 },
          { name: 'quantity', label: 'Quantity in Stock', type: 'number', placeholder: '500', required: true, colSpan: 1 },
          { name: 'unitPrice', label: 'Unit Price ($)', type: 'text', placeholder: '25.00', required: true, colSpan: 1 },
          { name: 'status', label: 'Stock Status', type: 'select', required: true, options: ['In Stock', 'Low Stock'], colSpan: 1 },
        ]
      }
    ],
    editSections: [
      {
        id: 'inv_info',
        title: 'Item & Stock Specification',
        icon: 'bi-box-seam',
        fields: [
          { name: 'itemName', label: 'Item Name', type: 'text', placeholder: 'e.g. Amoxicillin 500mg', required: true, colSpan: 2 },
          { name: 'category', label: 'Category', type: 'select', required: true, options: ['Pharmaceuticals', 'Medical Supplies', 'Surgical Equipment', 'Personal Protective'], colSpan: 1 },
          { name: 'quantity', label: 'Quantity in Stock', type: 'number', placeholder: '500', required: true, colSpan: 1 },
          { name: 'reorderQty', label: 'Reorder Quantity', type: 'number', placeholder: '100', required: false, colSpan: 1 },
          { name: 'unitPrice', label: 'Unit Price ($)', type: 'text', placeholder: '25.00', required: true, colSpan: 1 },
          { name: 'status', label: 'Stock Status', type: 'select', required: true, options: ['In Stock', 'Low Stock', 'Out of Stock', 'Discontinued'], colSpan: 2 },
        ]
      }
    ]
  },

  room: {
    type: 'room',
    entityName: 'Room',
    title: 'Add New Room',
    editTitle: 'Edit Room',
    subtitle: 'Register a hospital ward, private room, or surgical bed.',
    editSubtitle: 'Update room details, capacity, and availability status.',
    icon: 'bi-hospital-bed',
    profileTitle: 'Room Configuration',
    profileIcon: 'bi-hospital-bed',
    bannerImg: '/all-images/body-images/dept-neurology.jpg',
    defaultAvatar: 'RM',
    sections: [
      {
        id: 'room_info',
        title: 'Room Details',
        icon: 'bi-hospital-bed',
        fields: [
          { name: 'roomName', label: 'Room Number / Name', type: 'text', placeholder: 'e.g. Ward 402', required: true, colSpan: 2 },
          { name: 'roomType', label: 'Room Type', type: 'select', required: true, options: ['Single Ward', 'Double Ward', 'ICU', 'VIP Suite', 'Emergency Bed'], colSpan: 1 },
          { name: 'capacity', label: 'Bed Capacity', type: 'number', placeholder: '2', required: true, colSpan: 1 },
          { name: 'dailyRate', label: 'Daily Rate ($)', type: 'text', placeholder: '150.00', required: true, colSpan: 1 },
          { name: 'status', label: 'Availability', type: 'select', required: true, options: ['Available'], colSpan: 1 },
        ]
      }
    ],
    editSections: [
      {
        id: 'room_info',
        title: 'Room Details',
        icon: 'bi-hospital-bed',
        fields: [
          { name: 'roomName', label: 'Room Number / Name', type: 'text', placeholder: 'e.g. Ward 402', required: true, colSpan: 2 },
          { name: 'roomType', label: 'Room Type', type: 'select', required: true, options: ['Single Ward', 'Double Ward'], colSpan: 1 },
          { name: 'capacity', label: 'Bed Capacity', type: 'number', placeholder: '2', required: true, colSpan: 1 },
          { name: 'dailyRate', label: 'Daily Rate ($)', type: 'text', placeholder: '150.00', required: true, colSpan: 1 },
          { name: 'status', label: 'Availability', type: 'select', required: true, options: ['Available', 'Occupied', 'Unavailable (Maintenance)', 'Reserved'], colSpan: 1 },
        ]
      }
    ]
  },

  payment: {
    type: 'payment',
    entityName: 'Invoice',
    title: 'Create New Invoice',
    editTitle: 'Edit Invoice',
    subtitle: 'Generate a new billing invoice for patient care or treatment.',
    editSubtitle: 'Update invoice details, payment method, and payment status.',
    icon: 'bi-credit-card',
    profileTitle: 'Invoice & Payment Record',
    profileIcon: 'bi-credit-card',
    bannerImg: '/all-images/body-images/dept-general-medicine.jpg',
    defaultAvatar: 'INV',
    sections: [
      {
        id: 'invoice_info',
        title: 'Billing & Invoice Details',
        icon: 'bi-card-checklist',
        fields: [
          { name: 'patientName', label: 'Patient Name', type: 'text', placeholder: 'Enter patient name', required: true, colSpan: 2 },
          { name: 'treatment', label: 'Treatment / Service', type: 'text', placeholder: 'e.g. Cardiac Surgery & Care', required: true, colSpan: 2 },
          { name: 'amount', label: 'Total Amount ($)', type: 'text', placeholder: '1,250.00', required: true, colSpan: 1 },
          { name: 'paymentMethod', label: 'Payment Method', type: 'select', required: true, options: ['Credit Card', 'Insurance Claim', 'Bank Transfer', 'Cash'], colSpan: 1 },
          { name: 'status', label: 'Invoice Status', type: 'select', required: true, options: ['Pending'], colSpan: 2 },
        ]
      }
    ],
    editSections: [
      {
        id: 'invoice_info',
        title: 'Billing & Invoice Details',
        icon: 'bi-card-checklist',
        fields: [
          { name: 'patientName', label: 'Patient Name', type: 'text', placeholder: 'Enter patient name', required: true, colSpan: 2 },
          { name: 'treatment', label: 'Treatment / Service', type: 'text', placeholder: 'e.g. Cardiac Surgery & Care', required: true, colSpan: 2 },
          { name: 'amount', label: 'Total Amount ($)', type: 'text', placeholder: '1,250.00', required: true, colSpan: 1 },
          { name: 'paymentMethod', label: 'Payment Method', type: 'select', required: true, options: ['Credit Card', 'Insurance Claim', 'Bank Transfer', 'Cash'], colSpan: 1 },
          { name: 'date', label: 'Invoice Date', type: 'date', required: true, colSpan: 1 },
          { name: 'status', label: 'Invoice Status', type: 'select', required: true, options: ['Paid', 'Pending', 'Overdue', 'Refunded', 'Cancelled'], colSpan: 1 },
        ]
      }
    ]
  }
};

/**
 * Filter dropdown configurations per page.
 * Used by FilterDropdown component to render filter options.
 */
export const FILTER_CONFIGS = {
  patient: {
    treatment: {
      label: 'All Treatment',
      icon: 'bi-funnel',
      options: ['All Treatment', 'Routine Check-Up', 'Heart Condition', 'Child Vaccination', 'Skin Allergy', 'Dental Cleaning', 'Eye Check-Up', 'Bone Fracture', 'Blood Test']
    },
    status: {
      label: 'All Status',
      icon: 'bi-funnel',
      options: ['All Status', 'Active', 'New Patient', 'Inactive', 'Discharged', 'Critical', 'Recovering']
    },
    dateRange: {
      label: '1 July - 20 July 2028',
      icon: 'bi-calendar-week',
      options: ['1 July - 20 July 2028', '1 June - 30 June 2028', '1 May - 31 May 2028', 'Last 7 Days', 'Last 30 Days', 'Custom Range']
    }
  },
  department: {
    departments: {
      label: 'All Departments',
      icon: 'bi-funnel',
      options: ['All Departments', 'General Medicine', 'Cardiology', 'Pediatrics', 'Dermatology', 'Internal Medicine', 'Orthopedics', 'Neurology', 'Oncology', 'Obstetrics and Gynecology (OB/GYN)']
    },
    status: {
      label: 'All Status',
      icon: 'bi-funnel',
      options: ['All Status', 'Active', 'Inactive']
    },
    dateRange: {
      label: '1 July - 20 July 2028',
      icon: 'bi-calendar-week',
      options: ['1 July - 20 July 2028', '1 June - 30 June 2028', '1 May - 31 May 2028', 'Last 7 Days', 'Last 30 Days', 'Custom Range']
    }
  },
  appointment: {
    date: {
      label: 'Today',
      icon: 'bi-calendar-week',
      options: ['Today', 'Tomorrow', 'This Week', 'This Month', 'Last 7 Days', 'Last 30 Days', 'Custom Range']
    }
  },
  room: {
    capacity: {
      label: 'All Capacity',
      icon: 'bi-funnel',
      options: ['All Capacity', 'Single', 'Double', 'Triple', 'ICU', 'VIP Suite']
    }
  },
  inventory: {
    category: {
      label: 'All Category',
      icon: 'bi-funnel',
      options: ['All Category', 'Pharmaceuticals', 'Medical Supplies', 'Surgical Equipment', 'Personal Protective', 'PPE']
    },
    status: {
      label: 'All Status',
      icon: 'bi-funnel',
      options: ['All Status', 'Available', 'Low Stock', 'Out of Stock']
    }
  },
  payment: {
    status: {
      label: 'Status',
      icon: 'bi-funnel',
      options: ['All Status', 'Paid', 'Pending', 'Overdue', 'Refunded']
    },
    dateRange: {
      label: '1 - 20 July 2028',
      icon: 'bi-calendar-week',
      options: ['1 - 20 July 2028', '1 - 30 June 2028', 'Last 7 Days', 'Last 30 Days', 'This Month', 'Custom Range']
    }
  }
};
