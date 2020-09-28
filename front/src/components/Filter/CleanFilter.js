import React from 'react'
import { Button } from 'antd'
import {useDispatch} from 'react-redux'
import {cleanFilters} from '../../redux/actions'
import store from '../../redux/store'


function CleanFilter() {
  const dispatch = useDispatch()
  
  function clean (){
    // window.localStorage.removeItem('redux', JSON.stringify(store.getState().animals.filters));
    dispatch(cleanFilters())
    document.location.reload()
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