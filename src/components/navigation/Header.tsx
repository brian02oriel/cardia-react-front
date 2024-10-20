import React from 'react';
import NavButton from './NavButton';

interface HeaderProps {
    title: string
    isSecondary? : boolean
}

const Header: React.FC<HeaderProps> = ({ title, isSecondary }) => {
    return (
        <header className="p-4 flex flex-row container mx-auto">
            <div className="container mx-auto"> 
                <h1> { title }</h1>
            </div>
            <div className='gap-4 flex flex-row'>
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
