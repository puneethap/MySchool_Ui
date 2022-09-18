import axios from 'axios'

export type ResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream'
export class HttpService {
  headers = {
    'content-Type': 'application/json',
  }
  serverDomain = 'http://localhost:8080'

  async get<T>(url: string, type: ResponseType = 'json'): Promise<T> {
    return await axios
      .get(`${this.serverDomain}${url}`, {
        headers: this.headers,
        responseType: type,
      })
      .then((axiosResponse) => {
        return axiosResponse.data as T
      })
  }

  async post(url: string, body: unknown) {
    return await axios.post(`${this.serverDomain}${url}`, body).then(
      (axiosResponse) => {
        return axiosResponse.data
      },
      (axiosError) => {
        return axiosError?.response?.data || axiosError
      },
    )
  }

  async delete<T>(url: string): Promise<T> {
    return await axios
      .delete(`${this.serverDomain}${url}`, {
        headers: this.headers,
      })
      .then((axiosResponse) => {
        return axiosResponse.data as T
      })
  }

  async put<T>(url: string, body: unknown): Promise<T> {
    return await axios
      .put(`${this.serverDomain}${url}`, {
        headers: this.headers,
      })
      .then((axiosResponse) => {
        return axiosResponse.data as T
      })
  }
}
