import { ETypes } from '../display/Placeholder';
import Results from '../display/Results';
import Form, { type IDiagnosisResults } from '../forms/Form';
import { useState } from 'react';


const NewView = ({props}: any) => {
    const [diagnosis, setDiagnosis] = useState<IDiagnosisResults[]>([]);
    function handleDiagnosis(data: IDiagnosisResults[]) {
        console.log(data)
        setDiagnosis(data);
      }
    return (
        <>
            <div className="rounded-custom border border-borderContrast shadow-xl shadow-secondary max-h-fit min-w-[30%] max-w-[30%]">
                <div className="p-4">
                    <Form handleDiagnosis={handleDiagnosis}/>
                </div>
            </div>
            <div className="rounded-custom border border-borderContrast shadow-xl shadow-secondary max-h-fit min-w-[45%] max-w-[45%]">
                <div className="p-5">
                    <Results results={diagnosis}/>
                </div>
            </div>
        </>
    );
};

export default NewView;
