import React,{useState} from "react"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useDispatch, useSelector } from 'react-redux';
import {Button} from 'antd';
import { makeStyles } from '@material-ui/core/styles';

import {
  startAnimals,
  setAnimalCategory,
  paymentFilter,
  ageFilter,
  priceFilter,
  genderFilter,
  hairFilter,
  weightFilter,
  warFilter,
  guideFilter,
  sufferFilter,
  conditionFilter,
  apartmentFilter,
  childrenFilter
} from '../../redux/actions'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));




export default function Anketa(){
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
      case 'female':
        dispatch(genderFilter(key))
        break;
      case 'male':
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
        dispatch(ageFilter(key))
        break;
      case '3-7':
        dispatch(ageFilter(key))
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
      case 'есть':
        dispatch(sufferFilter(true))
        break;
      case 'нет':
        dispatch(sufferFilter(false))
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
        <Button type="primary" style={{display: visible ? 'none' :'inline' }} onClick={handleAnketa}>
        Подобрать
        </Button>
        <div className='container-form' style={{display: visible ? 'block' : 'none'}}>
            <div className='text-box'>
              <div className='text-title'>Каое животное ты ищешь?</div>
            <div className='img-div'>
              <div>
                  <label for='1'>
                  <input className='radio' style={{visibility: 'hidden'}} id='1' value='dogs' onClick={handleActive} name='1' type='radio'/>
                  <img className='img-anceta' src='http://sobaki.pro/img/K1001/Large/210-0112-9318-K-Azia.jpg' />
                  <div>собака</div>
                  </label>
              </div>
              <div>
                  <label for='2'>
                  <input className="radio" style={{visibility: 'hidden'}} id='2' name='1' value='cats' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'   src='https://avatars.mds.yandex.net/get-pdb/1366542/5b7db9cf-b146-4275-87d8-a11dc6b56487/s1200' />
                  <div>кошка</div>
                  </label>
              </div>
              <div>
                  <label for='3'>
                  <input className="radio" style={{visibility: 'hidden'}} id='3' name='1' value='otheranimals' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'   src='https://avatars.mds.yandex.net/get-pdb/2147572/3449d4f5-c01c-43ab-8995-0dce63861b58/s1200?webp=false' />
                  <div>другое</div>
                  </label>
              </div>
            </div>

            {/* <div>хочешь ли ты, чтобы животное было экзотическое?</div>
            <div className='img-div'>
              <div>
                  <label for='4'>
                  <input className='radio' style={{visibility: 'hidden'}} id='4' value='dog' onClick={handleActive} name='2' type='radio'/>
                  <img className={active? 'img-anceta' : 'img-anceta active'}  src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>экзотическое</div>
                  </label>
                </div>
                <div>
                  <label for='5'>
                  <input className='radio' style={{visibility: 'hidden'}} id='5' name='2' value='cat' onClick={handleActive} type='radio'/>
                  <img className={active? 'img-anceta' : 'img-anceta active'}   src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>не экзотическое</div>
                  </label>
              </div>
            </div> */}

            <div className='text-title'>ты возьмешь маленького или взрослого питомца</div>
            <div className='img-div'>
              <div>
                  <label for='4'>
                  <input className='radio' style={{visibility: 'hidden'}} id='4' value='0-1' onClick={handleActive} name='3' type='radio'/>
                  <img className='img-anceta'   src='https://avatars.mds.yandex.net/get-pdb/1649566/57877c2b-7314-4e5f-b7e8-14826d8d3b76/s1200?webp=false' />
                  <div>маленького</div>
                  </label>
                </div>
                <div>
                  <label for='5'>
                  <input className='radio' style={{visibility: 'hidden'}} id='5' name='3' value='3-7' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'    src='https://cdn1.lockerdome.com/uploads/db3ad97fe20d263f40e1765e741b0794b048a87bac8f5a3aae77978da1f57982_facebook' />
                  <div>взрослого</div>
                  </label>
              </div>
            </div>

            <div>Пол животного</div>
            <div className='img-div'>
              <div>
                  <label for='7'>
                  <input className='radio' style={{visibility: 'hidden'}} id='7' value='female' onClick={handleActive} name='4' type='radio'/>
                  <img className='img-anceta'   src='https://img.welt.de/img/wissenschaft/umwelt/mobile146299618/0912502047-ci102l-w1024/Bonobo-2.jpg' />
                  <div>самка</div>
                  </label>
                </div>
                <div>
                  <label for='8'>
                  <input className='radio' style={{visibility: 'hidden'}} id='8' name='4' value='male' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'    src='https://i.sunhome.ru/journal/41/samci-v2.orig.jpg' />
                  <div>самец</div>
                  </label>
              </div>
            </div>

            <div className='text-title'>где будет жить питомец</div>
            <div className='img-div'>
              <div>
                  <label for='9'>
                  <input className='radio' style={{visibility: 'hidden'}} id='9' value='квартира' onClick={handleActive} name='5' type='radio'/>
                  <img className='img-anceta'   src='https://om-saratov.ru/files/pages/55720/1512477549general_pages_05_december_2017_i55720_saratovskii_zastroishchik.jpg' />
                  <div>квартира</div>
                  </label>
                </div>
                <div>
                  <label for='10'>
                  <input className='radio' style={{visibility: 'hidden'}} id='10' name='5' value='дом' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'    src='https://miriadagroup.ru/wp-content/uploads/2017/05/orlovka_05_Post_resize-1333x1000.jpg' />
                  <div>дом</div>
                  </label>
              </div>
                <div>
                  <label for='11'>
                  <input className='radio' style={{visibility: 'hidden'}} id='11' name='5' value='специальные условия' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'    src='https://images.ru.prom.st/584715521_w640_h640_voler-kletka-dlya.jpg' />
                  <div>специальные условия</div>
                  </label>
              </div>
            </div>
            <div className='text-title'>Какого размера будет животное когда вырастет</div>
            <div className='img-div'>
              <div>
                  <label for='12'>
                  <input className='radio' style={{visibility: 'hidden'}} id='12' value='0-10' onClick={handleActive} name='6' type='radio'/>
                  <img className='img-anceta'  src='https://i.ucrazy.ru/files/pics/2016.01/zabavnieeopposum1.jpg' />
                  <div>маленькое</div>
                  </label>
                </div>
                <div>
                  <label for='13'>
                  <input className='radio' style={{visibility: 'hidden'}} id='13' name='6' value='10-25' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'   src='http://mywishlist.ru/pic/i/wish/orig/009/795/310.jpeg' />
                  <div>среднее</div>
                  </label>
              </div>
                <div>
                  <label for='14'>
                  <input className='radio' style={{visibility: 'hidden'}} id='14' name='6' value='25-50' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'   src='https://mtdata.ru/u15/photo5AE3/20579548563-0/original.jpg' />
                  <div>большое</div>
                  </label>
              </div>
            </div>
            <div className='text-title'>Есть ли у тебя или членов твоей семьи аллергия на животных</div>
            <div className='img-div'>
              <div>
                  <label for='15'>
                  <input className='radio' style={{visibility: 'hidden'}} id='15' value='есть' onClick={handleActive} name='7' type='radio'/>
                  <img className='img-anceta'  src='https://www.zg66.ru/images/2019/12/03/allergia.jpg' />
                  <div>есть</div>
                  </label>
                </div>
                <div>
                  <label for='16'>
                  <input className='radio' style={{visibility: 'hidden'}} id='16' name='7' value='нет' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'   src='https://laralitvinova.ru/wp-content/uploads/2019/12/wallpapersden.com_jim-carrey-smile-images_2048x1152.jpg' />
                  <div>нет</div>
                  </label>
              </div>
            </div>
            
            <div className='form-button'>
               <Button variant="outlined" onClick={handleSubmit} color="inherit">Подобрать</Button> 
            </div>
            
            </div>

        </div>
        </>
    )
}