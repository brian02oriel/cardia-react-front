import clsx from 'clsx';
import React from 'react';
import Select, { type ClassNamesConfig, type GroupBase, type StylesConfig } from 'react-select';

interface OptionValueObject {
        code: string
        group?: 'riskFactor'
}

export interface MultiSelectOption {
    value: OptionValueObject
    label: string

}

interface MultiSelectProps {
    options: MultiSelectOption[]
    placeholder?: string
}

const optionStyles = {
    base: "hover:cursor-pointer px-3 py-2 rounded-custom",
    focus: "bg-gray-100 active:bg-gray-200",
    selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
    };

const customClasses: ClassNamesConfig<MultiSelectOption, true, GroupBase<MultiSelectOption>> | undefined = {
    control: ( { isFocused } ) => 
        clsx(
            'bg-gray-50 text-sm text-black border rounded-custom p-2.5 shadow-sm block w-full',
            isFocused ? 'border-info' : 'border-gray-300',
        ),
    placeholder: () => 'text-gray-400',
    valueContainer: () => 'p-1 gap-1',
    singleValue: () => 'leading-7 ml-1',
    multiValue: () => 'bg-gray-100 rounded-custom items-center py-0.5 pl-2 pr-1 gap-1.5',
    multiValueLabel: () => 'leading-6 py-0.5',
    multiValueRemove: () => 'border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-custom',
    indicatorsContainer: () => 'p-1 gap-1',
    clearIndicator: () => 'text-gray-500 p-1 rounded-custom hover:bg-red-50 hover:text-red-800',
    indicatorSeparator: () => 'bg-gray-300',
    dropdownIndicator: () => 'p-1 hover:bg-gray-100 text-gray-500 rounded-custom hover:text-black',
    menu: () => 'p-1 mt-2 border border-gray-200 bg-white rounded-custom',
    groupHeading: () => 'ml-3 mt-2 mb-1 text-gray-500 text-sm',
    option: ({ isFocused, isSelected }) =>
      clsx(
        isFocused && optionStyles.focus,
        isSelected && optionStyles.selected,
        optionStyles.base,
      ),
    noOptionsMessage: () => 'text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-custom',
}

const customStyles: StylesConfig<MultiSelectOption, true, GroupBase<MultiSelectOption>> | undefined = {
    // Remove TailwindCSS default styles for div inside the input
    input: (base) => ({
        ...base,
        'input:focus': {
        boxShadow: 'none',
        },
    }),
    // On mobile, the label will truncate automatically, so we want to
    // override that behaviour.
    multiValueLabel: (base) => ({
        ...base,
        whiteSpace: 'normal',
        overflow: 'visible',
    }),
    control: (base) => ({
        ...base,
        transition: 'none',
    }),
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, placeholder }) => {
    return (
        <>
            <Select
                unstyled
                classNames={customClasses}
                styles={customStyles}
                closeMenuOnSelect={false}
                isMulti
                options={options}
                placeholder={placeholder}
            />
        </>
    );
};

export default MultiSelect;
