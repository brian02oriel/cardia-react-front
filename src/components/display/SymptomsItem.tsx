import type { IOption } from "../forms/CustomSelect";

type ISymptomsItem = IOption

const SymptomsItem = ({ label}: ISymptomsItem) => {
    return (
        <div className='p-4 w-auto grid grid-cols-4 hover:bg-listHover'>
            <div className='w-auto col-span-4'> {label} </div>
        </div>
    );
};

export default SymptomsItem;
