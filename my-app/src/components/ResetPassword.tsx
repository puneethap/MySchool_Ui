import { FunctionComponent, ReactElement, useState } from "react";
import { useNavigate } from 'react-router-dom'
import {
    Button,
    TextField,
    Box,
    Link
  } from '@mui/material'
import { LoginService } from '../services/login-service'
import { useLocation } from "react-router-dom";
var passwordChanged = false
const ResetPassword: FunctionComponent<{}> = (): ReactElement => {
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const token = useLocation().state.token
    const navigate = useNavigate()
    const loginService: LoginService = new LoginService()
    const onClickHandler = async () => {
        let response = await loginService.resetPassword(token, password)
        
        if(response.error != null){
            setMessage(response.error.message)
        }
        else{
            setMessage('Password Changed Successfully!')
            passwordChanged = true
        }
    }
    return (
        <>
        <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        type="password"
        id="password"
        placeholder="New Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />

        <Button
            type="submit"
            variant="contained"
            color="primary"
            className="mt-4 login"
            onClick={onClickHandler}
        >
          Submit
        </Button>
        <Box className="errorMessage">{message}</Box>
        {passwordChanged == true &&
            <Link href="/">Back to Login</Link>
        }
        </>
    )
}
export default ResetPassword