import { Severity, type ItemProps } from '../display/Items';
import type { ResultsProps } from '../display/Results';
import { Types } from '../display/Placeholder';
import Results from '../display/Results';
import Form from '../forms/Form';


const NewView = ({props}: any) => {
    const diagnosticItems: ItemProps[] = [
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

    const diagnosticeResults: ResultsProps = {
        title: 'Resultados',
        items: diagnosticItems,
        types: Types.DIAGNOSTIC
    }

    const selectedItems: ItemProps[] = [
        {
            name: 'Sufre hipertension',
            code: 'hypertension'
        },
        {
            name: 'Sufre diabetes',
            code: 'diabetes'
        },
        {
            name: 'Historial de Estenosis Coronaria (>=50%)',
            code: 'historyOfCoronaryStenosis'
        },
        {
            name: 'Al menos dos episodios de angina (en las ultimas 24h)',
            code: 'anginaEpisodes'
        }
    ]

    const selectedSymptoms: ResultsProps = {
        title: 'Seleccionados',
        items: selectedItems,
        types: Types.SELECTION
    }
    
    return (
        <>
            <div className="rounded-custom border border-borderContrast shadow-xl shadow-secondary max-h-fit min-w-[30%]">
                <div className="p-4">
                    <Form/>
                </div>
            </div>
            <div className="rounded-custom border border-borderContrast shadow-xl shadow-secondary max-h-fit min-w-[45%]">
                <div className="p-5">
                    <Results {...diagnosticeResults}/>
                </div>
                <div className="p-5">
                    <Results {...selectedSymptoms}/>
                </div>
            </div>
        </>
    );
};

export default NewView;
