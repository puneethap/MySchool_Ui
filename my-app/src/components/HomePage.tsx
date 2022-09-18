import { Paper } from '@mui/material'
import './LoginPage.scss'
import { FunctionComponent, ReactElement, useEffect, useState } from 'react'
import { LoginService } from '../services/login-service'

const HomePage: FunctionComponent<{}> = (): ReactElement => {
  const [user, setUser] = useState('' as any)
  const loginService: LoginService = new LoginService()

  useEffect(() => {
    fetchCurrentUser()
    // eslint-disable-next-line
  }, [])

  const fetchCurrentUser = async () => {
    let response = await loginService.currentUser()
    if (response.userName) {
      setUser(response.userName)
    }
  }

  return (
    <Paper className="papper">
      <div>
        <h3>Welcome {user}</h3>
      </div>
    </Paper>
  )
}

export default HomePage
