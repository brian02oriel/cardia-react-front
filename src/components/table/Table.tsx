import type { ReactNode, HTMLAttributes } from 'react';


type IProps = HTMLAttributes<HTMLTableElement> & {
    children: ReactNode;
}

const Table = ({ children }: IProps) => {
    return (
            <div className='w-full overflow-auto'>
                <table className='w-full text-left'>
                    {children}
                </table>
            </div>
    )
}

export default Table