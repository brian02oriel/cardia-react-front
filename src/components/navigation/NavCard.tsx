import React from 'react';
import {New, Database, Chart, Settings} from '../utilities/Icons'


export interface NavCardProps {
    type: 'new' | 'database' | 'chart' | 'settings'
    label: string
    iconWidth: string
    iconHeight: string
}

const NavCard: React.FC<NavCardProps> = ({ type, label, iconWidth, iconHeight }) => {
    return (
        <div className='flex flex-col items-center justify-center 
                        p-4  border-4 border-contrast rounded-custom 
                        transition-transform duration-300 ease-in-out transform cursor-pointer
                        focus:animate-pulse
                         hover:text-main hover:scale-105 hover:bg-contrast hover:shadow-xl hover:shadow-contrast 
                         sm:w-36 lg:w-64 xl:w-96 sm:h-36 lg:h-64 xl:h-96'>
                { type === 'new' ? 
                <New width={iconWidth} height={iconHeight} /> : 
                type === 'database' ? 
                <Database width={iconWidth} height={iconHeight}/> : 
                type === 'chart' ? <Chart width={iconWidth} height={iconHeight}/> :
                <Settings width={iconWidth} height={iconHeight}/>}
                <div>
                    <p>{label}</p>
                </div>
        </div>
    );
};

export default NavCard;
