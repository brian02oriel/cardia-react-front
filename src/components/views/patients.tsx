import { useEffect, useState } from "react"
import type { IOption } from "../forms/CustomSelect"
import { ApiClientService, EHttpMethods } from '../../../services/ApiClientService';
import type { IPatientDiagnosisResponse, IPatientDiagnosisSummary } from "../../models/diagnosis"
import Table from "../table/Table";
import THead from "../table/THead";
import Th from "../table/Th";
import Td from "../table/Td";
import Tr from "../table/Tr";
import Input from "../forms/Input";
import useThrottle from "../../hooks/useThrottle";
import Modal from "../utilities/Modal";
import ModalTitle from "../modal/ModalTitle";
import ModalSubtitle from "../modal/ModalSubtitle";
import Results from "../display/Results";
import ModalBody from "../modal/ModalBody";
import ModalHeader from "../modal/ModalHeader";


const PatientsView = () => {
    const [search, setSearch] = useState<string>('');
    const [patients, setPatients] = useState<IPatientDiagnosisSummary[]>([]);
    const [selectedPatient, setSelectedPatient] = useState<IPatientDiagnosisSummary | null>(null);
    const [diagnosis, setDiagnosis] = useState<IPatientDiagnosisResponse[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        fetchPatientsSummary();
    }, [])

    useEffect(() => {
        if (selectedPatient) {
            fetchPatientDiagnosis(selectedPatient.personId);
        }
    }, [selectedPatient]);
    
    const fetchPatientsSummary = async (search?: string) => {
        try {
            const apiClientService = new ApiClientService();
            const response = await apiClientService.apiRequest<IPatientDiagnosisSummary[]>({
                url: `/diagnosis/summary`,
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

    const fetchPatientDiagnosis = async (id: string) => {
        try {
            const apiClientService = new ApiClientService();
            const response = await apiClientService.apiRequest<IPatientDiagnosisResponse[]>({
                url: `/diagnosis`,
                method: EHttpMethods.GET,
                params: {
                    personId: id
                }
            })
            console.log(response)
            setDiagnosis(response)
        } catch (error) {
            console.error("Error fetching patients:", error);
        }
    }
    
    
    const throttleSearch = useThrottle(fetchPatientsSummary, 500);
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
        throttleSearch(value);
    }

    const onCloseModal = () => {
        setIsModalOpen(false);
        setSelectedPatient(null);
    }

    return (
        <>
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
                        <Tr key={patient.personId} onClick={() => {
                            console.log("clicked patient", patient);
                            setIsModalOpen(true)
                            setSelectedPatient(patient)
                            }}>
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
            <Modal isOpen={isModalOpen} onClose={onCloseModal}>
                <ModalHeader isOpen={isModalOpen} onClose={onCloseModal}>
                    <ModalTitle>{selectedPatient?.firstName} {selectedPatient?.lastName}</ModalTitle>
                    <ModalSubtitle>id: <strong> {selectedPatient?.personId} </strong></ModalSubtitle>
                    <ModalSubtitle>age: <strong> {selectedPatient?.age} </strong></ModalSubtitle>
                </ModalHeader>
                <ModalBody>
                    {
                        diagnosis.map((value, index)=> (
                            <div className="rounded-custom border border-borderContrast shadow-xl shadow-secondary max-h-fit min-w-[45%] max-w-[45%]">
                                <div className="p-5">
                                    <Results key={index} diagnosis={value.diagnosis}/>
                                </div>
                            </div>
                            
                        ))
                    }
                </ModalBody>
            </Modal>
        
        </>
    );
};

export default PatientsView;