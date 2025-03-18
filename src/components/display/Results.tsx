import React from 'react';
import Placeholder, { ETypes } from './Placeholder';
import type { IDiagnosisResults } from '../forms/Form';
import DiagnosticItem from './Items';


export type IResultsProps =  {
   title : string
   results: IDiagnosisResults[]
   types: ETypes
}

const Results = ({ title, results, types }: IResultsProps) => {

    return (
        <div className='w-auto'>
            <div className='mb-4'>
                <h4>{ title }</h4>
            </div>
            <div className='max-h-56 border rounded-custom overflow-auto'>
                {
                   results?.length > 0 ? 
                    results.map((item, index)=> <DiagnosticItem {...item} key={item.code + index}/>) :
                    <Placeholder type={types}/>
                }
            </div>
        </div>
    );
};

export default Results;
