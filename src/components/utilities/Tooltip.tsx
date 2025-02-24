import React from 'react';

interface ITooltipProps {
    text: string;
}

const Tooltip = ({  text }: ITooltipProps) => {
    return (
        <div className='absolute top-full w-max mt-2 hidden group-hover:flex justify-center'>
            <span className='bg-gray-700 text-white text-xs rounded py-1 px-2 w-auto'>{text}</span>
        </div>
    );
};

export default Tooltip;

