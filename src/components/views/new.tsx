import { ESeverity, type IItemProps } from '../display/Items';
import type { IResultsProps } from '../display/Results';
import { ETypes } from '../display/Placeholder';
import Results from '../display/Results';
import Form, { type IDiagnosisResults } from '../forms/Form';
import { useState } from 'react';


const NewView = ({props}: any) => {
    const [diagnosis, setDiagnosis] = useState<IDiagnosisResults[]>(
        [
            {
                name: '',
                code: '',
                diagnosis: 0,
                symptoms: [],
                differential: [],
                severity: ESeverity.LOW
            }
])

    function handleDiagnosis(data: IDiagnosisResults[]) {
        console.log(data)
        setDiagnosis(data);
      }

    const diagnosticItems: IItemProps[] = [
        {
            name: 'Infarto Agudo del Miocardio',
            code: 'IAM',
            percentage: 40.9,
            severity: ESeverity.HIGH
        },
        {
            name: 'Infarto Agudo del Miocardio',
            code: 'IAM',
            percentage: 40.9,
            severity: ESeverity.HIGH
        },
        {
            name: 'Infarto Agudo del Miocardio',
            code: 'IAM',
            percentage: 40.9,
            severity: ESeverity.HIGH
        },
        {
            name: 'Embolia pulmonar aguda',
            code: 'EPA',
            percentage: 30.5,
            severity: ESeverity.MEDIUM
        },
        {
            name: 'Embolia pulmonar aguda',
            code: 'EPA',
            percentage: 30.5,
            severity: ESeverity.MEDIUM
        },
        {
            name: 'Pericarditis Aguda',
            code: 'PA',
            percentage: 10,
            severity: ESeverity.LOW
        },
        {
            name: 'Pericarditis Aguda',
            code: 'PA',
            percentage: 10,
            severity: ESeverity.LOW
        },
        {
            name: 'Pericarditis Aguda',
            code: 'PA',
            percentage: 10,
            severity: ESeverity.LOW
        },
        {
            name: 'Pericarditis Aguda',
            code: 'PA',
            percentage: 10,
            severity: ESeverity.LOW
        }
    ]

    return (
        <>
            <div className="rounded-custom border border-borderContrast shadow-xl shadow-secondary max-h-fit min-w-[30%] max-w-[30%]">
                <div className="p-4">
                    <Form handleDiagnosis={handleDiagnosis}/>
                </div>
            </div>
            <div className="rounded-custom border border-borderContrast shadow-xl shadow-secondary max-h-fit min-w-[45%] max-w-[45%]">
                <div className="p-5">
                    <Results title='Resultados' types={ETypes.DIAGNOSTIC} results={diagnosis}/>
                </div>
            </div>
        </>
    );
};

export default NewView;
