import axios, { type AxiosResponse } from 'axios';


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

export class ApiClientService {
    private apiClient: any;
  
    constructor() {
        this.apiClient = axios.create({
            baseURL: 'http://0.0.0.0:8000/api',
            headers: {
              'Content-Type': 'application/json',
            },
          });
    }

    public async apiRequest<T>({url, method, data}: IApiRequestProps<T>): Promise<T> {
        const response: AxiosResponse<T> = await this.apiClient({
          method,
          url,
          data,
        });
      
        return response.data;
      }
    }