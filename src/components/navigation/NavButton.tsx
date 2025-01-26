import React from 'react';
import { Back, Logout } from '../utilities/Icons';
import Tooltip from '../utilities/Tooltip';


export interface NavButtonProps {
    label?: string
    redirect: string
    type: 'info' | 'success' | 'error'
    icon?: 'back' | 'logout'
    iconWidth?: string
    iconHeight?: string
    tooltip?: string
}

const NavButton: React.FC<NavButtonProps> = ({ label, redirect, type, icon, iconHeight, iconWidth, tooltip }: NavButtonProps) => {
    const icons = {
        back: <Back width={iconWidth} height={iconHeight}/>,
        logout: <Logout width={iconWidth} height={iconHeight}/>
    }
    const types = {
        info: 'bg-contrast',
        success: 'bg-success',
        error: 'bg-error'
    }
    return (
        <a href={redirect}>
            <div className='relative flex flex-col items-center group'>
                
                <button className={`${types[type]} has-tooltip p-2 text-main rounded-custom 
                hover:text-main hover:scale-105 hover:bg-contrastHover hover:shadow-l hover:shadow-contrast
                    sm:w-3 lg:w-6 xl:w-12 sm:h-4 lg:h-8 xl:h-16`}>
                    {
                    icon ? icons[icon] : label
                    }
                </button>
                {
                    tooltip ? <Tooltip text={tooltip}/> : ''
                }
                
            </div>
        </a>
    );
};

export default NavButton;
