import type { ReactNode, HTMLAttributes } from 'react';


type IProps = HTMLAttributes<HTMLTableElement> & {
    children: ReactNode;
    colSpan?: number;
}

const Td = ({ children, colSpan }: IProps) => {
    return (
        <td className='p-4 cursor-pointer' colSpan={colSpan}>
            {children}
        </td>
    )
}

export default Td