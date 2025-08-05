import type { ReactNode, HTMLAttributes } from 'react';


type IProps = HTMLAttributes<HTMLTableRowElement> & {
    children: ReactNode;
    hover?: boolean;
}

const Tr = ({ children, hover = true, ...props }: IProps) => {
    return (
        <tr className={`p-4 ${hover ? 'hover:bg-gray-100' : ''}`} {...props}>
            {children}
        </tr>
    )
}

export default Tr