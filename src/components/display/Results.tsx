import React from 'react';
import DiagnosticItem, { Severity, type DiagnosticItemProps } from './DiagnosticItem';

interface ResultsProps {
   name : string;
}

const Results: React.FC<ResultsProps> = ({ name }) => {
    const diagnosticItems: DiagnosticItemProps[] = [
        {
            name: 'Infarto Agudo del Miocardio',
            code: 'IAM',
            percentage: 40.9,
            severity: Severity.HIGH
        },
        {
            name: 'Infarto Agudo del Miocardio',
            code: 'IAM',
            percentage: 40.9,
            severity: Severity.HIGH
        },
        {
            name: 'Infarto Agudo del Miocardio',
            code: 'IAM',
            percentage: 40.9,
            severity: Severity.HIGH
        },
        {
            name: 'Embolia pulmonar aguda',
            code: 'EPA',
            percentage: 30.5,
            severity: Severity.MEDIUM
        },
        {
            name: 'Embolia pulmonar aguda',
            code: 'EPA',
            percentage: 30.5,
            severity: Severity.MEDIUM
        },
        {
            name: 'Pericarditis Aguda',
            code: 'PA',
            percentage: 10,
            severity: Severity.LOW
        },
        {
            name: 'Pericarditis Aguda',
            code: 'PA',
            percentage: 10,
            severity: Severity.LOW
        },
        {
            name: 'Pericarditis Aguda',
            code: 'PA',
            percentage: 10,
            severity: Severity.LOW
        },
        {
            name: 'Pericarditis Aguda',
            code: 'PA',
            percentage: 10,
            severity: Severity.LOW
        }
    ]
    return (
        <div className='w-auto'>
            <div className='mb-4'>
                <h3>Resultados</h3>
            </div>
            <div className='max-h-dvh overflow-auto'>
                {
                    diagnosticItems.map((item)=> <DiagnosticItem {...item} key={item.code}/>)
                }
            </div>
        </div>
    );
};

export default Results;
