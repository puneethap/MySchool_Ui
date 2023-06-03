import {
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  Link
} from '@mui/material'
import './LoginPage.scss'
import schoolicon from './schoolicon.png'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import { FunctionComponent, ReactElement, useState } from 'react'
import { Login } from '../models/login-model'
import { useNavigate } from 'react-router-dom'
import { LoginService } from '../services/login-service'

const LoginPage: FunctionComponent<{}> = (): ReactElement => {
  const [login, setLogin] = useState({} as Login)
  const [errors, setErrors] = useState(new Map())
  const [errorMessage, setErrorMessage] = useState('' as string)
  const navigate = useNavigate()
  const loginService: LoginService = new LoginService()

  const onchangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setErrorMessage('')
    const fieldName = event.target.name
    const fieldValue = event.target.value
    const updateLogin = {
      ...login,
      [fieldName]: fieldValue,
    }
    let error = new Map()
    if (fieldValue === '') {
      error.set(fieldName, `${fieldName} can not be empty`)
    }
    setErrors(error)
    setLogin(updateLogin)
  }

  const validate = () => {
    let error = new Map()
    if (!login.username) {
      error.set('username', 'username can not be empty')
    }
    if (!login.password) {
      error.set('password', 'password can not be empty')
    }

    return error
  }

  const OnClickHandler = async () => {
    let errors = validate()
    if (errors.size > 0) {
      setErrors(errors)
    } else {
      let response = await loginService.userLogin(login)
      if (response.username != null) {
        localStorage.setItem('token', response.accessToken)
        navigate(`/home/${response.username}`)
      } else if (response.message === 'Bad credentials') {
        setErrorMessage('Invalid username or password')
      }
    }
  }

  return (
    <Paper className="papper">
      <Grid
        container
        display="flex"
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        spacing={3}
      >
        <Paper className="papper1" square={false}>
          <Box className="box1">
            <Grid item xs={12}>
              <div className="icon mb-3">
                <Avatar
                  alt="Remy Sharp"
                  variant="square"
                  src={schoolicon}
                  className="schoolmanagementicon"
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <Box className="demo">
                <Typography
                  component="h1"
                  variant="h5"
                  display="flex"
                  className="mt-5 mb-3"
                >
                  Log In
                </Typography>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  name="username"
                  type="username"
                  id="username"
                  placeholder="User Name"
                  onChange={onchangeHandler}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                  error={errors.get('username') ? true : false}
                  helperText={
                    errors && errors.get('username')
                      ? errors.get('username')
                      : ''
                  }
                />

                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={onchangeHandler}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  error={errors.get('password') ? true : false}
                  helperText={
                    errors && errors.get('password')
                      ? errors.get('password')
                      : ''
                  }
                />
                <Box className="errorMessage">{errorMessage}</Box>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="mt-4 login"
                  onClick={OnClickHandler}
                >
                  Log in
                </Button>
                <Link href='/getOTP'>Forgot password?</Link>
              </Box>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Paper>
  )
}

export default LoginPage
