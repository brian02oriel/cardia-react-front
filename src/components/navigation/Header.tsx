import React from 'react';
import NavButton from './NavButton';

interface HeaderProps {
    title: string
    isSecondary? : boolean
}

const Header: React.FC<HeaderProps> = ({ title, isSecondary }) => {
    return (
        <header className="p-4 grid grid-cols-4">
            <div className="col-span-3"> 
                <h1> { title }</h1>
            </div>
            <div className='flex justify-end flex-row gap-4'>
                {
                    isSecondary ? 
                        <NavButton redirect='/' type='info' icon='back' tooltip='Regresar'/> 
                    : ''
                }
                <NavButton redirect='/' type='info' icon='logout' tooltip='Cerrar sesion'/> 
            </div>
        </header>
    );
};

export default Header;
