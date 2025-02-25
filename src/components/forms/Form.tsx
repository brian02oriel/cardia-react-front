import { Controller, useForm } from 'react-hook-form';
import CustomSelect, { type IOption } from './CustomSelect';
import { useEffect, useState } from 'react';
import ReactSelect from 'react-select';



type IFormValues = {
    firstName: string
    lastName: string
    personId: string
    email: string
    differential: IOption[]
    symptoms: IOption[]
}

const Form = () => {
    const {
        handleSubmit,
        control,
        register,
        watch,
        formState: { errors },
      } = useForm<IFormValues>()

    const onSubmit = (data: any)=> {
        console.log(data)
    }

    // Watch the value of the 'symptoms' field
    const selectedSymptoms = watch('symptoms');

    // Log the value whenever it changes
    useEffect(() => {
        console.log('Selected Symptoms:', selectedSymptoms);
    }, [watch('symptoms')]);

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
                <label htmlFor='personId' className='block mb-2 text-sm font-medium'> Identificación </label>
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
                <Controller
                    name="differential"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect
                        {...field}
                        ref={field.ref}
                        instanceId="differential"
                        options={singleOptions}
                        defaultValue={singleOptions}
                        isDisabled
                        />
                    )}
                    />
            </div>
            <div className='mb-5'>
                <label htmlFor='symptoms' className='block mb-2 text-sm font-medium'> Factores de riesgo </label>
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
