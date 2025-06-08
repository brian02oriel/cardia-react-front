import { useEffect, useState } from "react"
import type { IOption } from "../forms/CustomSelect"
import { ApiClientService, EHttpMethods } from '../../../services/ApiClientService';

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
            <table>
                <tr>
                    <th> ID </th>
                    <th> Nombre </th>
                    <th> Apellido </th>
                    <th> Edad </th>
                    <th> Email </th>
                    <th> Diferencial </th>
                    <th> Pruebas </th>
                </tr>
                {
                    patients.length === 0 && (
                        <tr>
                            <td colSpan={7} className="text-center">No hay pacientes registrados</td>
                        </tr>
                    )
                }
                {patients.map((patient) => (
                    <tr key={patient.personId}>
                        <td>{patient.personId}</td>
                        <td>{patient.firstName}</td>
                        <td>{patient.lastName}</td>
                        <td>{patient.age}</td>
                        <td>{patient.email}</td>
                        <td>{patient.differential.label}</td>
                        <td>{patient.count}</td>
                    </tr>
                ))}
            </table>
        </>
    );
};

export default PatientsView;