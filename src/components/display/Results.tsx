import React from 'react';
import DiagnosticItem, { type IItemProps } from './Items';
import Placeholder, { ETypes } from './Placeholder';


export interface IResultsProps {
   title : string
   items: IItemProps[]
   types: ETypes
}

const Results = ({ title, items, types }: IResultsProps) => {

    return (
        <div className='w-auto'>
            <div className='mb-4'>
                <h4>{ title }</h4>
            </div>
            <div className='max-h-56 border rounded-custom overflow-auto'>
                {
                   items?.length > 0 ? 
                    items.map((item, index)=> <DiagnosticItem {...item} key={item.code + index}/>) :
                    <Placeholder type={types}/>
                }
            </div>
        </div>
    );
};

export default Results;
