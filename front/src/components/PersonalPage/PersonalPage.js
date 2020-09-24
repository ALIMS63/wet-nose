import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { startAnimals } from '../../redux/actions';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 700,
  },
  image: {
    width: 200,
    height: 200,
  },
  img: {
    borderRadius: '100%',
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  img: {
    height: '400px',
    width: '400px',
    borderRadius: '5px',
    objectFit: 'cover',
  },
}));

function PersonalPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const animals = useSelector(state => state.animals.animals);
  const history = useHistory();

  let arr = [];
  for (let key in animals) {
    animals[key].forEach(anim => { if (anim.sellerID == user.id) arr.push(anim) });
  }

  function handleDelete(id) {
    (async () => {
      const response = await fetch(`/api/delete/${id}`);
    })()
    dispatch(startAnimals());
    history.push('/personalPage');
  }

  return (
    // <div className={classes.root}>
    //   <Paper className={classes.paper}>
    //     <Grid container spacing={2}>
    //       <Grid item>
    //         <ButtonBase className={classes.image}>
    //           <img className={classes.img} alt="complex" src="https://i.pinimg.com/originals/98/9f/e5/989fe5aa7178b758c265b1e665f4ebb7.jpg" />
    //         </ButtonBase>
    //       </Grid>
    //       <Grid item xs={12} sm container>
    //         <Grid item xs container direction="column" spacing={2}>
    //           <Grid item xs>
    //             <Typography gutterBottom variant="subtitle1">
    //               Имя: {user.name}
    //             </Typography>
    //             <Typography variant="body2" gutterBottom>
    //               Владелец: {user.whoAreYou}
    //             </Typography>
    //             <Typography variant="body2" color="textSecondary">
    //               Электронная почта: {user.email}
    //             </Typography>
    //             <Typography variant="body2" color="textSecondary">
    //               Профиль создан: {user.createdAt}
    //             </Typography>
    //           </Grid>
    //           <Grid item>
    //             <Typography variant="body2" style={{ cursor: 'pointer' }}>
    //               {user.phone}
    //             </Typography>
    //           </Grid>
    //         </Grid>
    //         <Grid item>
    //           <Typography variant="subtitle1">$19.00</Typography>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Paper>
    // </div>
    <>
      {arr.map(obj => {
        return (
          <section className='form-container'>
            <div className='wrap-content'>
              <div className='img-container'>
                <img className={classes.img} src={`/${obj.photo}`} />
              </div>
              <div className='text-wrap'>
                <h1>Контакты продавца: {user.name}</h1>
                <h3>связаться с владельцем: {}</h3>
                <h3>связаться с владельцем:{user && `${user.username} - 
    ${user.phone}`}</h3>
                <p>{user.whoAreYou}</p>
                <h2>{obj.kind} - {obj.nickname}</h2>

                <div>размер - {obj.adultSize}</div>
                <div>вес - {obj.adultweight}</div>
                <div>возраст - {obj.age}</div>
                <div>тип шерсти - {obj.longHaired === true ? 'длинношерстный' : 'короткошерстный'}</div>
                <div>антиаллергенное животное - {obj.possibleForAllergySufferers === true ? 'да' : 'нет'}</div>
                <div>специальные условия содержания  - {obj.specialConditionsOfDetention === true ? 'тренбует' : "не требует"}</div>
                <div>цена - {obj.price} руб.</div>
              </div>


            </div>

            <div className='text-pet'>
              <p>
                {obj.description}
              </p>
            </div>
            <div className='end-button'>
              <Link to={`/update/${obj._id}`}><Button color="primary">Редактировать</Button></Link>
              <Button onClick={() => handleDelete(obj._id)} color="primary">Удалить</Button>
            </div>

          </section>
        )
      })}
    </>
  );
}

export default PersonalPage;
