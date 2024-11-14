import { useForm } from 'react-hook-form';
import CustomSelect, { type CustomSelectOption } from './CustomSelect';

const Form = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { 
            errors,
        },
        watch
    } = useForm()

    console.log(JSON.stringify(watch(), null, 2))
    const onSubmit = handleSubmit((data)=> {
        console.log(data)
    })

    const multiOptions: CustomSelectOption[] = [
        {
            code: 'olderThan65',
            label: 'Persona mayor a 65 anos'
        },
        {
            code: 'hypertension',
            label: 'Sufre hipertension'
        },
        {
            code: 'diabetes',
            label: 'Sufre diabetes'
           
        },
        {
            code: 'hyperlipidemia',
            label: 'Hiperlipidemia'
        },
        {
            code: 'smoker',
            label: 'Fumador'
        },
        {
            code: 'historyOfHeartDisease',
            label: 'Historial familiar de enfermedades cardiacas'
        },
        {
            code: 'historyOfCoronaryStenosis',
            label: 'Historial de Estenosis Coronaria (>=50%)'
        },
        {
            code: 'anginaEpisodes',
            label: 'Al menos dos episodios de angina (en las ultimas 24h)'
        },
        {
            code: 'aspirinUsage',
            label: 'Uso de aspirina en los ultimos 7 dias'
        },
        {
            code: 'segmentSTChanges',
            label: 'Desviacion/Cambio en el segmento ST (>=0.05 mV)'
        },
        {
            code: 'necrosisMarkers',
            label: 'Marcadores cardiacos de necrosis (troponina o CK-MB)'
        },

    ]

    const singleOptions: CustomSelectOption[] = [
        {
            code: 'chestPain',
            label: 'Dolor de pecho'
        },
    ]
    return (
        <form className='p-2 min-w-80 max-w-sm mx-auto' onSubmit={onSubmit}>
            <div className='mb-5'>
                <label htmlFor='firstName' className='block mb-2 text-sm font-medium'> Nombre </label>
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
                <label htmlFor='lastName' className='block mb-2 text-sm font-medium'> Apellido </label>
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
                <label htmlFor='id' className='block mb-2 text-sm font-medium'> Identificación </label>
                <input type='text' {...register('id', {
                                required: true
                            })} 
                            placeholder='Cedula/Pasaporte'
                            className='bg-gray-50 border border-gray-300 
                                            text-sm text-black rounded-custom
                                        shadow-sm block w-full p-2.5 placeholder-gray-400
                                        focus:ring-blue-500 focus:border-info'/>
            </div>
            <div className='mb-5'>
                <label htmlFor='email' className='block mb-2 text-sm font-medium'> Email </label>
                <input type='text' {...register('email')} 
                            placeholder='Correo electronico del paciente'
                            className='bg-gray-50 border border-gray-300 
                                            text-sm text-black rounded-custom
                                        shadow-sm block w-full p-2.5 placeholder-gray-400
                                        focus:ring-blue-500 focus:border-info'/>
            </div>
            <div className='mb-5'>
                <label htmlFor='differential' className='block mb-2 text-sm font-medium'> Diferencial </label>
                <CustomSelect options={singleOptions} placeholder='Seleccione diferencial'  isDisabled={true} {...register('differential', {
                                required: true,
                                disabled: true
                            })} />
            </div>
            <div className='mb-5'>
                <label htmlFor='symptoms' className='block mb-2 text-sm font-medium'> Factores de riesgo </label>
                <CustomSelect options={multiOptions} placeholder='Seleccione sintomas' isMulti={true} {...register('symptoms', {
                                required: true
                            })} />
            </div>
            <div className='flex justify-end'>
                    <button type='submit' className='text-main hover:mainHover bg-success hover:bg-successHover focus:ring-4 focus:outline-none focus:ring-success font-medium rounded-custom text-sm px-5 py-2.5 text-center'> Enviar </button>
            </div>
        </form>
    );
};

export default Form;
