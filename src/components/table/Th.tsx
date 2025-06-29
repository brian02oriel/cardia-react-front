import type { ReactNode, HTMLAttributes } from 'react';


type IProps = HTMLAttributes<HTMLTableElement> & {
    children: ReactNode;
}

const Th = ({ children }: IProps) => {
    return (
        <th className='p-4'>
            {children}
        </th>
    )
}

export default Th