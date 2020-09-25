import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { startAnimals } from '../../redux/actions';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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


function OneAnimal() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector(state => state.animals).animals;
  const user = useSelector(state => state.user);
  const [flag, setFlag] = useState(false);

  const history = useHistory();
  const [author, setAuthor] = useState(null)


  let obj;
  let authorId;
  const { id } = useParams();
  for (let one of Object.keys(data)) {
    for (let two of data[one]) {
      if (two._id === id) {
        obj = two;
        authorId = two.sellerID;
      }
    }
  }
  useEffect(() => {
    if (user && authorId == user.id) setFlag(true);
  }, [])

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/user/${authorId}`);
      const json = await response.json();
      console.log(json);
      setAuthor(json.phone);
    })()
  }, author)

  function handleDelete() {
    (async () => {
      const response = await fetch(`/api/delete/${id}`);
    })()
    dispatch(startAnimals());
    history.push('/');
  }
  console.log(author);
  return (
    <section className='form-container'>
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

      {flag && <div className='end-button'>
        <Link to={`/update/${obj._id}`}><Button color="primary">Редактировать</Button></Link>
        <Button onClick={handleDelete} color="primary">Удалить</Button>
      </div>}

    </section>
  )
}
export default OneAnimal;
