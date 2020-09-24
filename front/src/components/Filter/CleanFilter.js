import React from 'react'
import { Button } from 'antd'
import {useDispatch} from 'react-redux'
import {startAnimals} from '../../redux/actions'


function CleanFilter() {
  const dispatch = useDispatch()
  
  function clean (){
    window.localStorage.removeItem('redux');
    // dispatch(startAnimals())
  }

  return (<>
    <Button type="primary" onClick={clean}>
      Сбросить Фильтры
    </Button>
    <br/>
    <br/>
  </>)
}

export default CleanFilter