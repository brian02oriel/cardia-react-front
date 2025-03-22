import type { IOption } from "../forms/CustomSelect";

const SymptomsItem = ({ label}: IOption) => {
    return (
        <div className='p-4 w-auto grid grid-cols-4 hover:bg-listHover'>
            <div className='w-auto col-span-4'> {label} </div>
        </div>
    );
};

export default SymptomsItem;
