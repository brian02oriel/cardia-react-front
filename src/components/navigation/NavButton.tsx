import React from 'react';
import { Back, Logout } from '../utilities/Icons';


export interface NavButtonProps {
    label?: string
    type: 'info' | 'success' | 'error'
    icon?: 'back' | 'logout'
}

const NavButton: React.FC<NavButtonProps> = ({ label, type, icon }: NavButtonProps) => {
    const icons = {
        back: <Back/>,
        logout: <Logout/>
    }
    const types = {
        info: 'bg-secondary',
        success: 'bg-success',
        error: 'bg-error'
    }
    const onClick = () => {
        window.location.href = '/new-route'
    }
    return (
            <button onClick={onClick} className={`${types[type]} px-4 py-2 rounded`}>
                {
                  icon ? icons[icon] : ''
                }
            </button>
    );
};

export default NavButton;
