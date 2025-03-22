import type { IDiagnosisResults } from '../forms/Form';
export enum ESeverity {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH'
}

const severityColor = {
    [ESeverity.LOW]: 'success',
    [ESeverity.MEDIUM]: 'warning',
    [ESeverity.HIGH]: 'error'
}


const DiagnosticItem = ({ name, diagnosis, severity }: IDiagnosisResults) => {
    const severityClass = severityColor[severity]
    return (
        <div className={`${severity ? `severity-${severityClass}` : 'border'} p-4 w-auto grid grid-cols-4 group-has-${severityClass}`}>
            {
                severity ? 
                <>
                    <div className='col-span-3'> {name} </div>
                    <div className='flex items-center justify-end'> {diagnosis}% </div>    
                </> :
                <div className='w-auto col-span-4'> {name} </div>
            }
        </div>
    );
};

export default DiagnosticItem;
