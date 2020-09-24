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
  //   const [user, setUser] = useState({});


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
  // console.log(authorId);
  // console.log(user.id);
  // console.log(flag);
  // console.log('user--->', user);
  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/user/${authorId}`);
      const json = await response.json();
      console.log(json);
      setAuthor(json.phone);
    })()
  }, author)
  //   console.log(obj.sellerID);

  //   useEffect(() => {
  //     const userId = obj.sellerID
  //     const findUser = fetch(`/api/user/${userId}`)
  //       .then(response => response.json())
  //       .then(result => setUser(result))

  // },[])

  function handleDelete() {
    (async () => {
      const response = await fetch(`/api/delete/${id}`);
    })()
    dispatch(startAnimals());
    history.push('/');
  }
  console.log('user front', user)

  return (
    <section className='form-container'>
      <div className='wrap-content'>
        <div className='img-container'>
          <img className={classes.img} src={`/${obj.photo}`} />
        </div>
        <div className='text-wrap'>
          <h1>Контакты продавца: {author}</h1>
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

      {flag && <div className='end-button'>
        <Link to={`/update/${obj._id}`}><Button color="primary">Редактировать</Button></Link>
        <Button onClick={handleDelete} color="primary">Удалить</Button>
      </div>}

    </section>
  )
}
export default OneAnimal;
