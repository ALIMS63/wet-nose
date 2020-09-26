import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
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
    <>
      {arr.map(obj => {
        return (
          <section key={Math.random()} className='form-container'>
            <div className='wrap-content'>
              <div className='img-container'>
                <img className={classes.img} src={`/${obj.photo}`} />
              </div>
              <div className='text-wrap'>
                <h1>Имя хозяина: {user.name}</h1>
                <h3>Кем является продавец: {user.whoAreYou}</h3>
                <h3>Номер телефона: {user && `${user.phone}`}</h3>
                <h3>Электронная почта: {user && `${user.email}`}</h3>
                <h2>{obj.kind} - {obj.nickname}</h2>

                <div>Размер взрослого животного - {obj.adultSize}</div>
                <div>Вес взрослого животного - {obj.adultweight}</div>
                <div>Возраст - {obj.age}</div>
                <div>Тип шерсти - {obj.longHaired === true ? 'длинношерстный' : 'короткошерстный'}</div>
                <div>Антиаллергенное животное - {obj.possibleForAllergySufferers === true ? 'да' : 'нет'}</div>
                <div>Специальные условия содержания  - {obj.specialConditionsOfDetention === true ? 'требует' : "не требует"}</div>
                <div>Цена - {obj.price} руб.</div>
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
