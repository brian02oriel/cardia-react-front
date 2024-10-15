import React, { useEffect } from 'react';

export interface ButtonProps {
    label: string
    type: 'info' | 'success' | 'error'
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.FC<ButtonProps> = ({ label, type, onClick }: ButtonProps) => {
    const types = {
        info: 'bg-info',
        success: 'bg-success',
        error: 'bg-error'
    }
    console.log('handleClick:', onClick);
    return (
        <>
            <button onClick={onClick} className={`${types[type]} px-4 py-2 rounded`}>
                {label}
            </button>
        </>
    );
};

export default Button;
