import React from 'react';
import NavButton from './NavButton';

interface HeaderProps {
    title: string
    isSecondary?: boolean
}

const Header: React.FC<HeaderProps> = ({ title, isSecondary }) => {
    return (
        <header className="p-4 flex flex-col container mx-auto">
            <div className="container mx-auto"> 
                <h1> { title }</h1>
            </div>
            {
                isSecondary ? 
                <div>
                    <NavButton label='' type='info' icon='back'/> 
                </div>
                : ''
            }
            <div>
            <NavButton label='' type='info' icon='logout'/> 
            </div>
        </header>
    );
};

export default Header;
