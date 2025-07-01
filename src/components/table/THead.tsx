import type { ReactNode, HTMLAttributes } from 'react';


type IProps = HTMLAttributes<HTMLTableElement> & {
    children: ReactNode;
}

const THead = ({ children }: IProps) => {
    return (
        <thead className='w-full text-xl bg-contrast text-fontInvert sticky top-0'>
            {children}
        </thead>
    )
}

export default THead