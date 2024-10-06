import React from 'react';
import {New, Database, Chart, Settings} from './icons/Icons'


interface NavCardProps {
    type: 'new' | 'database' | 'chart' | 'settings'
    label: string
}

const NavCard: React.FC<NavCardProps> = ({ type, label }) => {
    return (
        <div>
            { type === 'new' ? <New/> : type === 'database' ? <Database/> : type === 'chart' ? <Chart/> : <Settings/>}
        </div>
    );
};

export default NavCard;
