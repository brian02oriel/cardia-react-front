import React from 'react';

interface TooltipProps {
    text: string;
}

const Tooltip: React.FC<TooltipProps> = ({  text }) => {
    return (
        <div className='absolute top-full w-max mt-2 hidden group-hover:flex justify-center'>
            <span className='bg-gray-700 text-white text-xs rounded py-1 px-2 w-auto'>{text}</span>
        </div>
    );
};

export default Tooltip;

