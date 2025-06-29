import { useEffect, useState } from "react"
import type { IOption } from "../forms/CustomSelect"
import { ApiClientService, EHttpMethods } from '../../../services/ApiClientService';
import Table from "../table/Table";
import THead from "../table/THead";
import Th from "../table/Th";
import Td from "../table/Td";
import Tr from "../table/Tr";

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
    const [patients, setPatients] = useState<IPatient[]>([]);
    useEffect(() => {
        const fetchPatients = async () => {
            const apiClientService = new ApiClientService();
            const response = await apiClientService.apiRequest<IPatient[]>({
                url: '/diagnosis',
                method: EHttpMethods.GET
            })
            setPatients(response)
        }

        fetchPatients().catch(error => {
            console.error("Error fetching patients:", error);
        });
    }, [])

    return (
        <>
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
        </>
    );
};

export default PatientsView;