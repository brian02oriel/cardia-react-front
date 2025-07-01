import type { ReactNode, HTMLAttributes } from 'react';

type IProps = HTMLAttributes<HTMLInputElement> & {
    value?: string;
    type?: string;
    placeholder?: string;
}

const Input = (props: IProps) => {
    return (
        <input 
            type={props.type || 'text'}
            placeholder={props.placeholder || ''}
            id={props.id}
            {...props}
            className='
                bg-gray-50 border 
                border-gray-300 
                text-sm 
                text-black 
                rounded-custom 
                shadow-sm 
                block 
                w-full
                p-2.5 
                placeholder-gray-400
                focus:ring-blue-500 
                focus:border-info'/>
    )
}

export default Input