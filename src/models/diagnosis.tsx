import type { IOption } from "../components/forms/CustomSelect"

export enum ESeverity {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH'
}

export type IDiagnosisModel = {
    id: string
    diagnosis: IPredictedDiagnosis[]
}
export type IPredictedDiagnosis = {
    name: string
    code: string
    diagnosis: number
    symptoms: IOption[]
    differential: IOption
    severity: ESeverity
}

export type IDiagnosisBody = {
    firstName: string
    lastName: string
    age: number
    personId: string
    email: string
    differential: IOption
    symptoms: IOption[]
}

export type IPatientDiagnosisResponse = {
    personId: string
    firstName: string
    lastName: string
    age: number | null
    email: string
    differential: IOption
    diagnosis: IPredictedDiagnosis[]
    symptoms: IOption[]
}

export type IPatientDiagnosisSummary = {
    personId: string
    firstName: string
    lastName: string
    age: number
    email: string
    differential: IOption
    count: number

}


export const defaultValues: IDiagnosisBody = {
    firstName: '',
    lastName: '',
    age: 0,
    personId: '',
    email: '',
    differential:{
        value: 'chestPain',
        label: 'Dolor de pecho'
    },
    symptoms: []
}