import Placeholder, { ETypes } from './Placeholder';
import DiagnosticItem from './DiagnosticItem';
import SymptomsItem from './SymptomsItem';
import type { IOption } from '../forms/CustomSelect';
import type { IPredictedDiagnosis } from '../../models/diagnosis';


const Results = ({ diagnosis }: { diagnosis: IPredictedDiagnosis[] }) => {
    console.log({ diagnosis })
    const symptoms = diagnosis.map((item)=> item.symptoms).reduce((acc, curr)=> acc.concat(curr), [])
    return (
        <div className='w-auto flex flex-col gap-y-8'>
            <ResultSection key={0} title='Diagnóstico' diagnosis={diagnosis} type={ETypes.DIAGNOSTIC}/>
            <ResultSection key={1} title='Síntomas' symptoms={symptoms} type={ETypes.SELECTION}/>
        </div>
    );
};


type IResultSection = {
    title: string
    diagnosis?: IPredictedDiagnosis[]
    symptoms?: IOption[]
    type: ETypes
}

function ResultSection({ title, diagnosis, symptoms, type }: IResultSection) {
    return (
        <div className='flex flex-col gap-2'>
                <div>
                    <h4> {title} </h4>
                </div>
                <div className='border rounded-custom overflow-auto max-h-60'>
                    {
                        type === ETypes.SELECTION  && 
                        <>
                            {
                                symptoms?.length === 0 && 
                                <Placeholder key={0} type={ETypes.SELECTION}/>
                            }
                            {
                                (symptoms && symptoms?.length > 0) && 
                                symptoms?.map((item, index)=> <SymptomsItem {...item} key={item.value + index}/>)
                            }
                        
                        </>
                        
                    }
                    {
                        type === ETypes.DIAGNOSTIC && 
                        <>
                            {
                                diagnosis?.length === 0 && 
                                <Placeholder key={0} type={ETypes.DIAGNOSTIC}/>
                            }
                            {
                                (diagnosis && diagnosis?.length > 0) && 
                                diagnosis.map((item, index)=> <DiagnosticItem {...item} key={item.code + index}/>)
                            }
                        </>
                    }
                    
                </div>
        </div>
    )
}
export default Results;
