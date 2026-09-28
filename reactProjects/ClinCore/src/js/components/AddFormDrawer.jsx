import React, { useState, useEffect } from 'react';
import { useModalState } from '../components/ModalContext';
import { ENTITY_SCHEMAS } from '../formSchemas';

export default function AddFormDrawer() {
  const { 
    isDrawerOpen, 
    isDrawerEditMode,
    drawerSchemaType, 
    drawerFormData,
    closeAddDrawer, 
    submitDrawerForm 
  } = useModalState();
  
  const schema = ENTITY_SCHEMAS[drawerSchemaType] || ENTITY_SCHEMAS.staff;
  const [formData, setFormData] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

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

  // Reset/load form inputs when schema changes or drawer opens
  useEffect(() => {
    if (isDrawerOpen) {
      if (isDrawerEditMode && drawerFormData && Object.keys(drawerFormData).length > 0) {
        // Pre-fill with existing data for edit mode
        setFormData({ ...drawerFormData });
      } else {
        // Empty defaults for add mode
        const initialData = {};
        activeSections.forEach(sec => {
          sec.fields.forEach(field => {
            initialData[field.name] = field.type === 'select' ? field.options[0] : '';
          });
        });
        setFormData(initialData);
      }
    }
  }, [isDrawerOpen, drawerSchemaType, isDrawerEditMode]);

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
    submitDrawerForm(formData);
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
                        <div className="select-wrapper">
                          <select
                            id={`drawer_${field.name}`}
                            name={field.name}
                            value={formData[field.name] || field.options[0]}
                            onChange={handleChange}
                            required={field.required}
                            className="clincore-input-select"
                          >
                            {field.options.map((opt, i) => (
                              <option key={i} value={opt}>{opt}</option>
                            ))}
                          </select>
                          <i className="bi bi-chevron-down select-arrow-icon"></i>
                        </div>
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
              onClick={closeAddDrawer}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn-drawer-submit"
            >
              <i className="bi bi-check-circle"></i>
              <span>{isDrawerEditMode ? 'Update & Save' : 'Save & Submit'}</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}


