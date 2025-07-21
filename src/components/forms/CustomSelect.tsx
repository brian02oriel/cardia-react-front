import React, { useState, useEffect, useRef } from 'react';
import { Check, ChevronDown, Search, X } from 'lucide-react';
import type { RefCallBack } from 'react-hook-form';
export type IOption = {
    value: string
    label: string
}

type IProps = {
    options: IOption[]
    value: IOption[]
    onChange: (value: IOption[]) => void
    id: string
    placeholder?: string
    searchPlaceholder?: string
    className?: string
    disabled?: boolean
    maxDisplay?: number
}

const MultiSelect = ({ 
  options = [], 
  value = [], 
  onChange = () => {}, 
  id = '',
  placeholder = "Select options...",
  searchPlaceholder = "Search options...",
  className = "",
  disabled = false,
  maxDisplay = 3
}: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  // Filter options based on search term
  const filteredOptions: IOption[] = options.filter((option: IOption) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSelectedOptions = () => {
    return options.filter(option => value.find((v) => v.value === option.value));
  }

  // Check if all filtered options are selected
  const isAllSelected = filteredOptions.length > 0 && 
    filteredOptions.every(option => value.find((v) => v.value === option.value));

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLDivElement).contains(target)
      ) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle individual option selection
  const handleOptionToggle = (optionValue: IOption) => {
    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue];
    onChange(newValue);
  };

  // Handle select all functionality
  const handleSelectAll = () => {
    if (isAllSelected) {
      // Deselect all filtered options
      const newValue = value.filter(v => 
        !filteredOptions.some(option => option.value === v.value)
      );
      onChange(newValue);
    } else {
      // Select all filtered options
      const newValue = [...new Set([...filteredOptions])];
      onChange(newValue);
    }
  };

  // Handle removing a selected item
  const handleRemoveItem = (optionValue: IOption, e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    const newValue = value.filter(v => v !== optionValue);
    console.log('Removing item:', optionValue); // For debugging
    console.log('New value after removal:', newValue); 
    debugger
    onChange(newValue);
  };

  // Get display text for selected items
  const getDisplayText = () => {
    if (value.length === 0) return placeholder;
    
    const selectedOptions = getSelectedOptions()
    
    if (selectedOptions.length <= maxDisplay) {
      return selectedOptions.map(option => option.label).join(', ');
    }
    
    return `${selectedOptions.slice(0, maxDisplay).map(option => option.label).join(', ')} +${selectedOptions.length - maxDisplay} more`;
  };


  return (
    <div className={`relative ${className}`} ref={dropdownRef} id={id}>
      {/* Main Input */}
      <div
        className={`
          min-h-[2.5rem] px-3 py-2 border border-gray-300 rounded-md cursor-pointer
          flex items-center justify-between gap-2 bg-white
          ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'hover:border-gray-400'}
          ${isOpen ? 'border-blue-500 ring-1 ring-blue-500' : ''}
        `}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="flex-1 flex flex-wrap gap-1">
          {value.length === 0 ? (
            <span className="text-gray-500">{placeholder}</span>
          ) : (
            <div className="flex flex-wrap gap-1">
              {getSelectedOptions().slice(0, maxDisplay).map(option => (
                <span
                  key={option.value}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
                >
                  {option.label}
                  {!disabled && (
                    <X
                      size={14}
                      className="cursor-pointer hover:text-blue-600"
                      onClick={(e) => handleRemoveItem(option, e)}
                    />
                  )}
                </span>
              ))}
              {value.length > maxDisplay && (
                <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">
                  +{value.length - maxDisplay} more
                </span>
              )}
            </div>
          )}
        </div>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-64 overflow-hidden">
          {/* Search Input */}
          <div className="p-2 border-b border-gray-200">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* Options List */}
          <div className="max-h-48 overflow-y-auto">
            {/* Select All Option */}
            {filteredOptions.length > 0 && (
              <div
                className="px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 font-medium text-sm"
                onClick={handleSelectAll}
              >
                <div className="flex items-center gap-2">
                  <div className={`
                    w-4 h-4 border rounded flex items-center justify-center
                    ${isAllSelected ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}
                  `}>
                    {isAllSelected && <Check size={12} className="text-white" />}
                  </div>
                  Select All ({filteredOptions.length})
                </div>
              </div>
            )}

            {/* Individual Options */}
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option: IOption) => {
                const isSelected = value.find((v)=> v.value === option.value);
                return (
                  <div
                    key={option.value}
                    className="px-3 py-2 hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleOptionToggle(option)}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`
                        w-4 h-4 border rounded flex items-center justify-center
                        ${isSelected ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}
                      `}>
                        {isSelected && <Check size={12} className="text-white" />}
                      </div>
                      <span className="text-sm">{option.label}</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="px-3 py-2 text-gray-500 text-sm">
                {searchTerm ? 'No options found' : 'No options available'}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;