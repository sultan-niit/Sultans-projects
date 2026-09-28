import React, { useState, useRef, useEffect } from 'react';

/**
 * FilterDropdown — A reusable dropdown filter component.
 * Replaces static FilterPill buttons with an actual selectable dropdown.
 * 
 * Props:
 * - icon: Bootstrap icon class (e.g. 'bi-funnel')
 * - label: Default label text (e.g. 'All Status')
 * - options: Array of option strings
 * - className: Optional extra className
 * - onSelect: Callback when option is selected
 */
export default function FilterDropdown({ icon, label, options = [], className, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(label || options[0] || '');
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className={`filter-dropdown-wrapper ${className || ''}`} ref={dropdownRef}>
      <button 
        type="button" 
        className={`filter-dropdown-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <i className={`bi ${icon || 'bi-funnel'}`}></i>
        <span>{selected}</span>
        <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'} filter-chevron`}></i>
      </button>

      {isOpen && (
        <div className="filter-dropdown-menu">
          {options.map((option, i) => (
            <button
              key={i}
              type="button"
              className={`filter-dropdown-item ${option === selected ? 'selected' : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option === selected && <i className="bi bi-check2"></i>}
              <span>{option}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
