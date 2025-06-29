import type { ReactNode, HTMLAttributes } from 'react';


type IProps = HTMLAttributes<HTMLTableElement> & {
    children: ReactNode;
    hover?: boolean;
}

const Tr = ({ children, hover = true }: IProps) => {
    return (
        <tr className={`p-4 ${hover ? 'hover:bg-gray-100' : ''}`} >
            {children}
        </tr>
    )
}

export default Tr