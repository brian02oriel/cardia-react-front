import { List, Results } from '../utilities/Icons';

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
            type === ETypes.DIAGNOSTIC ? <Results width='25%' height='25%'/> : <List width='25%' height='25%'/>
        }
        </div>
    );
};

export default Placeholder;
