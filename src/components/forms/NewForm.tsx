import React from 'react';
import { useForm } from 'react-hook-form';

interface SelectItem {
    key: number
    value: any
    text: string
}

export interface Input {
    label: string
    name: string
    type : 'text' | 'select'
    options?: SelectItem[]
}

interface NewFormProps {
   inputs: Input[]
}

const NewForm: React.FC<NewFormProps> = ({ inputs }) => {
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
    return (
        <form onSubmit={onSubmit}>
            {
                inputs.map(({label, name, type, options}, index)=> (
                 <div key={index}>
                    <label htmlFor={name}> {label} </label>
                    {
                        type === 'select' ? 
                            <select {...register(name, {
                                required: true
                            })}>
                                {
                                    options?.map(({value, text}, index)=> (
                                        <option key={index} value={value}> {text} </option>
                                    ))
                                }
                            </select>
                        :
                        
                        <input type={type} {...register(name, {
                            required: true
                        })}/>
                    }
                 </div>   
                ))
            }
            <button type='submit'> Submit </button>
        </form>
    );
};

export default NewForm;
