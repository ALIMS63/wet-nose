import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { makeStyles } from '@material-ui/core/styles';

import {
  setAnimalCategory,
  ageFilter,
  genderFilter,
  weightFilter,
  sufferFilter,
  apartmentFilter,
} from '../../redux/actions'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function Anketa({ handleAnketa }) {
  const data = useSelector(state => state.animals).animals;
  const [active, setActive] = useState(true)

  const filters = useSelector((state) => state.animals.filters)
  const animalsFromState = useSelector((state) => state.animals.animals)

  const [visible, setVisible] = useState(false)

  let category = animalsFromState[filters.category]

  const dispatch = useDispatch()


  function handleActive(e) {
    const key = e.target.value
    switch (key) {
      case 'dogs':
        dispatch(setAnimalCategory(key))
        break;
      case 'cats':
        dispatch(setAnimalCategory(key))
        break;
      case 'otheranimals':
        dispatch(setAnimalCategory('other'))
        break;
      case 'девочка':
        dispatch(genderFilter(key))
        break;
      case 'мальчик':
        dispatch(genderFilter(key))
        break;
      case '0-10':
        dispatch(weightFilter(key))
        break;
      case '10-25':
        dispatch(weightFilter(key))
        break;
      case '25-50':
        dispatch(weightFilter(key))
        break;
      case '0-1':
        dispatch(ageFilter('0-1'))
        break;
      case ('1-3' || "3-7" || "7-999"):
        dispatch(ageFilter("3-7"))
        break;
      case 'дом':
        dispatch(apartmentFilter(false))
        break;
      case 'специальные условия':
        dispatch(apartmentFilter(false))
        break;
      case 'квартира':
        dispatch(apartmentFilter(true))
        break;
      default:
        break;
    }
  }

  function handleSubmit() {

    setVisible(!visible)
  }
  function handleAnketa() {

    setVisible(!visible)
  }

  return (
    <>
      <Button type="primary" style={{ display: visible ? 'none' : 'inline' }} onClick={handleAnketa}>
        Подобрать
        </Button>
      {visible && <div className='container-form anketa'>
        <div className='text-box'>
          <div className='text-title'>Каое животное ты ищешь?</div>
          <div className='img-div'>
            <div>
              <label for='1'>
                <input className='radio' style={{ visibility: 'hidden' }} id='1' value='dogs' onClick={handleActive} name='1' type='radio' />
                <img className='img-anceta' src='http://sobaki.pro/img/K1001/Large/210-0112-9318-K-Azia.jpg' />
                <div>собака</div>
              </label>
            </div>
            <div>
              <label for='2'>
                <input className="radio" style={{ visibility: 'hidden' }} id='2' name='1' value='cats' onClick={handleActive} type='radio' />
                <img className='img-anceta' src='https://avatars.mds.yandex.net/get-pdb/1366542/5b7db9cf-b146-4275-87d8-a11dc6b56487/s1200' />
                <div>кошка</div>
              </label>
            </div>
            <div>
              <label for='3'>
                <input className="radio" style={{ visibility: 'hidden' }} id='3' name='1' value='otheranimals' onClick={handleActive} type='radio' />
                <img className='img-anceta' src='https://avatars.mds.yandex.net/get-pdb/2147572/3449d4f5-c01c-43ab-8995-0dce63861b58/s1200?webp=false' />
                <div>другое</div>
              </label>
            </div>
          </div>
          <div className='text-title'>ты возьмешь маленького или взрослого питомца</div>
          <div className='img-div'>
            <div>
              <label for='4'>
                <input className='radio' style={{ visibility: 'hidden' }} id='4' value='0-1' onClick={handleActive} name='3' type='radio' />
                <img className='img-anceta' src='https://avatars.mds.yandex.net/get-pdb/1649566/57877c2b-7314-4e5f-b7e8-14826d8d3b76/s1200?webp=false' />
                <div>маленького</div>
              </label>
            </div>
            <div>
              <label for='5'>
                <input className='radio' style={{ visibility: 'hidden' }} id='5' name='3' value={'1-3' || "3-7" || "7-999"} onClick={handleActive} type='radio' />
                <img className='img-anceta' src='https://cdn1.lockerdome.com/uploads/db3ad97fe20d263f40e1765e741b0794b048a87bac8f5a3aae77978da1f57982_facebook' />
                <div>взрослого</div>
              </label>
            </div>
          </div>
          <div>Пол животного</div>
          <div className='img-div'>
            <div>
              <label for='7'>
                <input className='radio' style={{ visibility: 'hidden' }} id='7' value='девочка' onClick={handleActive} name='4' type='radio' />
                <img className='img-anceta' src='https://img.welt.de/img/wissenschaft/umwelt/mobile146299618/0912502047-ci102l-w1024/Bonobo-2.jpg' />
                <div>самка</div>
              </label>
            </div>
            <div>
              <label for='8'>
                <input className='radio' style={{ visibility: 'hidden' }} id='8' name='4' value='мальчик' onClick={handleActive} type='radio' />
                <img className='img-anceta' src='https://i.sunhome.ru/journal/41/samci-v2.orig.jpg' />
                <div>самец</div>
              </label>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}
