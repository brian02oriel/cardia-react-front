import axios, { type AxiosInstance, type AxiosResponse } from 'axios';


export enum EHttpMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

interface IApiRequestProps<T> {
    url: string;
    method: EHttpMethods.GET | EHttpMethods.POST | EHttpMethods.PUT | EHttpMethods.DELETE;
    data?: T;
}

const API_URL = import.meta.env.PUBLIC_API_URL;

export class ApiClientService {
    private apiClient: AxiosInstance;
  
    constructor() {
        this.apiClient = axios.create({
            baseURL: `${API_URL}`,
            headers: {
              'Content-Type': 'application/json',
            },
          });
    }

    public async apiRequest<T>({url, method, data}: IApiRequestProps<T>): Promise<T> {
      try {
        const response: AxiosResponse<T> = await this.apiClient({
            method,
            url,
            data,
          });
        
          return response.data;
      } catch (error) {
        console.error(error)
        throw error
      }  
    }
}