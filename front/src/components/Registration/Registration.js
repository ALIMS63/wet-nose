import React, { useState } from 'react';
import { Select, InputLabel, FormControl, Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUser, deleteUser } from "../../redux/actions";
import Copyright from '../Copyright/Copyright';
import { Link } from "react-router-dom";


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
  formControl: {
    margin: theme.spacing(1),
    padding: '0px',
    margin: '0px',
    height: '50px',
    width: '397px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  failedBox: {
    marginTop: "0px",
    marginBottom: "20px",
    width: "397px",
    height: "20px",
  },
  failed: {
    color: 'red',
    fontFamily: 'Arial',
    fontWeight: "bold"
  },
  inp: {
    backgroundColor: 'white',
    borderRadius: '5px',
    opacity: '0.8'
  }
}));

function Registration() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    whoAreYou: '',
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
        phone,
        whoAreYou
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

  const { username, email, password, phone, whoAreYou } = inputs;



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
                className={classes.inp}
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
                className={classes.inp}
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
                className={classes.inp}
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
                className={classes.inp}
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
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  htmlFor="outlined-native-simple"
                  required
                >Who are you?</InputLabel>
                <Select
                  className={classes.inp}
                  native
                  value={whoAreYou}
                  onChange={handleChange}
                  label="Who are you?"
                  inputProps={{
                    name: "whoAreYou",
                    id: "outlined-native-simple"
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={'Professional Breeder'}>Professional Breeder</option>
                  <option value={'Animal Shelter'}>Animal Shelter</option>
                  <option value={'Private Person'}>Private Person</option>
                </Select>
              </FormControl>
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
          {failed && <Box className={classes.failedBox}>
            <h4 className={classes.failed}>{failed}</h4>
          </Box>}
          <Grid container justify="center">
            <Grid item>
              <Link to="/login" variant="body2">
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
