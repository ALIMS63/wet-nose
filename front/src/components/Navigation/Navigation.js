import React from 'react';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import { Container, AppBar, Button, CardActions, CardContent, CssBaseline, CardMedia, Typography, Toolbar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import ModalRegister from '../Registration/ModalRegister'
import ModalLogin from '../Login/ModalLogin'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
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
    // backgroundColor: 'red',

  }
}));


function Navigation() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.auth}>
          <div>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Your Dog App
          </Typography>
          </div>
          <div >
            {/* <Link className={classes.link} to="/registration"> */}
              <Button className={classes.button} color="inherit"><ModalRegister/></Button>
              {/* </Link> */}
            {/* <Link className={classes.link} to="/login"> */}
              <Button className={classes.button} color="inherit"><ModalLogin/></Button>
              {/* </Link> */}
            <Link className={classes.link} to="/home">
              <Button className={classes.button} color="inherit">Home</Button>
              </Link>
          </div>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        {/* <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div> */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          {/* <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid> */}
        </Container>
      </main>

    </React.Fragment>
  );
}


export default Navigation;
