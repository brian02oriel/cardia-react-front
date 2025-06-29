import type { ReactNode, HTMLAttributes } from 'react';


type IProps = HTMLAttributes<HTMLLabelElement> & {
    children: ReactNode;
    htmlFor?: string;
}

const Label = ({ children, htmlFor }: IProps) => {
    return (
        <label htmlFor={htmlFor} className='block mb-2 text-sm font-medium'> {children} </label>
    )
}

export default Label