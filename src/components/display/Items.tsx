import React from 'react';
export enum ESeverity {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH'
}

export interface IItemProps {
    name: string
    code: string
    percentage?: number
    severity?: ESeverity
}

const DiagnosticItem = ({ name, percentage, severity }: IItemProps) => {
    return (
        <div className={`p-4 w-auto grid grid-cols-4 group-has-${severity}`}>
            {
                severity ? 
                <>
                    <div className='col-span-3'> {name} </div>
                    <div className='flex items-center justify-end'> {percentage}% </div>    
                </> :
                <div className='w-auto col-span-4'> {name} </div>
            }
        </div>
    );
};

export default DiagnosticItem;
