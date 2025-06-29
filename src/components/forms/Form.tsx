import { Controller, useForm } from 'react-hook-form';
import CustomSelect, { type IOption } from './CustomSelect';
import { ApiClientService, EHttpMethods } from '../../../services/ApiClientService';
import type { ESeverity } from '../display/DiagnosticItem';
import Label from './Label';

type IFormProps = {
    handleDiagnosis: any
}

export type IDiagnosisModel = {
    id: string
    diagnosis: IDiagnosisResponse[]
}
export type IDiagnosisResponse = {
    name: string
    code: string
    diagnosis: number
    symptoms: IOption[]
    differential: IOption
    severity: ESeverity
}

type IDiagnosisBody = {
    firstName: string
    lastName: string
    age: number
    personId: string
    email: string
    differential: IOption
    symptoms: IOption[]
}

const defaultValues: IDiagnosisBody = {
    firstName: '',
    lastName: '',
    age: 0,
    personId: '',
    email: '',
    differential:{
        value: 'chestPain',
        label: 'Dolor de pecho'
    },
    symptoms: []
}

const Form = ({ handleDiagnosis }: IFormProps) => {
    const {
        handleSubmit,
        control,
        register,
        formState: { errors },
      } = useForm<IDiagnosisBody>({
        defaultValues
      })

    const onSubmit = async (data: IDiagnosisBody)=> {
        const diagnosis = async (data: IDiagnosisBody): Promise<IDiagnosisModel> => {
            const apiClientService = new ApiClientService()
            return await apiClientService.apiRequest<IDiagnosisModel>({
                url: '/diagnosis',
                method: EHttpMethods.POST,
                data: data
            })
          }
        handleDiagnosis(await diagnosis(data));
    }

    
    const multiOptions: IOption[] = [
        {
            value: 'olderThan65',
            label: 'Persona mayor a 65 anos'
        },
        {
            value: 'hypertension',
            label: 'Sufre hipertension'
        },
        {
            value: 'diabetes',
            label: 'Sufre diabetes'
           
        },
        {
            value: 'hyperlipidemia',
            label: 'Hiperlipidemia'
        },
        {
            value: 'smoker',
            label: 'Fumador'
        },
        {
            value: 'historyOfHeartDisease',
            label: 'Historial familiar de enfermedades cardiacas'
        },
        {
            value: 'historyOfCoronaryStenosis',
            label: 'Historial de Estenosis Coronaria (>=50%)'
        },
        {
            value: 'anginaEpisodes',
            label: 'Al menos dos episodios de angina (en las ultimas 24h)'
        },
        {
            value: 'aspirinUsage',
            label: 'Uso de aspirina en los ultimos 7 dias'
        },
        {
            value: 'segmentSTChanges',
            label: 'Desviacion/Cambio en el segmento ST (>=0.05 mV)'
        },
        {
            value: 'necrosisMarkers',
            label: 'Marcadores cardiacos de necrosis (troponina o CK-MB)'
        },
        {
            value: 'deepVeinThrombosis',
            label: 'Signos clínicos de trombosis venosa profunda (TVP)'
        },
        {
            value: 'alternativeToEP',
            label: 'Diagnóstico alternativo menos probable que la EP'
        },
        {
            value: 'beatsPerMinutesOverHundred',
            label: 'Frecuencia cardíaca > 100bpm'
        },
        {
            value: 'previousSurgery',
            label: 'Inmovilización o cirugía mayor en las últimas 4 semanas'
        },
        {
            value: 'previousTVPOrEp',
            label: 'Historia previa de EP o TVP'
        },
        {
            value: 'hemoptisis',
            label: 'Hemoptisis'
        },
        {
            value: 'activeCancer',
            label: 'Cáncer activo'
        },

    ]

    const singleOptions: IOption[] = [
        {
            value: 'chestPain',
            label: 'Dolor de pecho'
        },
    ]

    return (
        <form className='p-2 min-w-80' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-5'>
                <Label htmlFor='firstName'> Nombre </Label>
                <input type='text' {...register('firstName', {
                                required: true
                            })} 
                            placeholder='Nombre del paciente'
                            className='bg-gray-50 border border-gray-300 
                                            text-sm text-black rounded-custom
                                        shadow-sm block w-full p-2.5 placeholder-gray-400
                                        focus:ring-blue-500 focus:border-info'/>
            </div>
            <div className='mb-5'>
                <Label htmlFor='lastName'> Apellido </Label>
                <input type='text' {...register('lastName', {
                                required: true
                            })} 
                            placeholder='Apellido del paciente'
                            className='bg-gray-50 border border-gray-300 
                                            text-sm text-black rounded-custom
                                        shadow-sm block w-full p-2.5 placeholder-gray-400
                                        focus:ring-blue-500 focus:border-info'/>
            </div>
            <div className='mb-5'>
                <Label htmlFor='age'> Edad </Label>
                <input type='text' {...register('age', {
                                required: true
                            })} 
                            placeholder='Edad del paciente'
                            className='bg-gray-50 border border-gray-300 
                                            text-sm text-black rounded-custom
                                        shadow-sm block w-full p-2.5 placeholder-gray-400
                                        focus:ring-blue-500 focus:border-info'/>
            </div>
            <div className='mb-5'>
                <Label htmlFor='personId'> Identificación </Label>
                <input type='text' {...register('personId', {
                                required: true
                            })} 
                            placeholder='Cedula/Pasaporte'
                            className='bg-gray-50 border border-gray-300 
                                            text-sm text-black rounded-custom
                                        shadow-sm block w-full p-2.5 placeholder-gray-400
                                        focus:ring-blue-500 focus:border-info'/>
            </div>
            <div className='mb-5'>
                <Label htmlFor='email'> Email </Label>
                <input type='text' {...register('email')} 
                            placeholder='Correo electronico del paciente'
                            className='bg-gray-50 border border-gray-300 
                                            text-sm text-black rounded-custom
                                        shadow-sm block w-full p-2.5 placeholder-gray-400
                                        focus:ring-blue-500 focus:border-info'/>
            </div>
            <div className='mb-5'>
                <Label htmlFor='differential'> Diferencial </Label>
                <Controller
                    name="differential"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect
                        {...field}
                        ref={field.ref}
                        instanceId="differential"
                        options={singleOptions}
                        defaultValue={singleOptions[0]}
                        isDisabled
                        />
                    )}
                    />
            </div>
            <div className='mb-5'>
                <Label htmlFor='symptoms'> Factores de riesgo </Label>
                <Controller
                    name="symptoms"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect
                            {...field}
                            ref={field.ref}
                            placeholder="Seleccione..."
                            instanceId="symptoms"
                            options={multiOptions}
                            isMulti
                        />
                    )}
                />
            </div>
            <div className='flex justify-end'>
                <button type='submit' className='text-main hover:mainHover bg-success hover:bg-successHover focus:ring-4 focus:outline-none focus:ring-success font-medium rounded-custom text-sm px-5 py-2.5 text-center min-w-36'> Enviar </button>
            </div>
        </form>
    );
};

export default Form;
