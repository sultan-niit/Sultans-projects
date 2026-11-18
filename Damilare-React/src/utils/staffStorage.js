import dmlAvatar from "../assets/body-images/DML AVATER.png";

export const SUPER_ADMIN_EMAILS = [
  "wahabmuiz623@gmail.com",
  "dml@gmail.com",
];

export const AVAILABLE_ROLES = [
  "Administrator",
  "Warehouse Manager",
  "Senior Sales Rep",
  "Solar Technician",
  "Store Auditor",
  "Fulfillment Clerk",
  "Pending Assignment",
];

export const AVAILABLE_DEPARTMENTS = [
  "Executive",
  "Inventory",
  "Sales",
  "Technical",
  "Dispatch",
  "Operations",
  "Unassigned",
];

export const AVAILABLE_STATUSES = [
  "Active",
  "Pending",
  "Inactive",
];

export const DEFAULT_STAFF = [
  {
    id: "STF-001",
    fullName: "Damilare (DML)",
    emailAddress: "dml@gmail.com",
    phoneNumber: "+234 801 234 5678",
    role: "Administrator",
    department: "Executive",
    dateEmployed: "01/10/2022",
    status: "Active",
    avatarType: "image",
    avatarSrc: dmlAvatar,
  },
  {
    id: "STF-002",
    fullName: "Ramesh Chaudhary",
    emailAddress: "ramesh@gmail.com",
    phoneNumber: "+234 802 345 6789",
    role: "Warehouse Manager",
    department: "Inventory",
    dateEmployed: "03/15/2022",
    status: "Active",
    avatarType: "initials",
    avatarClass: "avatar-blue",
    initials: "RC",
  },
  {
    id: "STF-003",
    fullName: "Sarah Jenkins",
    emailAddress: "sarah.j@gmail.com",
    phoneNumber: "+234 803 456 7890",
    role: "Senior Sales Rep",
    department: "Sales",
    dateEmployed: "06/20/2022",
    status: "Active",
    avatarType: "initials",
    avatarClass: "avatar-purple",
    initials: "SJ",
  },
  {
    id: "STF-004",
    fullName: "Michael Adeyemi",
    emailAddress: "adeyemi.m@gmail.com",
    phoneNumber: "+234 804 567 8901",
    role: "Solar Technician",
    department: "Technical",
    dateEmployed: "11/05/2022",
    status: "Active",
    avatarType: "initials",
    avatarClass: "avatar-orange",
    initials: "MA",
  },
  {
    id: "STF-005",
    fullName: "Fatima Al-Mansoor",
    emailAddress: "fatima.m@gmail.com",
    phoneNumber: "+234 805 678 9012",
    role: "Store Auditor",
    department: "Inventory",
    dateEmployed: "02/18/2023",
    status: "Active",
    avatarType: "initials",
    avatarClass: "avatar-teal",
    initials: "FA",
  },
  {
    id: "STF-006",
    fullName: "Alex Rivera",
    emailAddress: "alex.r@gmail.com",
    phoneNumber: "+234 806 789 0123",
    role: "Fulfillment Clerk",
    department: "Dispatch",
    dateEmployed: "08/12/2023",
    status: "Active",
    avatarType: "initials",
    avatarClass: "avatar-gray",
    initials: "AR",
  },
];

const STORAGE_KEY = "damilare_staff_list";

export const getFormattedCurrentDate = () => {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const yyyy = now.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
};

export const formatEmailToName = (emailStr = "") => {
  if (!emailStr) return "Staff Member";
  const username = emailStr.split("@")[0];
  return username
    .split(/[._-]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
};

export const getInitials = (name = "") => {
  const clean = name.replace(/[\(\)\[\]\{\}\.\-_]/g, " ").trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return (clean.substring(0, 2) || "ST").toUpperCase();
};

export const getRandomAvatarClass = (index = 0) => {
  const classes = ["avatar-blue", "avatar-purple", "avatar-orange", "avatar-teal", "avatar-gray"];
  return classes[index % classes.length];
};

export const isSuperAdminEmail = (email) => {
  if (!email) return false;
  const normalized = email.trim().toLowerCase();
  return SUPER_ADMIN_EMAILS.some((adm) => adm.toLowerCase() === normalized);
};

export const getStaffList = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_STAFF));
      return DEFAULT_STAFF;
    }
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_STAFF;
  } catch (error) {
    console.error("Failed to read staff list from localStorage:", error);
    return DEFAULT_STAFF;
  }
};

export const saveStaffList = (list) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (error) {
    console.error("Failed to save staff list to localStorage:", error);
  }
};

export const addRegisteredStaff = ({ fullName, emailAddress, phoneNumber }) => {
  const currentList = getStaffList();
  const existing = currentList.find(
    (s) => s.emailAddress?.toLowerCase() === emailAddress?.trim().toLowerCase()
  );

  if (existing) {
    return existing;
  }

  const nextNumber = currentList.length + 1;
  const newStaff = {
    id: `STF-${String(nextNumber).padStart(3, "0")}`,
    fullName: fullName.trim(),
    emailAddress: emailAddress.trim(),
    phoneNumber: phoneNumber ? phoneNumber.trim() : "N/A",
    role: "Pending Assignment",
    department: "Unassigned",
    dateEmployed: "Pending",
    status: "Pending",
    avatarType: "initials",
    avatarClass: getRandomAvatarClass(currentList.length),
    initials: getInitials(fullName),
  };

  const updatedList = [...currentList, newStaff];
  saveStaffList(updatedList);
  return newStaff;
};

export const updateStaffMember = (staffId, updatedFields) => {
  const currentList = getStaffList();
  let updatedRecord = null;

  const updatedList = currentList.map((member) => {
    if (member.id === staffId || member.emailAddress === staffId) {
      const isRoleAssignedNow =
        updatedFields.role &&
        updatedFields.role !== "Pending Assignment" &&
        (member.role === "Pending Assignment" || !member.dateEmployed || member.dateEmployed === "Pending");

      const finalDateEmployed = isRoleAssignedNow
        ? getFormattedCurrentDate()
        : (updatedFields.dateEmployed || member.dateEmployed || getFormattedCurrentDate());

      updatedRecord = {
        ...member,
        ...updatedFields,
        dateEmployed: finalDateEmployed,
      };
      return updatedRecord;
    }
    return member;
  });

  saveStaffList(updatedList);
  return { updatedList, updatedRecord };
};

export const deleteStaffMember = (staffId) => {
  const currentList = getStaffList();
  const updatedList = currentList.filter(
    (member) => member.id !== staffId && member.emailAddress !== staffId
  );
  saveStaffList(updatedList);
  return updatedList;
};
