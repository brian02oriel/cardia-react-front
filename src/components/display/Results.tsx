import React from 'react';
import DiagnosticItem, { type ItemProps } from './Items';
import Placeholder, { Types } from './Placeholder';


export interface ResultsProps {
   title : string
   items: ItemProps[]
   types: Types
}

const Results = ({ title, items, types }: ResultsProps) => {

    return (
        <div className='w-auto'>
            <div className='mb-4'>
                <h4>{ title }</h4>
            </div>
            <div className='max-h-56 border rounded-custom overflow-auto'>
                {
                   items?.length > 0 ? 
                    items.map((item)=> <DiagnosticItem {...item} key={item.code}/>) :
                    <Placeholder type={types}/>
                }
            </div>
        </div>
    );
};

export default Results;
