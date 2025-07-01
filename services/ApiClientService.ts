import axios, { type AxiosInstance, type AxiosResponse } from 'axios';


export enum EHttpMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

interface IApiRequestProps {
    url: string;
    method: EHttpMethods.GET | EHttpMethods.POST | EHttpMethods.PUT | EHttpMethods.DELETE;
    data?: any;
    params?: Record<string, any>;
}

export class ApiClientService {
    private apiClient: AxiosInstance;
    private readonly API_URL: string = import.meta.env.PUBLIC_API_URL;
  
    constructor() {
        this.apiClient = axios.create({
            baseURL: `${this.API_URL}`,
            headers: {
              'Content-Type': 'application/json',
            },
          });
    }

    public async apiRequest<T>({url, method, data, params}: IApiRequestProps): Promise<T> {
      try {
        const response: AxiosResponse<T> = await this.apiClient({
            method,
            url,
            data,
            params
          });
        
          return response.data;
      } catch (error) {
        console.error(error)
        throw error
      }  
    }
}