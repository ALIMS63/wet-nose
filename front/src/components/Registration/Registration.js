import React, { useState } from 'react';
import { Input, Select, InputLabel, FormControl, Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUser, deleteUser } from "../../redux/actions";
import Copyright from '../Copyright/Copyright';
import { Link } from "react-router-dom";
import MaskedInput from 'react-text-mask';
import InputMask from "react-input-mask";


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
  },
  mask: {
    margin: theme.spacing(1),
    padding: '0px',
    margin: '0px',
    height: '50px',
    width: '397px',
    backgroundColor: 'white',
    boxShadow: 'none',
    backgroundImage: 'none',
  }
}));

function Registration() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    whoAreYou: '',
  });

  const [failed, setFailed] = useState(null);

  async function handleSubmit(event) {
    const { name, email, password } = inputs
    event.preventDefault();
    const response = await fetch("/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
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

  const { name, email, password, phone, whoAreYou } = inputs;
  console.log(name, email, password, phone, whoAreYou);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                className={classes.inp}
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Имя"
                autoFocus
                onChange={handleChange}
                value={name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.inp}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Электронная почта"
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
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                value={password}
              />
            </Grid>

            {/* <Grid item xs={12}>

              <TextField
                className={classes.inp}
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Номер телефона"
                type="phone"
                id="phone"
                autoComplete="current-phone"
                onChange={handleChange}
                value={phone}
              />

            </Grid> */}

            <Grid item xs={12}>
              <InputMask
                mask="+7(999)999-99-99"
                className={classes.mask}
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Номер телефона"
                type="phone"
                id="phone"
                autoComplete="current-phone"
                onChange={handleChange}
                value={phone}
              >{(props) => {
                return <TextField
                  className={classes.inp}
                  variant="outlined"
                  required
                  fullWidth
                  name="phone"
                  label="Номер телефона"
                  type="phone"
                  id="phone"
                  autoComplete="current-phone"
                  onChange={handleChange}
                  value={phone}
                />
              }}</InputMask>
            </Grid>

            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  htmlFor="outlined-native-simple"
                  required
                >Кто вы?</InputLabel>
                <Select
                  className={classes.inp}
                  native
                  value={whoAreYou}
                  onChange={handleChange}
                  label="Кто вы?"
                  inputProps={{
                    name: "whoAreYou",
                    id: "outlined-native-simple"
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={'Профессиональный заводчик'}>Профессиональный заводчик</option>
                  <option value={'Приют для животных'}>Приют для животных</option>
                  <option value={'Частное лицо'}>Частное лицо</option>
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
            Зарегистрироваться
          </Button>
          {failed && <Box className={classes.failedBox}>
            <h4 className={classes.failed}>{failed}</h4>
          </Box>}
          <Grid container justify="center">
            <Grid item>
              <Link to="/login" variant="body2">
                {/* Already have an account? Login */}
                Есть аккаунт? Войдите.
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
