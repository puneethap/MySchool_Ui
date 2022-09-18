import axios from 'axios'

interface axiosResponseError {
  response: {
    status: number
  }
}

export type AxiosErrorInterceptorCallback = (
  error: axiosResponseError | any,
) => Promise<any>

export class AxiosConfigurationService {
  configureAuthorizationHeader(): void {
    axios.interceptors.request.use((config) => {
      config.headers = {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }
      return config
    })
  }

  onResponseError(callback: AxiosErrorInterceptorCallback): void {
    axios.interceptors.response.use(
      (response) => response,
      (error) => callback(error),
    )
  }
}
