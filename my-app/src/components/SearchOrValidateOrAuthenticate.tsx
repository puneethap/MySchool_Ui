import { FunctionComponent, ReactElement, useState } from "react";
import { useNavigate } from 'react-router-dom'
import {
    Button,
    TextField,
    Box
  } from '@mui/material'
import { LoginService } from '../services/login-service'

const SearchOrValidateOrAuthenticate: FunctionComponent<{}> = (): ReactElement => {
    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const loginService: LoginService = new LoginService()
    const onClickHandler = async () => {
        let response = await loginService.getOTP(email)
        if(response.error != null){
            setErrorMessage(response.error.message)
        }
        else{
            setErrorMessage('')
            var token = response.data
            navigate('/validateOTP', {state:{token: token}})
        }
    }
    return (
        <>
        <TextField
        margin="normal"
        required
        fullWidth
        name="value"
        type="email"
        id="email"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />

        <Button
            type="submit"
            variant="contained"
            color="primary"
            className="mt-4 login"
            onClick={onClickHandler}
        >
          Get OTP
        </Button>
        <Box className="errorMessage">{errorMessage}</Box>
        </>
    )
}
export default SearchOrValidateOrAuthenticate