import { useEffect, useState } from "react";

const EMPTY_SUGGESTION = { title: "", category: "General Feedback", details: "" };

export const STATUS_CLASS_MAP = {
  Approved: "status-confirmed",
  Pending: "status-pending",
};

export const STATUS_ICON_MAP = {
  Approved: "bi-check-circle-fill",
  Pending: "bi-hourglass-split",
};

export const CATEGORY_ICON_MAP = {
  "Appointment Scheduling": "bi-calendar-event",
  "Pharmacy / Medication": "bi-capsule-pill",
  "General Feedback": "bi-chat-left-text",
  Cardiology: "bi-heart-pulse",
  "General Checkup": "bi-clipboard2-pulse",
  Pediatrics: "bi-emoji-smile",
  Dermatology: "bi-bandaid",
  Diagnostics: "bi-eyedropper",
};

const INITIAL_SUGGESTIONS = [
  {
    id: 1,
    title: "Request for weekend cardiology appointment slot",
    category: "Appointment Scheduling",
    status: "Pending",
    date: "28 Sep 2026",
    response: "Under review by Dr. Sulaiman Ahmed.",
  },
  {
    id: 2,
    title: "Query regarding prescription refill timeline",
    category: "Pharmacy / Medication",
    status: "Pending",
    date: "25 Sep 2026",
    response: "Awaiting pharmacy confirmation on stock availability.",
  },
  {
    id: 3,
    title: "Feedback regarding nursing care in Ward B",
    category: "General Feedback",
    status: "Pending",
    date: "18 Sep 2026",
    response: "Shared with the unit supervisor for review.",
  },
  {
    id: 4,
    title: "Follow-up consultation for blood pressure monitoring",
    category: "Cardiology",
    status: "Approved",
    date: "26 Sep 2026",
    response: "Approved: Tuesday 09:30 AM with Dr. Sulaiman Ahmed, Room 204.",
  },
  {
    id: 5,
    title: "Annual full body health check-up",
    category: "General Checkup",
    status: "Approved",
    date: "24 Sep 2026",
    response: "Approved: Friday 11:00 AM, Diagnostics Wing, Room 110.",
  },
  {
    id: 6,
    title: "Child immunization schedule for routine vaccines",
    category: "Pediatrics",
    status: "Approved",
    date: "22 Sep 2026",
    response: "Approved: Wednesday 08:45 AM with Dr. Nadia Rahman.",
  },
  {
    id: 7,
    title: "Persistent skin rash on forearms - dermatology review",
    category: "Dermatology",
    status: "Approved",
    date: "20 Sep 2026",
    response: "Approved: Monday 14:15 AM, Dermatology Suite, Room 312.",
  },
  {
    id: 8,
    title: "Pre-operative bloodwork and ECG clearance",
    category: "Diagnostics",
    status: "Approved",
    date: "17 Sep 2026",
    response: "Approved: Report released, results available in your portal.",
  },
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: "Dr. Sulaiman Ahmed",
    role: "Lead Cardiologist",
    time: "Yesterday, 4:15 PM",
    text: "Hello Amina, please make sure to record your resting blood pressure twice daily before our next follow-up.",
    isDoctor: true,
  },
  {
    id: 2,
    sender: "Amina Yusuf",
    role: "Patient",
    time: "Yesterday, 4:45 PM",
    text: "Understood, Dr. Sulaiman. I have already started logging the readings in the portal.",
    isDoctor: false,
  },
  {
    id: 3,
    sender: "Dr. Sulaiman Ahmed",
    role: "Lead Cardiologist",
    time: "Today, 9:20 AM",
    text: "Excellent. Keep taking the prescribed medication on schedule.",
    isDoctor: true,
  },
];

export default function usePatientPortal() {
  const [currentView, setCurrentView] = useState("dashboard");
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showSuggestionModal, setShowSuggestionModal] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [userProfile, setUserProfile] = useState({
    name: "Amina Yusuf",
    username: "amina_yusuf",
    email: "amina.yusuf@clincore.org",
    department: "Cardiology",
    lastLoginDate: "28 Sep 2026, 10:30 AM",
    doctor: "Dr. Sulaiman Ahmed",
  });
  const [profileForm, setProfileForm] = useState({
    username: "amina_yusuf",
    email: "amina.yusuf@clincore.org",
    department: "Cardiology",
  });
  const [settingsForm, setSettingsForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    enableEmailNotifs: true,
    enableSmsAlerts: true,
  });
  const [settingsStatus, setSettingsStatus] = useState("");
  const [suggestions, setSuggestions] = useState(INITIAL_SUGGESTIONS);
  const [newSuggestion, setNewSuggestion] = useState(EMPTY_SUGGESTION);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [typedMessage, setTypedMessage] = useState("");

  useEffect(() => {
    const shouldLockScroll = showProfileModal || showSuggestionModal;
    document.body.style.overflow = shouldLockScroll ? "hidden" : "";
    document.documentElement.style.overflow = shouldLockScroll ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [showProfileModal, showSuggestionModal]);

  const openProfile = () => setShowProfileModal(true);

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (!typedMessage.trim()) return;

    const message = {
      id: messages.length + 1,
      sender: userProfile.name,
      role: "Patient",
      time: "Just now",
      text: typedMessage,
      isDoctor: false,
    };
    setMessages((current) => [...current, message]);
    setTypedMessage("");
  };

  const handleSaveProfile = (event) => {
    event.preventDefault();
    setUserProfile((current) => ({
      ...current,
      username: profileForm.username,
      email: profileForm.email,
      department: profileForm.department,
    }));
    setShowProfileModal(false);
  };

  const handleAddSuggestion = (event) => {
    event.preventDefault();
    if (!newSuggestion.title.trim()) return;

    const entry = {
      id: suggestions.length + 1,
      title: newSuggestion.title,
      category: newSuggestion.category,
      status: "Pending",
      date: "Just now",
      response: "Submitted to medical staff for review.",
    };
    setSuggestions((current) => [entry, ...current]);
    setNewSuggestion(EMPTY_SUGGESTION);
    setShowSuggestionModal(false);
  };

  const handleReschedule = (item) => {
    setNewSuggestion({ title: item.title, category: item.category, details: "" });
    setShowSuggestionModal(true);
  };

  const handleCancelSuggestion = (id) => {
    setSuggestions((current) => current.filter((suggestion) => suggestion.id !== id));
    setSelectedIds((current) => current.filter((selectedId) => selectedId !== id));
  };

  const handleCancelSelected = () => {
    setSuggestions((current) => current.filter((suggestion) => !selectedIds.includes(suggestion.id)));
    setSelectedIds([]);
  };

  const toggleRowSelection = (id) => {
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((selectedId) => selectedId !== id) : [...current, id]
    );
  };

  const toggleSelectAll = () => {
    setSelectedIds((current) =>
      current.length === suggestions.length ? [] : suggestions.map((suggestion) => suggestion.id)
    );
  };

  const handleOpenNewAppointment = () => {
    setNewSuggestion(EMPTY_SUGGESTION);
    setShowSuggestionModal(true);
  };

  const handleDismissAppointment = () => {
    setNewSuggestion(EMPTY_SUGGESTION);
    setShowSuggestionModal(false);
  };

  const handleAppointmentFieldChange = (field, value) => {
    setNewSuggestion((current) => ({ ...current, [field]: value }));
  };

  const handleUpdateSettings = (event) => {
    event.preventDefault();
    if (settingsForm.newPassword && settingsForm.newPassword !== settingsForm.confirmPassword) {
      setSettingsStatus("Passwords do not match!");
      return;
    }
    setSettingsStatus("Credentials and preferences updated successfully!");
    setSettingsForm((current) => ({
      ...current,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));
    setTimeout(() => setSettingsStatus(""), 4000);
  };

  const handleSettingsFieldChange = (field, value) => {
    setSettingsForm((current) => ({ ...current, [field]: value }));
  };

  const handleProfileFieldChange = (field, value) => {
    setProfileForm((current) => ({ ...current, [field]: value }));
  };

  return {
    currentView,
    setCurrentView,
    showProfileModal,
    setShowProfileModal,
    showSuggestionModal,
    selectedIds,
    userProfile,
    profileForm,
    settingsForm,
    settingsStatus,
    suggestions,
    newSuggestion,
    messages,
    typedMessage,
    setTypedMessage,
    allSelected: suggestions.length > 0 && selectedIds.length === suggestions.length,
    openProfile,
    handleSendMessage,
    handleSaveProfile,
    handleAddSuggestion,
    handleReschedule,
    handleCancelSuggestion,
    handleCancelSelected,
    toggleRowSelection,
    toggleSelectAll,
    handleOpenNewAppointment,
    handleDismissAppointment,
    handleAppointmentFieldChange,
    handleUpdateSettings,
    handleSettingsFieldChange,
    handleProfileFieldChange,
  };
}
