import React, { useState, useEffect } from 'react';
import { useModalState } from '../components/ModalContext';
import { ENTITY_SCHEMAS } from '../formSchemas';

export default function ProfileEditModal() {
  const {
    isProfileModalOpen,
    profileData,
    profileSchemaType,
    isEditMode,
    closeProfileModal,
    toggleEditMode,
    submitProfileForm
  } = useModalState();

  const schema = ENTITY_SCHEMAS[profileSchemaType] || ENTITY_SCHEMAS.staff;
  const [formData, setFormData] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (profileData) {
      setFormData(profileData);
    }
  }, [profileData, isProfileModalOpen]);

  if (!isProfileModalOpen || !profileData) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e?.preventDefault();
    submitProfileForm(formData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, profileImage: file }));
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const departmentOptions = [
    'General Medicine',
    'Cardiology',
    'Pediatrics',
    'Dermatology',
    'Internal Medicine',
    'Orthopedics',
    'Neurology',
    'Dental Care',
    'Ophthalmology',
    'Web Development',
    'Administration'
  ];

  const roleOptions = [
    'General Medicine - Routine Check-Ups',
    'Cardiology - Heart Specialist',
    'Pediatrics - Child Health',
    'Dermatology - Skin Specialist',
    'Internal Medicine - Internal Health',
    'Orthopedics - Bone Specialist',
    'Neurology - Brain Specialist',
    'Senior Medical Specialist',
    'Tutor - Web Development',
    'Head Nurse',
    'Administrative Officer'
  ];

  const statusOptions = [
    'Available',
    'Unavailable',
    'Active',
    'Inactive',
    'On Leave',
    'On Duty'
  ];

  return (
    <>
      {/* Blurry Backdrop Overlay - Click disabled so background scroll & click are blocked */}
      <div
        className="clincore-backdrop active"
        aria-hidden="true"
      />

      {/* Centered Profile Edit Modal Container */}
      <div className="clincore-profile-modal" role="dialog" aria-modal="true">
        {/* Top Header Bar (No X button at top) */}
        <div className="profile-modal-header">
          <div className="profile-header-title-group">
            <i className={`bi ${schema.profileIcon || 'bi-person-circle'} modal-header-icon`}></i>
            <h2 className="modal-header-title">{schema.profileTitle || 'Doctor Profile'}</h2>
          </div>
        </div>

        {/* Profile Identity Bar */}
        <div className="profile-identity-bar-clean">
          <div className="profile-avatar-wrapper">
            {/* Rounded Box Avatar */}
            <div className="profile-avatar-rounded-box">
              {profileData.avatar || schema.defaultAvatar || 'PW'}
            </div>
          </div>

          <div className="profile-identity-info">
            <h3 className="profile-user-name">
              {formData.fullName || formData.name || 'Dr. Medical Specialist'}
            </h3>
            <div className="profile-meta-subtitle">
              <span>Status:</span>
              <span className="profile-status-text" style={{ marginLeft: '4px', fontWeight: '500', color: 'var(--clincore-primary-dark, #005f56)' }}>
                {formData.status || 'Available'}
              </span>
              <span className="meta-divider" style={{ margin: '0 8px' }}>|</span>
              <span>Last Login: {formData.lastLogin || '2026-09-26 10:15 AM'}</span>
            </div>
          </div>
        </div>

        {/* Section Divider Line */}
        <div className="profile-modal-divider"></div>

        {/* Profile Information Form / Details */}
        <div className="profile-modal-content">
          <div className="profile-section-heading">
            BASIC INFORMATION
          </div>

          <form onSubmit={handleSave} className="profile-fields-grid">
            {/* Full Name */}
            <div className="profile-field-group col-span-2">
              <label className="profile-field-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName || formData.name || ''}
                onChange={handleChange}
                className="clincore-input-text"
                placeholder="Full name"
                required
              />
            </div>

            {/* Email Address */}
            <div className="profile-field-group col-span-2">
              <label className="profile-field-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
                className="clincore-input-text"
                placeholder="Email address"
                required
              />
            </div>

            {/* Position / Role (Selectable Dropdown) */}
            <div className="profile-field-group col-span-1">
              <label className="profile-field-label">Position / Role</label>
              <div className="select-wrapper">
                <select
                  name="position"
                  value={formData.position || roleOptions[0]}
                  onChange={handleChange}
                  className="clincore-input-select"
                >
                  {roleOptions.map((r, i) => (
                    <option key={i} value={r}>{r}</option>
                  ))}
                </select>
                <i className="bi bi-chevron-down select-arrow-icon"></i>
              </div>
            </div>

            {/* Phone Number */}
            <div className="profile-field-group col-span-1">
              <label className="profile-field-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone || ''}
                onChange={handleChange}
                className="clincore-input-text"
                placeholder="Phone number"
              />
            </div>

            {/* Department (Selectable Dropdown) */}
            <div className="profile-field-group col-span-1">
              <label className="profile-field-label">Department</label>
              <div className="select-wrapper">
                <select
                  name="department"
                  value={formData.department || departmentOptions[0]}
                  onChange={handleChange}
                  className="clincore-input-select"
                >
                  {departmentOptions.map((d, i) => (
                    <option key={i} value={d}>{d}</option>
                  ))}
                </select>
                <i className="bi bi-chevron-down select-arrow-icon"></i>
              </div>
            </div>

            {/* Status (Selectable Dropdown) */}
            <div className="profile-field-group col-span-1">
              <label className="profile-field-label">Status</label>
              <div className="select-wrapper">
                <select
                  name="status"
                  value={formData.status || 'Available'}
                  onChange={handleChange}
                  className="clincore-input-select"
                >
                  {statusOptions.map((st, i) => (
                    <option key={i} value={st}>{st}</option>
                  ))}
                </select>
                <i className="bi bi-chevron-down select-arrow-icon"></i>
              </div>
            </div>

            {/* Profile Picture Upload */}
            <div className="profile-field-group col-span-2">
              <label className="profile-field-label">Profile Picture</label>
              <div className="clincore-upload-zone">
                <input
                  id="profile_image_upload"
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="clincore-upload-input"
                />
                <label htmlFor="profile_image_upload" className="clincore-upload-label">
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="clincore-upload-preview" />
                  ) : (
                    <div className="clincore-upload-placeholder">
                      <i className="bi bi-cloud-arrow-up"></i>
                      <span>Click to upload profile picture</span>
                      <span className="clincore-upload-hint">PNG, JPG up to 5MB</span>
                    </div>
                  )}
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Modal Footer Controls */}
        <div className="profile-modal-footer">
          <button
            type="button"
            className="btn-profile-close-red"
            onClick={closeProfileModal}
          >
            <i className="bi bi-x-lg"></i>
            <span>Close</span>
          </button>
          <button
            type="button"
            className="btn-profile-save-footer"
            onClick={handleSave}
          >
            <i className="bi bi-check-circle"></i>
            <span>Save Changes</span>
          </button>
        </div>
      </div>
    </>
  );
}


