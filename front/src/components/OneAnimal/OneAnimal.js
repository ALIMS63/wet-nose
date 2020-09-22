import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  img: {
    height: '250px',
    width: '400px',
    borderRadius: '30px 30px 30px 30px',
  },
}));


function OneAnimal() {
  const classes = useStyles();
  const data = useSelector(state => state.animals).animals;

  let obj;
  const { id } = useParams();

  for (let one of Object.keys(data)) {
    for (let two of data[one]) {
      if (two._id === id) obj = two;
    }
  }

  return (
    <section className='form-container'>
      <div className='wrap-content'>
        <div className='img-container'>
          <img className={classes.img} src={`/${obj.photo}`} />
        </div>
        <div className='text-wrap'>
          <h3>связаться с владельцем: {}</h3>
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
        <Link to={`/delete/${obj._id}`}><Button color="primary">Удалить</Button></Link>
      </div>

    </section>
  )
}
export default OneAnimal;
