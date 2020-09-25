import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Tooltip, Popover, Button } from 'antd';


const useStyles = makeStyles({
  // block: {
  //   margin: 'auto',
  //   width: '60%',
  //   marginTop: '50px',
  //   display: 'flex',
  //   justifyContent: 'space-around',
  //   flexWrap: 'wrap',

  // },
  img: {
    height: '300px',
    width: '300px',
    borderRadius: '5px',
    objectFit: 'cover',
  },
  onePet: {
    backgroundColor: '#39f250',
    // boxShadow: '0 0 5px 2px white',
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
  // console.log('filter age===',filters.age[0]);
  // console.log('filter age===',filters.age[2]);
  // console.log('filters price===',filters.price[0]);
  // console.log('filters price===',filters.price[2]);


  const filteredData = filters.category
    ? data[filters.category]
      .filter((item) => {
        console.log(filters.pay);
        console.log(item.pay);
        if (filters.pay && String(item.pay) !== String(filters.pay)) {
          return false
        }
        if (filters.age) {
          if (item.age < filters.age[0] || item.age > filters.age[2]) {
            console.log('OK=====', item.age);
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
        console.log(filters.age);
        console.log(item.age);
        if (filters.pay && String(item.pay) !== String(filters.pay)) {
          return false
        }
        if (filters.age) {
          console.log('>>>>',filters);
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
      <container className='block'>

        {filteredData && filteredData.map(animal => (
          (
            <Popover
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
        ))
        }

      </container>
    </>










    // <>
    //   <container className={classes.block}>

    //     {Object.keys(filteredData) && Object.keys(filteredData).map(key => {
    //       return (filteredData[key] && filteredData[key].map(obj => {
    //         return (
    //           <Popover
    //             content={
    //               <div>
    //                 <p>Кличка: {obj.nickname}</p>
    //                 <p>Порода: {obj.kind}</p>
    //                 <p>Размер: {obj.adultSize}</p>
    //                 <p>Родословная: {obj.pedigree}</p>
    //                 <p>Описание: {obj.description}</p>
    //               </div>
    //             }
    //             title={
    //               <Link to={`/oneAnimal/${obj._id}`} >
    //                 Подробнее
    //               </Link>
    //             }>
    //             <div
    //               key={obj._id}
    //               onClick={
    //                 () => history.push(`/oneAnimal/${obj._id}`)
    //               }
    //               className={classes.onePet}>
    //               <div>
    //                 <img
    //                   className={classes.img}
    //                   src={`/${obj.photo}`}
    //                   alt="animal"
    //                 />
    //               </div>
    //             </div>
    //           </Popover>
    //         )
    //       }))
    //     })
    //     }

    //   </container>
    // </>
  );
}

export default AnimalCard;