import React,{useState} from "react"
import {useDispatch, useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function InfoPetCard() {

    const data =  useSelector(state => state.animals).animals
    
    const animalType = Object.keys(data)
    const animals = data[animalType[0]]
    console.log(animals[0]);

    return (
        <section className='form-container'>
            <div className='wrap-content'>
                <div className='img-container'>
                    <img src={animals[0].photo[0]} />
                </div>
                <div className='text-wrap'>
                    <h3>связаться с владельцем: {}</h3>
                    <h2>{animals[0].kind} - {animals[0].nickname}</h2>
                    
                    <div>размер - {animals[0].adultSize}</div>
                    <div>вес - {animals[0].adultweight}</div>
                    <div>возраст - {animals[0].age}</div>
                    <div>тип шерсти - {animals[0].longHaired === true ? 'длинношерстный' : 'короткошерстный'}</div>
                    <div>антиаллергенное животное - {animals[0].possibleForAllergySufferers === true ? 'да' : 'нет'}</div>
                    <div>специальные условия содержания  - {animals[0].specialConditionsOfDetention === true ? 'тренбует': "не требует"}</div>
                    <div>цена - {animals[0].price} руб.</div>
                </div>
    

            </div>

                <div className='text-pet'>
                    <p>{animals[0].description}

                    </p>
                </div>
                <div className='end-button'>
                    <Button color="primary">Редактировать</Button>
                    <Button color="primary">Разместить</Button>
                </div>

        </section>
    )
}