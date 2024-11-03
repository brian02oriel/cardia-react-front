import React from 'react';
export enum Severity {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high'
}

export interface DiagnosticItemProps {
    name: string
    code: string
    percentage: number
    severity: Severity
}

const DiagnosticItem: React.FC<DiagnosticItemProps> = ({ name, percentage, severity }) => {
    return (
        <div className={`severity-${severity} p-4 w-auto grid grid-cols-4 first:rounded-t-custom last:border-b last:rounded-b-custom border-x border-error group-has-${severity}`}>
            <div className='col-span-3'> {name} </div>
            <div className='flex items-center justify-end'> {percentage}% </div>
        </div>
    );
};

export default DiagnosticItem;
