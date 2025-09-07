import type { IDiagnosisModel } from '../../models/diagnosis';
import Results from '../display/Results';
import Form from '../forms/Form';
import { useState } from 'react';


const NewView = () => {
    const [diagnosis, setDiagnosis] = useState<IDiagnosisModel>({
        id: '',
        diagnosis: []
    });
    function handleDiagnosis(data: IDiagnosisModel) {
        console.log('handleDiagnosis', data);
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
                    <Results diagnosis={diagnosis.diagnosis}/>
                </div>
            </div>
        </>
    );
};

export default NewView;
