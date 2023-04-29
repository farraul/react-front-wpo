import React, { useState, useEffect } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '@/app/features/user/userActions';
import { hiddenMsg, showMsg } from '@/app/features/msg/msgSlice';

const initialStateRegister = {
  firstName: '',
  email: '',
  password: '',
};

function RegisterPage() {
  const [register, setRegister] = useState(initialStateRegister);
  const navigate = useNavigate();
  const { loading, userInfo, success } = useSelector(
    (state) => state.user,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) navigate('/dashboard');
    if (success) {
      navigate('/login');
      dispatch(showMsg('You have successfully registered'));
    }
    setTimeout(() => {
      dispatch(hiddenMsg());
    }, 5000);
  }, [navigate, userInfo, success]);

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (register) {
      dispatch(userRegister(register));
      // clean state
      setRegister(initialStateRegister);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleChange}
                value={register.firstName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                value={register.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleChange}
                value={register.password}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default RegisterPage;
