import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  InputAdornment,
  Link,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import "./LoginPage.scss";
import schoolicon from "./schoolicon.png";
import schoolmanagementicon from "./school-software.png";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const LoginPage = () => {
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
                  name="password"
                  type="password"
                  id="password"
                  placeholder="User Name"
                  autoComplete="current-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
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
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="mt-4 login"
                >
                  Log in
                </Button>
              </Box>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Paper>
  );
};

export default LoginPage;
