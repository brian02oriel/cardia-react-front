import React from 'react';
export enum Severity {
    LOW = 'success',
    MEDIUM = 'warning',
    HIGH = 'error'
}

export interface ItemProps {
    name: string
    code: string
    percentage?: number
    severity?: Severity
}

const DiagnosticItem: React.FC<ItemProps> = ({ name, percentage, severity }) => {
    return (
        <div className={`${severity ? `severity-${severity}` : 'border'} p-4 w-auto grid grid-cols-4 group-has-${severity}`}>
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
