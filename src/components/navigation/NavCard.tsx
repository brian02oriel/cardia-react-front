import React from 'react';
import {New, Database, Chart, Settings} from '../utilities/Icons'


export interface NavCardProps {
    icon: 'new' | 'database' | 'chart' | 'settings'
    redirect: string
    label: string
    iconWidth: string
    iconHeight: string
    tooltip?: string
}

const NavCard: React.FC<NavCardProps> = ({ icon, redirect, label, iconWidth, iconHeight, tooltip }) => {
    const icons = {
        new: <New width={iconWidth} height={iconHeight} />,
        database: <Database width={iconWidth} height={iconHeight}/>,
        chart: <Chart width={iconWidth} height={iconHeight}/>,
        settings: <Settings width={iconWidth} height={iconHeight}/>
    }

    return (
        <>
            <a href={redirect}>
                <div className='flex flex-col items-center justify-center 
                            p-4 shadow-xl shadow-secondary rounded-custom 
                            transition-transform duration-300 ease-in-out transform cursor-pointer
                            focus:animate-pulse
                            hover:text-main hover:scale-105 hover:bg-contrast hover:shadow-xl hover:shadow-secondary 
                            sm:w-36 lg:w-64 xl:w-80 sm:h-36 lg:h-64 xl:h-80'>
                        { icon ? icons[icon] : '' }
                        <div>
                            <p>{label}</p>
                        </div>
                    

                </div>
            </a>
        </>
    );
};

export default NavCard;
