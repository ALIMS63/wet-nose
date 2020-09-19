import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUser, deleteUser } from "../../redux/actions";
import Copyright from '../Copyright/Copyright';
import Select from '../Select/Select';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Registration() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [failed, setFailed] = useState(null);

  async function handleSubmit(event) {
    const { username, email, password } = inputs
    event.preventDefault();
    const response = await fetch("/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const finalResult = await response.json();
    if (response.status === 200) {
      dispatch(setUser(finalResult));
      dispatch({
        type: 'AUTHENTICATED_SUCCESSFULLY'
      });
      return history.push('/secret');
    } else {
      setFailed(finalResult.message);
    }
  }

  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const { username, email, password, phone } = inputs;



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Userame"
                autoFocus
                onChange={handleChange}
                value={username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                value={password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone Number"
                type="phone"
                id="phone"
                autoComplete="current-password"
                onChange={handleChange}
                value={phone}
              />
            </Grid>
            <Grid item xs={12}>
              <Select />
            </Grid>


          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Registration;
