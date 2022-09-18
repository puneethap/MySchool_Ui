import { HttpService } from '../http/http.service'
import { ApiResponse } from '../models/api-response'
import { CurrentUser } from '../models/currentUser'
import { Login } from '../models/login-model'

export class LoginService {
  httpService: HttpService = new HttpService()

  async userLogin(login: Login) {
    const baseUrl = '/mySchool'
    const url = `${baseUrl}/login`

    return this.httpService.post(url, login).then(
      (response) => response,
      (error) => error,
    )
  }

  async currentUser() {
    const url = '/user/currentUser'

    return this.httpService.get<ApiResponse<CurrentUser>>(url).then(
      (response: ApiResponse<CurrentUser>) => response.data,
      (error) => error,
    )
  }
}
