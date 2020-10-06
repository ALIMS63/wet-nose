import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useHistory, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Popover } from 'antd';


const useStyles = makeStyles({
  img: {
    height: '300px',
    width: '300px',
    borderRadius: '5px',
    objectFit: 'cover',
  },
  onePet: {
    backgroundColor: '#39f250',
    border: '1px solid white',
    borderRadius: '5px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  onePetHover: {
    boxShadow: '0 0 5px 2px white',
  }
});

function AnimalCard() {
  const classes = useStyles();
  const history = useHistory();
  const filters = useSelector(state => state.animals).filters;
  const data = useSelector(state => state.animals).animals;


  const filteredData = filters.category
    ? data[filters.category]
      .filter((item) => {
        if (filters.pay && String(item.pay) !== String(filters.pay)) {
          return false
        }
        if (filters.age) {
          if (item.age < filters.age[0] || item.age > filters.age[2]) {
            return false
          }
        }
        if (filters.price) {
          let price = filters.price.split('-')
          if (item.price < price[0] || item.price > price[1]) {
            return false
          }
        }
        if (filters.gender && item.gender !== filters.gender) {
          return false
        }
        if (filters.suffer && item.suffer !== filters.suffer) {
          return false
        }
        return true;
      })
    : Object.entries(data).reduce((acc, [key, value]) => {
      return acc.concat(value);
    }, [])
      .filter((item) => {
        if (filters.pay && String(item.pay) !== String(filters.pay)) {
          return false
        }
        if (filters.age) {
          console.log('>>>>', filters);
          let animalAge = filters.age.split('-')
          if (item.age < animalAge[0] || item.age > animalAge[1]) {
            return false
          }
        }
        if (filters.price) {
          let price = filters.price.split('-')
          if (item.price < price[0] || item.price > price[1]) {
            return false
          }
        }
        if (filters.gender && String(item.gender) !== String(filters.gender)) {
          return false
        }
        if (filters.suffer && item.suffer !== filters.suffer) {
          return false
        }
        return true;
      });

  return (

    <>
      <div className='block'>
        {filteredData && filteredData.map(animal => (
          (
            <Popover
              key={Math.random()}
              content={
                <div>
                  <p>Кличка: {animal.nickname}</p>
                  <p>Порода: {animal.kind}</p>
                  <p>Размер: {animal.adultSize}</p>
                  <p>Родословная: {animal.pedigree}</p>
                  <p>Цена: {animal.price}</p>
                  <p>Возраст: {animal.age}</p>
                </div>
              }
              title={
                <Link to={`/oneAnimal/${animal._id}`} >
                  Подробнее
                  </Link>
              }>
              <div
                key={animal._id}
                onClick={
                  () => history.push(`/oneAnimal/${animal._id}`)
                }
                className={classes.onePet}>
                <div>
                  <img
                    className={classes.img}
                    src={`/${animal.photo}`}
                    alt="animal"
                  />
                </div>
              </div>
            </Popover>
          )
        ))}
      </div>
    </>
  );
}

export default AnimalCard;
