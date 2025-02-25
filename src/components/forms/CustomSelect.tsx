import clsx from 'clsx';
import { forwardRef, useEffect, useState } from 'react';
import ReactSelect, { components } from 'react-select';
import { type ClassNamesConfig, type GroupBase, type StylesConfig } from 'react-select';


export interface IOption {
    value: string
    label: string
}

interface ISelectProps {
    instanceId: string
    options: IOption[]
    placeholder?: string
    isMulti?: true 
    isDisabled?: boolean
}

const optionStyles = {
    base: "hover:cursor-pointer px-3 py-2 rounded-custom",
    focus: "bg-gray-100 active:bg-gray-200",
    selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
    };

const customClasses: ClassNamesConfig<IOption, true, GroupBase<IOption>> | undefined = {
    control: ( { isFocused, isDisabled } ) => 
        clsx(
            'text-sm border rounded-custom p-0.5 shadow-sm block w-full',
            isFocused ? 'border-info' : 'border-gray-300',
            isDisabled ? 'bg-disabled text-gray-400' : 'bg-gray-50 text-black'
        ),
    placeholder: () => 'text-gray-400',
    valueContainer: () => 'p-1 gap-1 cursor-pointer',
    singleValue: () => 'leading-7 ml-1',
    multiValue: () => 'bg-gray-100 rounded-custom items-center py-0.5 pl-2 pr-1 gap-1.5',
    multiValueLabel: () => 'leading-6 py-0.5',
    multiValueRemove: () => 'border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-custom',
    indicatorsContainer: () => 'p-1 gap-1',
    clearIndicator: () => 'text-gray-500 p-1 rounded-custom hover:bg-red-50 hover:text-red-800',
    indicatorSeparator: () => 'bg-gray-300',
    dropdownIndicator: () => 'p-1 hover:bg-gray-100 text-gray-500 rounded-custom hover:text-black cursor-pointer',
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

const customStyles: StylesConfig<IOption, true, GroupBase<IOption>> | undefined = {
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


const CustomSelect = forwardRef<any, any>(({ ...props }, ref) => {
    return (
        <ReactSelect
        unstyled
        classNames={customClasses}
        styles={customStyles}
        ref={ref}
        {...props}
    />
    );
  });


export default CustomSelect;
