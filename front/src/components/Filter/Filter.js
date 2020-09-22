import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Select, Form, Button } from 'antd';
import 'antd/dist/antd.css';
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

const { Option } = Select;

function Filter({visible}) {

  const [category, setCategory] = useState()
  const dispatch = useDispatch()
  const animalsFromState = useSelector((state) => state.animals.animals)
  const filters = useSelector((state) => state.animals.filters)


  let animalCategory = animalsFromState[filters.category]

  for (let animal in animalCategory) {
    if (String(animalCategory[animal].pay) === filters.pay) {
      console.log('pay filter', animalCategory[animal])
    }
  }

  useEffect(() => {
    dispatch(startAnimals())
  }, [])

  function chooseCategory(value) {
    setCategory(value)
    dispatch(setAnimalCategory(value))
  }

  function choosePay(value) {
    dispatch(paymentFilter(value))
  }

  function chooseAge(value) {
    dispatch(ageFilter(value))
  }

  function choosePrice(value) {
    dispatch(priceFilter(value))
  }

  function chooseGender(value) {
    dispatch(genderFilter(value))
  }

  function chooseHaired(value) {
    dispatch(hairFilter(value))
  }

  function chooseWar(value) {
    dispatch(warFilter(value))
  }

  function chooseWeight(value) {
    dispatch(weightFilter(value))
  }

  function chooseGuide(value) {
    dispatch(guideFilter(value))
  }

  function chooseSuffer(value) {
    dispatch(sufferFilter(value))
  }

  function chooseCondition(value) {
    dispatch(conditionFilter(value))
  }

  function chooseApartment(value) {
    dispatch(apartmentFilter(value))
  }

  function chooseChildren(value) {
    dispatch(childrenFilter(value))
  }

  function filter() {
    let category = animalsFromState[filters.category]
   console.log('before',visible) 
   visible = false
   console.log(visible) 


    for (let animal in category) {
      if (String(category[animal].pay) === filters.pay) {
        console.log('if',category[animal])
      }
    }
  }

  return (
    <>
      <Form onFinish={filter}>
        <Form.Item name='Category'>
          <Select defaultValue="Category" style={{ width: 120 }} onChange={chooseCategory}>
            <Option value="cats">Cats</Option>
            <Option value="dogs">Dogs</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        {' '}
        <Form.Item name='Pay'>
          <Select
            disabled={category ? false : true}
            defaultValue="Pay"
            style={{ width: 120 }}
            onChange={choosePay}>
            <Option value="true">True</Option>
            <Option value="false">False</Option>
          </Select>
        </Form.Item>
        {' '}
        <Form.Item name='Age'>
          <Select
            disabled={category ? false : true}
            defaultValue="Age"
            style={{ width: 120 }}
            onChange={chooseAge}>
            <Option value="1">0-1</Option>
            <Option value="1-3">1-3</Option>
            <Option value="3-7">3-7</Option>
          </Select>
        </Form.Item>
        {' '}
        <Form.Item name='Price'>
          <Select
            disabled={category ? false : true}
            defaultValue="Price"
            style={{ width: 120 }}
            onChange={choosePrice}>
            <Option value="0-1000">0-1000</Option>
            <Option value="1000-5000">1000-5000</Option>
            <Option value="5000-10000">5000-10000</Option>
            <Option value="10000-999999"> &gt;10000</Option>
          </Select>
        </Form.Item>
        {' '}
        <Form.Item name='Gender'>
          <Select
            disabled={category ? false : true}
            defaultValue="Gender"
            style={{ width: 120 }}
            onChange={chooseGender}>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>
        </Form.Item>
        {' '}
        <Form.Item name='LongHaired'>
          <Select
            disabled={category ? false : true}
            defaultValue="LongHaired"
            style={{ width: 120 }}
            onChange={chooseHaired}>
            <Option value='true'>true</Option>
            <Option value='false'>false</Option>
          </Select>
        </Form.Item>
        {' '}
        <Form.Item name='WarDog'>
          <Select
            disabled={category ? false : true}
            defaultValue="WarDog"
            style={{ width: 120 }}
            onChange={chooseWar}>
            <Option value='true'>true</Option>
            <Option value='false'>false</Option>
          </Select>
        </Form.Item>
        {' '}
        <Form.Item name='Weight'>
          <Select
            disabled={category ? false : true}
            defaultValue="Weight"
            style={{ width: 120 }}
            onChange={chooseWeight}>
            <Option value='0-10'>0-10</Option>
            <Option value='10-25'>10-25</Option>
            <Option value='25-50'>25-50</Option>
            <Option value='50-100'>50-100</Option>
          </Select>
        </Form.Item>
        {' '}
        <Form.Item name='Guide'>
          <Select
            disabled={category ? false : true}
            defaultValue="Guide"
            style={{ width: 120 }}
            onChange={chooseGuide}>
            <Option value='true'>true</Option>
            <Option value='false'>false</Option>
          </Select>
        </Form.Item>
        {' '}
        <Form.Item name='Suffer'>
          <Select
            disabled={category ? false : true}
            defaultValue="Suffer"
            style={{ width: 120 }}
            onChange={chooseSuffer}>
            <Option value='true'>true</Option>
            <Option value='false'>false</Option>
          </Select>
        </Form.Item>
        {' '}
        <Form.Item name='Condition'>
          <Select
            disabled={category ? false : true}
            defaultValue="Condition"
            style={{ width: 120 }}
            onChange={chooseCondition}>
            <Option value='true'>true</Option>
            <Option value='false'>false</Option>
          </Select>
        </Form.Item>
        {' '}
        <Form.Item name='Apartment'>
          <Select
            disabled={category ? false : true}
            defaultValue="Apartment"
            style={{ width: 120 }}
            onChange={chooseApartment}>
            <Option value='true'>true</Option>
            <Option value='false'>false</Option>
          </Select>
        </Form.Item>
        {' '}
        <Form.Item name='Children'>
          <Select
            disabled={category ? false : true}
            defaultValue="Children"
            style={{ width: 120 }}
            onChange={chooseChildren}>
            <Option value='true'>true</Option>
            <Option value='false'>false</Option>
          </Select>
        </Form.Item>

          <Form.Item name='Category'>
            <Select defaultValue="Category" style={{ width: 120 }} onChange={chooseCategory}>
              <Option value="cats">Cats</Option>
              <Option value="dogs">Dogs</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          {' '}
          <Form.Item name='Pay'>
            <Select
              // disabled={category ? false : true}
              defaultValue="Pay"
              style={{ width: 120 }}
              onChange={choosePay}>
              <Option value="true">True</Option>
              <Option value="false">False</Option>
            </Select>
          </Form.Item>
          {' '}
          <Form.Item name='Age'>
            <Select
              // disabled={category ? false : true}
              defaultValue="Age"
              style={{ width: 120 }}
              onChange={chooseAge}>
              <Option value="1">0-1</Option>
              <Option value="1-3">1-3</Option>
              <Option value="3-7">3-7</Option>
            </Select>
          </Form.Item>
          {' '}
          <Form.Item name='Price'>
            <Select
              // disabled={category ? false : true}
              defaultValue="Price"
              style={{ width: 120 }}
              onChange={choosePrice}>
              <Option value="0-1000">0-1000</Option>
              <Option value="1000-5000">1000-5000</Option>
              <Option value="5000-10000">5000-10000</Option>
              <Option value="10000-999999"> &gt;10000</Option>
            </Select>
          </Form.Item>
          {' '}
          <Form.Item name='Gender'>
            <Select
              // disabled={category ? false : true}
              defaultValue="Gender"
              style={{ width: 120 }}
              onChange={chooseGender}>
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>
          {' '}
          <Form.Item name='LongHaired'>
            <Select
              // disabled={category ? false : true}
              defaultValue="LongHaired"
              style={{ width: 120 }}
              onChange={chooseHaired}>
              <Option value='true'>true</Option>
              <Option value='false'>false</Option>
            </Select>
          </Form.Item>
          {' '}
          <Form.Item name='WarDog'>
            <Select
              // disabled={category ? false : true}
              defaultValue="WarDog"
              style={{ width: 120 }}
              onChange={chooseWar}>
              <Option value='true'>true</Option>
              <Option value='false'>false</Option>
            </Select>
          </Form.Item>
          {' '}
          <Form.Item name='Weight'>
            <Select
              // disabled={category ? false : true}
              defaultValue="Weight"
              style={{ width: 120 }}
              onChange={chooseWeight}>
              <Option value='0-10'>0-10</Option>
              <Option value='10-25'>10-25</Option>
              <Option value='25-50'>25-50</Option>
              <Option value='50-100'>50-100</Option>
            </Select>
          </Form.Item>
          {' '}
          <Form.Item name='Guide'>
            <Select
              // disabled={category ? false : true}
              defaultValue="Guide"
              style={{ width: 120 }}
              onChange={chooseGuide}>
              <Option value='true'>true</Option>
              <Option value='false'>false</Option>
            </Select>
          </Form.Item>
          {' '}
          <Form.Item name='Suffer'>
            <Select
              // disabled={category ? false : true}
              defaultValue="Suffer"
              style={{ width: 120 }}
              onChange={chooseSuffer}>
              <Option value='true'>true</Option>
              <Option value='false'>false</Option>
            </Select>
          </Form.Item>
          {' '}
          <Form.Item name='Condition'>
            <Select
              // disabled={category ? false : true}
              defaultValue="Condition"
              style={{ width: 120 }}
              onChange={chooseCondition}>
              <Option value='true'>true</Option>
              <Option value='false'>false</Option>
            </Select>
          </Form.Item>
          {' '}
          <Form.Item name='Apartment'>
            <Select
              // disabled={category ? false : true}
              defaultValue="Apartment"
              style={{ width: 120 }}
              onChange={chooseApartment}>
              <Option value='true'>true</Option>
              <Option value='false'>false</Option>
            </Select>
          </Form.Item>
          {' '}
          <Form.Item name='Children'>
            <Select
              // disabled={category ? false : true}
              defaultValue="Children"
              style={{ width: 120 }}
              onChange={chooseChildren}>
              <Option value='true'>true</Option>
              <Option value='false'>false</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit

            </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Filter
