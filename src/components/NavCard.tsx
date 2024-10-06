import React from 'react';
import {New, Database, Chart, Settings} from './icons/Icons'


export interface NavCardProps {
    type: 'new' | 'database' | 'chart' | 'settings'
    label: string
    width: string
    height: string
    iconWidth: string
    iconHeight: string
}

const NavCard: React.FC<NavCardProps> = ({ type, label, width, height, iconWidth, iconHeight }) => {
    return (
        <div className='flex flex-col items-center justify-center 
                        p-4  border-4 border-contrast rounded-custom 
                        text-contrast
                        transition-transform duration-300 ease-in-out transform cursor-pointer
                        focus:animate-pulse
                         hover:text-main hover:scale-105 hover:bg-contrast hover:shadow-xl hover:shadow-contrast' style={{ width: width,  height: height}}>
                { type === 'new' ? 
                <New width={iconWidth} height={iconHeight} /> : 
                type === 'database' ? 
                <Database width={iconWidth} height={iconHeight}/> : 
                type === 'chart' ? <Chart width={iconWidth} height={iconHeight}/> :
                <Settings width={iconWidth} height={iconHeight}/>}
                <div>
                    <h2>{label}</h2>
                </div>
        </div>
    );
};

export default NavCard;
