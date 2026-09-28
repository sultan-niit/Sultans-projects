import React, { createContext, useContext, useState, useEffect } from 'react';
import { ENTITY_SCHEMAS } from '../formSchemas';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  // Drawer state (Image 1 - Slide from right for Add & Edit)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerEditMode, setIsDrawerEditMode] = useState(false);
  const [drawerSchemaType, setDrawerSchemaType] = useState('staff');
  const [drawerFormData, setDrawerFormData] = useState({});

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
  const openAddDrawer = (schemaType = 'staff') => {
    setDrawerSchemaType(schemaType);
    setDrawerFormData({});
    setIsDrawerEditMode(false);
    setIsDrawerOpen(true);
  };

  // Open Edit Drawer (Slide-Over Edit Form)
  const openEditDrawer = (data = {}, schemaType = 'staff') => {
    setDrawerSchemaType(schemaType);
    setDrawerFormData(data);
    setIsDrawerEditMode(true);
    setIsDrawerOpen(true);
  };

  const closeAddDrawer = () => {
    setIsDrawerOpen(false);
    setIsDrawerEditMode(false);
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

  const submitDrawerForm = (formData) => {
    console.log('Submitted Drawer Form:', formData);
    const entityName = ENTITY_SCHEMAS[drawerSchemaType]?.entityName || 'Record';
    const actionText = isDrawerEditMode ? 'updated' : 'created';
    showToast(`${entityName} successfully ${actionText}!`);
    closeAddDrawer();
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
        openAddDrawer,
        openEditDrawer,
        closeAddDrawer,
        submitDrawerForm,

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
