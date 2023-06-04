import { FunctionComponent, ReactElement, useState } from "react";
import { useNavigate } from 'react-router-dom'
import {
    Button,
    TextField,
    Box
  } from '@mui/material'
import { LoginService } from '../services/login-service'
import { useLocation } from "react-router-dom";
const ValidateOTP: FunctionComponent<{}> = (): ReactElement => {
    const [otp, setOtp] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const token = useLocation().state.token
    const navigate = useNavigate()
    const loginService: LoginService = new LoginService()
    const onClickHandler = async () => {
        let response = await loginService.validateOTP(token, otp)
        if(response.error != null){
            setErrorMessage(response.error.message)
        }
        else{
            setErrorMessage('')
            navigate('/resetPassword', {state:{token: response.data}})
        }
        
    }
    return (
        <>
        <TextField
        margin="normal"
        required
        fullWidth
        name="otp"
        type="number"
        id="otp"
        placeholder="OTP"
        value={otp}
        onChange={(event) => setOtp(event.target.value)}
        />

        <Button
            type="submit"
            variant="contained"
            color="primary"
            className="mt-4 login"
            onClick={onClickHandler}
        >
          Validate OTP
        </Button>
        <Box className="errorMessage">{errorMessage}</Box>
        </>
    )
}
export default ValidateOTP