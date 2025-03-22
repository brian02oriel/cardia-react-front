import { ListPlaceholder, ResultsPlaceholder } from '../utilities/Icons';

export enum ETypes {
    DIAGNOSTIC='diagnostic',
    SELECTION='selection'
}

interface IPlaceholderProps {
    type: ETypes;
}

const Placeholder = ({ type }: IPlaceholderProps) => {
    return (
        <div className='p-4 flex justify-center items-center m-8 opacity-10 h-auto'>
        {
            type === ETypes.DIAGNOSTIC ? <ResultsPlaceholder width='20%' height='20%'/> : <ListPlaceholder width='20%' height='20%'/>
        }
        </div>
    );
};

export default Placeholder;
