import { ESeverity, type IItemProps } from '../display/Items';
import type { IResultsProps } from '../display/Results';
import { ETypes } from '../display/Placeholder';
import Results from '../display/Results';
import Form from '../forms/Form';


const NewView = ({props}: any) => {
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

    const diagnosticeResults: IResultsProps = {
        title: 'Resultados',
        items: diagnosticItems,
        types: ETypes.DIAGNOSTIC
    }

    const selectedItems: IItemProps[] = [
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

    const selectedSymptoms: IResultsProps = {
        title: 'Seleccionados',
        items: selectedItems,
        types: ETypes.SELECTION
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
