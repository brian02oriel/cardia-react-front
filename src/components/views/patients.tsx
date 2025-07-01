import { useEffect, useState } from "react"
import type { IOption } from "../forms/CustomSelect"
import { ApiClientService, EHttpMethods } from '../../../services/ApiClientService';
import Table from "../table/Table";
import THead from "../table/THead";
import Th from "../table/Th";
import Td from "../table/Td";
import Tr from "../table/Tr";
import Input from "../forms/Input";
import useThrottle from "../../hooks/useThrottle";

type IPatient = {
    personId: string
    firstName: string
    lastName: string
    age: number
    email: string
    differential: IOption
    count: number

}

const PatientsView = () => {
    const [search, setSearch] = useState<string>('');
    const [patients, setPatients] = useState<IPatient[]>([]);
    
    useEffect(() => {
        fetchPatients();
    }, [])
    
    const fetchPatients = async (search?: string) => {
        try {
            const apiClientService = new ApiClientService();
            const response = await apiClientService.apiRequest<IPatient[]>({
                url: `/diagnosis`,
                method: EHttpMethods.GET,
                params: {
                    search
                }
            })
            setPatients(response)
        } catch (error) {
            console.error("Error fetching patients:", error);
        }
    }
    
    
    const throttleSearch = useThrottle(fetchPatients, 500);
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
        throttleSearch(value);
    }

    return (
        <div className="flex flex-col w-full gap-4 ">
            <div className="w-1/2">
                <Input 
                    id="search"
                    value={search}
                    onChange={handleOnChange}
                    type='text' 
                    placeholder='Buscar paciente por nombre, apellido o identificacion' 
                    className='
                        bg-gray-50 border 
                        border-gray-300 
                        text-sm 
                        text-black 
                        rounded-custom 
                        shadow-sm 
                        block 
                        w-full
                        p-2.5 
                        placeholder-gray-400
                        focus:ring-blue-500 
                        focus:border-info'/>

            </div>
            <Table>
                <THead>
                    <Tr hover={false}>
                        <Th> ID </Th>
                        <Th> Nombre </Th>
                        <Th> Apellido </Th>
                        <Th> Edad </Th>
                        <Th> Email </Th>
                        <Th> Diferencial </Th>
                        <Th> Pruebas </Th>
                    </Tr>
                </THead>
                <tbody>
                {
                    patients.length === 0 && (
                        <Tr hover={false}>
                            <Td colSpan={7} className="text-center">No hay pacientes registrados</Td>
                        </Tr>
                    )
                }
                {patients.map((patient) => (
                    <Tr key={patient.personId}>
                        <Td>{patient.personId}</Td>
                        <Td>{patient.firstName}</Td>
                        <Td>{patient.lastName}</Td>
                        <Td>{patient.age}</Td>
                        <Td>{patient.email}</Td>
                        <Td>{patient.differential.label}</Td>
                        <Td>{patient.count}</Td>
                    </Tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default PatientsView;