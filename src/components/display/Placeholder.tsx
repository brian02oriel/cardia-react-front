import React from 'react';
import { List, Results } from '../utilities/Icons';

export enum Types {
    DIAGNOSTIC='diagnostic',
    SELECTION='selection'
}

interface PlaceholderProps {
    type: Types;
}

const Placeholder: React.FC<PlaceholderProps> = ({ type }) => {
    return (
        <div className='p-4 flex justify-center items-center m-8 opacity-10 h-auto'>
        {
            type === Types.DIAGNOSTIC ? <Results width='25%' height='25%'/> : <List width='25%' height='25%'/>
        }
        </div>
    );
};

export default Placeholder;
