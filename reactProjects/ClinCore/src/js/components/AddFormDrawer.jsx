import React, { useState, useEffect } from 'react';
import { useModalState } from '../components/ModalContext';
import { ENTITY_SCHEMAS } from '../formSchemas';
import { fetchDoctorMetadata } from '../../api/doctor';

export default function AddFormDrawer() {
  const {
    isDrawerOpen,
    isDrawerEditMode,
    drawerSchemaType,
    drawerFormData,
    isDrawerSubmitting,
    closeAddDrawer,
    submitDrawerForm
  } = useModalState();

  const schema = ENTITY_SCHEMAS[drawerSchemaType] || ENTITY_SCHEMAS.staff;
  const [formData, setFormData] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [backendOptions, setBackendOptions] = useState({});

  // Use edit-specific sections when in edit mode, fallback to regular sections
  const activeSections = isDrawerEditMode && schema.editSections
    ? schema.editSections
    : schema.sections;

  // Dynamic title/subtitle based on mode
  const drawerTitle = isDrawerEditMode
    ? (schema.editTitle || `Edit ${schema.entityName || 'Record'}`)
    : schema.title;
  const drawerSubtitle = isDrawerEditMode
    ? (schema.editSubtitle || schema.subtitle)
    : schema.subtitle;
  const drawerIcon = isDrawerEditMode ? 'bi-pencil-square' : schema.icon;

  // Empty defaults for add mode
  const buildInitialData = (currentBackend = backendOptions) => {
    const initialData = {};
    activeSections.forEach(sec => {
      sec.fields.forEach(field => {
        if (field.type === 'select') {
          const opts = (currentBackend && currentBackend[field.name] && currentBackend[field.name].length > 0)
            ? currentBackend[field.name]
            : (field.options || []);
          const first = opts[0];
          initialData[field.name] = (typeof first === 'object' && first !== null)
            ? (first.name || first.value || first.roleName || first.statusName || first.departmentName || '')
            : (first || '');
        } else {
          initialData[field.name] = '';
        }
      });
    });
    return initialData;
  };

  // Reset/load form inputs when schema changes or drawer opens
  useEffect(() => {
    if (isDrawerOpen) {
      if (drawerSchemaType === 'doctor') {
        fetchDoctorMetadata().then((meta) => {
          const overrides = {};
          if (meta.departments?.length) overrides.department = meta.departments;
          if (meta.roles?.length) overrides.specialist = meta.roles;
          if (meta.statuses?.length) overrides.status = meta.statuses;
          if (Object.keys(overrides).length > 0) {
            setBackendOptions(overrides);
            setFormData(prev => {
              const updated = { ...prev };
              Object.keys(overrides).forEach(k => {
                const list = overrides[k];
                if (list && list.length > 0) {
                  const first = list[0];
                  const firstVal = typeof first === 'object' && first !== null
                    ? (first.name || first.value || first.roleName || first.statusName || first.departmentName || '')
                    : first;
                  if (!updated[k]) {
                    updated[k] = firstVal;
                  }
                }
              });
              return updated;
            });
          }
        });
      } else {
        setBackendOptions({});
      }

      if (isDrawerEditMode && drawerFormData && Object.keys(drawerFormData).length > 0) {
        // Pre-fill with existing data for edit mode
        const initial = { ...drawerFormData };
        const rawDoctorName = initial.doctor_name || initial.name || initial.fullName || "";
        if (!initial.firstName && rawDoctorName) {
          const parts = rawDoctorName.replace(/^(dr\.|dr\b|prof\.|prof\b|mr\.|mr\b|mrs\.|mrs\b|ms\.|ms\b)\s*/i, "").trim().split(/\s+/);
          initial.firstName = parts[0] || "";
          initial.lastName = parts.slice(1).join(" ") || "";
        }
        if (!initial.email && (initial.emailAddress || initial.email_address)) {
          initial.email = initial.emailAddress || initial.email_address;
        }
        if (!initial.phone && (initial.phoneNumber || initial.phone_number)) {
          initial.phone = initial.phoneNumber || initial.phone_number;
        }
        setFormData(initial);
      } else {
        setFormData(buildInitialData());
      }
      setImagePreview(null);
    }
  }, [isDrawerOpen, drawerSchemaType, isDrawerEditMode]);

  const handleClearAll = () => {
    setFormData(buildInitialData());
    setImagePreview(null);
  };

  if (!isDrawerOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, [fieldName]: file }));
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const concatenatedName = [formData.firstName, formData.lastName].filter(Boolean).join(" ").trim();
    const payload = {
      ...formData,
      name: concatenatedName || formData.name || formData.fullName || "",
      fullName: concatenatedName || formData.name || formData.fullName || "",
    };
    submitDrawerForm(payload);
  };

  const renderSelectField = (field) => {
    const selectOpts = (backendOptions && backendOptions[field.name] && backendOptions[field.name].length > 0)
      ? backendOptions[field.name]
      : (field.options || []);
    const firstOpt = selectOpts[0];
    const defaultFallback = typeof firstOpt === 'object' && firstOpt !== null
      ? (firstOpt.name || firstOpt.value || firstOpt.roleName || firstOpt.statusName || firstOpt.departmentName || '')
      : (firstOpt || '');
    const currentValue = formData[field.name] !== undefined && formData[field.name] !== ''
      ? formData[field.name]
      : defaultFallback;

    return (
      <div className="select-wrapper">
        <select
          id={`drawer_${field.name}`}
          name={field.name}
          value={currentValue}
          onChange={handleChange}
          required={field.required}
          className="clincore-input-select"
        >
          {selectOpts.map((opt, i) => {
            const optVal = typeof opt === 'object' && opt !== null
              ? (opt.name || opt.roleName || opt.statusName || opt.departmentName || opt.id || opt.value || '')
              : opt;
            const optLabel = typeof opt === 'object' && opt !== null
              ? (opt.name || opt.label || opt.roleName || opt.statusName || opt.departmentName || optVal)
              : opt;
            return (
              <option key={i} value={optVal}>{optLabel}</option>
            );
          })}
        </select>
        <i className="bi bi-chevron-down select-arrow-icon"></i>
      </div>
    );
  };

  return (
    <>
      <div
        className="clincore-backdrop active"
        aria-hidden="true"
      />

      <div className={`clincore-drawer-container ${isDrawerOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        {/* Top Header */}
        <div className="add-drawer-header">
          <div className="add-drawer-title-group">
            <i className={`bi ${drawerIcon} add-drawer-header-icon`}></i>
            <h2 className="add-drawer-title-text">{drawerTitle}</h2>
          </div>

          <button
            type="button"
            className="add-drawer-close-pill"
            title="Close"
            onClick={closeAddDrawer}
          >
            <i className="bi bi-x-lg"></i>
            <span>Close</span>
          </button>
        </div>

        {/* Subtitle Description */}
        <div className="add-drawer-subtitle-bar">
          <p>{drawerSubtitle}</p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="add-drawer-form">
          <div className="add-drawer-scroll-body">
            {activeSections.map((section) => (
              <div key={section.id} className="drawer-section-card">
                <div className="drawer-section-header">
                  <i className={`bi ${section.icon} section-icon`}></i>
                  <h3 className="section-title">{section.title}</h3>
                </div>

                <div className="drawer-fields-grid">
                  {section.fields.map((field) => (
                    <div
                      key={field.name}
                      className={`form-field-group ${field.colSpan === 2 ? 'col-span-2' : 'col-span-1'}`}
                    >
                      <label htmlFor={`drawer_${field.name}`} className="form-field-label">
                        {field.label} {field.required && <span className="field-required-star">*</span>}
                      </label>

                      {field.type === 'select' ? (
                        renderSelectField(field)
                      ) : field.type === 'textarea' ? (
                        <textarea
                          id={`drawer_${field.name}`}
                          name={field.name}
                          value={formData[field.name] || ''}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          rows={3}
                          className="clincore-input-textarea"
                        />
                      ) : field.type === 'file' ? (
                        <div className="clincore-upload-zone">
                          <input
                            id={`drawer_${field.name}`}
                            type="file"
                            name={field.name}
                            accept={field.accept || 'image/*'}
                            onChange={(e) => handleFileChange(e, field.name)}
                            className="clincore-upload-input"
                          />
                          <label htmlFor={`drawer_${field.name}`} className="clincore-upload-label">
                            {imagePreview ? (
                              <img src={imagePreview} alt="Preview" className="clincore-upload-preview" />
                            ) : (
                              <div className="clincore-upload-placeholder">
                                <i className="bi bi-cloud-arrow-up"></i>
                                <span>{field.placeholder || 'Click to upload image'}</span>
                                <span className="clincore-upload-hint">PNG, JPG up to 5MB</span>
                              </div>
                            )}
                          </label>
                        </div>
                      ) : (
                        <input
                          id={`drawer_${field.name}`}
                          type={field.type}
                          name={field.name}
                          value={formData[field.name] || ''}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          autoComplete={field.autoComplete}
                          className="clincore-input-text"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Footer */}
          <div className="add-drawer-footer">
            <button
              type="button"
              className="btn-drawer-cancel"
              onClick={handleClearAll}
            >
              <i className="bi bi-trash3"></i>
              <span>Clear All</span>
            </button>
            <button
              type="submit"
              className="btn-drawer-submit"
              disabled={isDrawerSubmitting}
            >
              {isDrawerSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" style={{ width: '1rem', height: '1rem', borderWidth: '2px', display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}></span>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <i className="bi bi-check-circle"></i>
                  <span>{isDrawerEditMode ? 'Update & Save' : 'Save & Submit'}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

