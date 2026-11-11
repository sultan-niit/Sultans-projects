import React, { createContext, useContext, useState, useEffect } from 'react';
import { ENTITY_SCHEMAS } from '../formSchemas';
import { createDoctorProfile, updateStoredDoctor, formatDoctorName } from '../../api/doctor';
import { createPatientProfile, updateStoredPatient, normalizePatientRecord } from '../../api/patient';
import { createRoomProfile, deleteRoomProfile, updateStoredRoom, normalizeRoomRecord } from '../../api/room';
import { deleteSessionRecord, readSessionCollection, saveSessionRecord } from '../sessionData';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  // Drawer state (Image 1 - Slide from right for Add & Edit)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerEditMode, setIsDrawerEditMode] = useState(false);
  const [drawerSchemaType, setDrawerSchemaType] = useState('staff');
  const [drawerFormData, setDrawerFormData] = useState({});
  const [drawerOptions, setDrawerOptions] = useState({});
  const [isDrawerSubmitting, setIsDrawerSubmitting] = useState(false);

  // Profile Modal state (Image 2 - Centered Modal)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [profileSchemaType, setProfileSchemaType] = useState('staff');
  const [isEditMode, setIsEditMode] = useState(false);

  // Toast state
  const [toastMessage, setToastMessage] = useState(null);

  // Prevent background page scrolling when modal or drawer is open
  useEffect(() => {
    if (isDrawerOpen || isProfileModalOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isDrawerOpen, isProfileModalOpen]);

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Open Add Drawer (Image 1)
  const openAddDrawer = (schemaType = 'staff', options = {}) => {
    setDrawerSchemaType(schemaType);
    setDrawerFormData({});
    setIsDrawerEditMode(false);
    setDrawerOptions(typeof options === 'function' ? { onSuccess: options } : (options || {}));
    setIsDrawerOpen(true);
  };

  // Open Edit Drawer (Slide-Over Edit Form)
  const openEditDrawer = (data = {}, schemaType = 'staff') => {
    setDrawerSchemaType(schemaType);
    setDrawerFormData(data);
    setIsDrawerEditMode(true);
    setDrawerOptions({});
    setIsDrawerOpen(true);
  };

  const closeAddDrawer = () => {
    setIsDrawerOpen(false);
    setIsDrawerEditMode(false);
    setDrawerOptions({});
  };

  // Open Profile Modal (Image 2)
  const openProfileModal = (data = null, schemaType = 'staff') => {
    const defaultSchema = ENTITY_SCHEMAS[schemaType] || ENTITY_SCHEMAS.staff;
    const fallbackData = data || {
      fullName: 'COURTNEY HENRY',
      email: 'courtneyhenry@niit.edu',
      position: 'Tutor - Web Development',
      phone: '080 3123 4567',
      status: 'Active',
      lastLogin: '2026-08-30 09:12 AM',
      avatar: defaultSchema.defaultAvatar || 'CH',
      bannerImg: defaultSchema.bannerImg,
      department: 'Web Development'
    };

    setProfileSchemaType(schemaType);
    setProfileData(fallbackData);
    setIsEditMode(false);
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
    setIsEditMode(false);
  };

  const toggleEditMode = () => {
    setIsEditMode(prev => !prev);
  };

  const submitDrawerForm = async (formData) => {
    try {
      setIsDrawerSubmitting(true);
      let createdRecord = formData;

      // Handle Doctor Creation API & Doctor Edit
      if (drawerSchemaType === 'doctor') {
        if (!isDrawerEditMode) {
          const result = await createDoctorProfile(formData);
          createdRecord = result.data || formData;
          showToast(result.message || 'Doctor profile created successfully!');
        } else {
          // Build the merged updated record (keep all existing fields, merge with form edits)
          const updatedRecord = {
            ...formData,
            name: formatDoctorName([formData.firstName, formData.lastName].filter(Boolean).join(" ").trim() || formData.name || formData.fullName || formData.doctor_name || ''),
            fullName: formatDoctorName([formData.firstName, formData.lastName].filter(Boolean).join(" ").trim() || formData.name || formData.fullName || formData.doctor_name || ''),
            doctor_name: formatDoctorName([formData.firstName, formData.lastName].filter(Boolean).join(" ").trim() || formData.name || formData.fullName || formData.doctor_name || ''),
            // Normalize status
            status: formData.status || 'Available',
            statusId: (formData.status === 'Unavailable' || formData.status === 'Inactive') ? 'U' : 'A',
          };
          // Save to localStorage
          updateStoredDoctor(updatedRecord);
          createdRecord = updatedRecord;
          showToast('Doctor profile updated successfully!');
        }
        window.dispatchEvent(new CustomEvent('clincore:doctor-changed', { detail: { record: createdRecord, isEdit: isDrawerEditMode } }));
      } else if (drawerSchemaType === 'patient') {
        // Handle Patient Creation API & Patient Edit
        if (!isDrawerEditMode) {
          const result = await createPatientProfile(formData);
          createdRecord = result.data || formData;
          showToast(result.message || 'Patient profile created successfully!');
        } else {
          const updatedRecord = normalizePatientRecord(formData);
          updateStoredPatient(updatedRecord);
          createdRecord = updatedRecord;
          showToast('Patient profile updated successfully!');
        }
        window.dispatchEvent(new CustomEvent('clincore:patient-changed', { detail: { record: createdRecord, isEdit: isDrawerEditMode } }));
      } else if (drawerSchemaType === 'room') {
        if (!isDrawerEditMode) {
          const result = await createRoomProfile(formData);
          createdRecord = result.data || formData;
          showToast(result.message || 'Room created successfully!');
        } else {
          const updatedRecord = normalizeRoomRecord(formData);
          updateStoredRoom(updatedRecord);
          createdRecord = updatedRecord;
          showToast('Room updated successfully!');
        }
        window.dispatchEvent(new CustomEvent('clincore:room-changed', { detail: { record: createdRecord, isEdit: isDrawerEditMode } }));
      } else if (['appointment', 'department', 'payment', 'inventory'].includes(drawerSchemaType)) {
        const record = { ...drawerFormData, ...formData };
        let sessionRecord = record;

        if (drawerSchemaType === 'inventory') {
          sessionRecord = {
            ...record,
            name: formData.itemName,
            qty: Number(formData.quantity),
            reorderQty: Number(formData.reorderQty || 0),
            price: formData.unitPrice,
            image: drawerFormData.image || formData.image,
          };
        } else if (drawerSchemaType === 'department') {
          sessionRecord = {
            ...record,
            title: formData.title,
            staffCount: Number(formData.staffCount || 0),
            profileImage: formData.profileImage || drawerFormData.profileImage,
          };
        } else if (drawerSchemaType === 'payment' && !isDrawerEditMode) {
          const nextInvoiceNumber = readSessionCollection('payments').length + 1;
          sessionRecord.invoiceId = `INV-WNH-${String(nextInvoiceNumber).padStart(3, '0')}`;
        }

        const collection = {
          appointment: 'appointments',
          department: 'departments',
          payment: 'payments',
          inventory: 'inventory',
        }[drawerSchemaType];
        createdRecord = saveSessionRecord(collection, sessionRecord, isDrawerEditMode);
        const entityName = ENTITY_SCHEMAS[drawerSchemaType]?.entityName || 'Record';
        const actionText = isDrawerEditMode ? 'updated' : 'created';
        showToast(`${entityName} successfully ${actionText}!`);
      } else {
        const entityName = ENTITY_SCHEMAS[drawerSchemaType]?.entityName || 'Record';
        const actionText = isDrawerEditMode ? 'updated' : 'created';
        showToast(`${entityName} successfully ${actionText}!`);
      }

      if (drawerOptions?.onSuccess) {
        drawerOptions.onSuccess(createdRecord);
      }

      closeAddDrawer();
    } catch (err) {
      console.error('Error submitting drawer form:', err);
      showToast(err.message || 'Error saving record', 'error');
    } finally {
      setIsDrawerSubmitting(false);
    }
  };

  const deleteDrawerRoom = async () => {
    const roomId = drawerFormData.roomId || drawerFormData.room_id || drawerFormData.id;
    if (!roomId) {
      showToast('A room ID is required to delete this room.', 'error');
      return;
    }
    if (!window.confirm('Are you sure you want to delete this room?')) return;

    try {
      setIsDrawerSubmitting(true);
      await deleteRoomProfile(roomId);
      showToast('Room deleted successfully!');
      closeAddDrawer();
    } catch (err) {
      console.error('Error deleting room:', err);
      showToast(err.message || 'Error deleting room', 'error');
    } finally {
      setIsDrawerSubmitting(false);
    }
  };

  const deleteDrawerDepartment = () => {
    if (!drawerFormData.id) {
      showToast('A department ID is required to delete this department.', 'error');
      return;
    }
    if (!window.confirm('Are you sure you want to delete this department?')) return;

    try {
      deleteSessionRecord('departments', drawerFormData.id);
      showToast('Department deleted successfully!');
      closeAddDrawer();
    } catch (err) {
      console.error('Error deleting department:', err);
      showToast(err.message || 'Error deleting department', 'error');
    }
  };


  const submitProfileForm = (updatedData) => {
    console.log('Saved Profile Edits:', updatedData);
    setProfileData(prev => ({ ...prev, ...updatedData }));
    setIsEditMode(false);
    showToast('Profile information successfully updated!');
  };

  return (
    <ModalContext.Provider
      value={{
        isDrawerOpen,
        isDrawerEditMode,
        drawerSchemaType,
        drawerFormData,
        isDrawerSubmitting,
        openAddDrawer,
        openEditDrawer,
        closeAddDrawer,
        submitDrawerForm,
        deleteDrawerRoom,
        deleteDrawerDepartment,

        isProfileModalOpen,
        profileData,
        profileSchemaType,
        isEditMode,
        openProfileModal,
        closeProfileModal,
        toggleEditMode,
        submitProfileForm,

        toastMessage,
        showToast
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModalState() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalState must be used within a ModalProvider');
  }
  return context;
}
