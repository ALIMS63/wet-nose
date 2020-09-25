import React from 'react';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import { Container, AppBar, Button, CardActions, CardContent, CssBaseline, CardMedia, Typography, Toolbar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Anketa from '../Anketa';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    marginLeft: '20px'
    // marginTop: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    marginLeft: '30px'
  },
  button: {
    marginRight: '50px'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  auth: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'end',
    // backgroundColor: '#3a9207',
    backgroundColor: '#34C924',


    // background: url('../App/images/leather-green.jpg'),
    color: 'white',
  },
  btns: {
    marginTop: '18px',
    color: '#00538A'
  },
  appName: {
    marginLeft: '30px',
    fontFamily: 'Raleway, Arial',
    fontStyle: 'italic',
  },
  img: {
    marginTop: '5px',
    height: '35px',
    // borderRadius: '50px',
  }
}));


function Navigation() {
  const classes = useStyles();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  console.log(isAuthenticated);

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.auth}>

          <div className={classes.appName}>
            {/* <CameraIcon className={classes.icon} /> */}
            <img className={classes.img} src="https://img2.pngio.com/cat-dog-paw-printing-clip-art-husky-paw-cliparts-png-download-husky-paw-png-1024_1024.png" alt="" />
            <Typography className={classes.icon} variant="h6" color="inherit" noWrap>
              Мокрый Нос
          </Typography>
          </div>

          <div className={classes.btns}>
            {!isAuthenticated && <Link className={classes.link} to="/login">
              <Button className={classes.button} color="inherit">
                Вход и регистрация
                </Button>
            </Link>}
            <Link className={classes.link} to="/">
              <Button className={classes.button} color="inherit">
                Главная
              </Button>
            </Link>
            {isAuthenticated && <Link className={classes.link} to="/personalPage">
              <Button className={classes.button} color="inherit">
                Личный кабинет
                </Button>
            </Link>}
            {/* {!isAuthenticated && <Link className={classes.link} to="/registration"><Button className={classes.button} color="inherit">Регистрация</Button></Link>} */}
            <Link className={classes.link} to="/secret">
              <Button className={classes.button} color="inherit">
                Добавить объявление
              </Button>
            </Link>


            {isAuthenticated &&
              <Link className={classes.link} to="/logout">
                <Button className={classes.button} color="inherit">
                  Выход
                </Button>
              </Link>}

          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}


export default Navigation;
