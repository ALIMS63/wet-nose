import React from 'react';
import {
  AppBar,
  Button,
  CssBaseline,
  Typography,
  Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './Nav.css'
import { Affix } from 'antd'


const useStyles = makeStyles((theme) => ({
  icon: {
    // marginRight: theme.spacing(2),
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
    backgroundColor: '#bae637',
    color: 'white',
  },
  btns: {
    marginTop: '18px',
    color: '#00538A'
  },
  img: {
    marginTop: '5px',
    height: '35px',
  },
  navButton: {
    color: 'white',
    fontFamily: 'Comfortaa, cursive',
    fontWeight: '700',
    fontSize: '16px'
  }
}));


function Navigation() {
  const classes = useStyles();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return (
    <>
      <CssBaseline />
      <Affix>
        <AppBar position="relative">
          <Toolbar className='navBar'
          >

            <div className='appName'>
              {/* <CameraIcon className={classes.icon} /> */}
              <img className={classes.img} src="https://img2.pngio.com/cat-dog-paw-printing-clip-art-husky-paw-cliparts-png-download-husky-paw-png-1024_1024.png" alt="" />
              <Typography
                className={classes.navButton} variant="h6"
                color="inherit"
                noWrap
              >
                <span className={classes.navButton}>
                  Мокрый Нос
                </span>
              </Typography>
            </div>

            <div className={classes.btns}>
              {!isAuthenticated &&
                <Link className='navButton' to="/login">
                  <Button className={classes.navButton} color="inherit">
                    Вход и регистрация
                </Button>
                </Link>}
              <Link className='navButton' to="/">
                <Button className={classes.navButton} color="inherit">
                  Главная
              </Button>
              </Link>
              {isAuthenticated &&
                <Link className='navButton' to="/personalPage">
                  <Button className={classes.navButton} color="inherit">
                    Личный кабинет
                </Button>
                </Link>}
              <Link className='navButton' to="/secret">
                <Button className={classes.navButton} color="inherit">
                  Добавить объявление
              </Button>
              </Link>
              {isAuthenticated &&
                <Link className='navButton' to="/logout">
                  <Button className={classes.navButton} color="inherit">
                    Выход
                </Button>
                </Link>}
            </div>

          </Toolbar>
        </AppBar>
      </Affix>
    </>
  );
}


export default Navigation;
