import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Select, Form, Row, Col, Space } from 'antd';
// import Filter from './Filter'
import { useDispatch, useSelector } from 'react-redux'
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


function ModalFilter() {
  const [visible, setVisible] = useState(false)

  const dispatch = useDispatch()
  const animalsFromState = useSelector((state) => state.animals.animals)
  const filters = useSelector((state) => state.animals.filters)

  function showModal() {
    setVisible(true)
  };

  let animalCategory = animalsFromState[filters.category]

  for (let animal in animalCategory) {
    if (String(animalCategory[animal].pay) === filters.pay) {
      console.log('pay filter', animalCategory[animal])
    }
  }

  useEffect(() => {
    dispatch(startAnimals())
  }, [dispatch])

  function handleCancel() {
    setVisible(false)
  };

  function chooseCategory(value) {
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

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Фильтры
        </Button>
      <br />
      <br />
      <Modal
        title="Find Your Animal"
        visible={visible}
        footer={null}
        visible={visible}
        onCancel={handleCancel}
      >
        <>
          <Form>
            <Row>
              <Space>
                <Form.Item name='Category' label='Животное'>
                  <Col span={12}>
                    <Select
                      defaultValue=''
                      style={{ width: 120 }}
                      onChange={chooseCategory}>
                      <Option value="cats">Кошка</Option>
                      <Option value="dogs">Собака</Option>
                      <Option value="other">Другое</Option>
                    </Select>
                  </Col>
                </Form.Item>
                {' '}
                <Form.Item name='Pay' label='Оплата'>
                  <Col span={12}>
                    <Select
                      defaultValue=''
                      style={{ width: 120 }}
                      onChange={choosePay}>
                      <Option value="true">Платно</Option>
                      <Option value="false">Бесплатно</Option>
                    </Select>
                  </Col>
                </Form.Item>
              </Space>
            </Row>
            {' '}
            <Row>
              <Space>
                <Form.Item name='Age' label='Возраст'>
                  <Col span={12}>
                    <Select
                      defaultValue=''
                      style={{ width: 120 }}
                      onChange={chooseAge}>
                      <Option value="0-1">0-1</Option>
                      <Option value="1-3">1-3</Option>
                      <Option value="3-7">3-7</Option>
                      <Option value="7-999">больше 7</Option>
                    </Select>
                  </Col>
                </Form.Item>
                {' '}
                <Form.Item name='Price' label='Стоимость'>
                  <Col span={12}>
                    <Select
                      defaultValue=''
                      style={{ width: 120 }}
                      onChange={choosePrice}>
                      <Option value="0-1000">0-1000</Option>
                      <Option value="1000-5000">1000-5000</Option>
                      <Option value="5000-10000">5000-10000</Option>
                      <Option value="10000-999999"> &gt;10000</Option>
                    </Select>
                  </Col>
                </Form.Item>
              </Space>
            </Row>

            {' '}
            {/* <Row>
              <Space> */}
            <Form.Item name='Gender' label='Пол'>
              <Col span={12}>
                <Select
                  defaultValue=''
                  style={{ width: 120 }}
                  onChange={chooseGender}>
                  <Option value="мальчик">Муж</Option>
                  <Option value="девочка">Жен</Option>
                </Select>
              </Col>
            </Form.Item>
            {' '}
            {/* <Form.Item name='LongHaired' label='Длинношерстность'>
                  <Col span={12}>
                    <Select
                      style={{ width: 120 }}
                      onChange={chooseHaired}>
                      <Option value='true'>Длинная</Option>
                      <Option value='false'>Короткая</Option>
                    </Select>
                  </Col>
                </Form.Item>
              </Space>
            </Row> */}
            {' '}
            {/* <Row>
              <Space>
                <Form.Item name='WarDog' label='Бойцовское животное'>
                  <Col span={12}>
                    <Select
                      style={{ width: 120 }}
                      onChange={chooseWar}>
                      <Option value='true'>Да</Option>
                      <Option value='false'>Нет</Option>
                    </Select>
                  </Col>
                </Form.Item>
                {' '}
                <Form.Item name='Weight' label='Вес'>
                  <Col span={12}>
                    <Select
                      style={{ width: 120 }}
                      onChange={chooseWeight}>
                      <Option value='0-10'>0-10кг</Option>
                      <Option value='10-25'>10-25кг</Option>
                      <Option value='25-50'>25-50кг</Option>
                      <Option value='50-100'>50-100кг</Option>
                    </Select>
                  </Col>
                </Form.Item>
              </Space>
            </Row> */}
            {' '}
            {/* <Row>
              <Space>
                <Form.Item name='Children' label='Для детей'>
                  <Col span={12}>
                    <Select
                      style={{ width: 120 }}
                      onChange={chooseChildren}>
                      <Option value='true'>Подходит</Option>
                      <Option value='false'>Не рекомендуется</Option>
                    </Select>
                  </Col>
                </Form.Item>
                {' '}
                <Form.Item name='Suffer' label='Аллергии'>
                  <Col span={12}>
                    <Select
                      style={{ width: 120 }}
                      onChange={chooseSuffer}>
                      <Option value='true'>Есть</Option>
                      <Option value='false'>Незначительно</Option>
                    </Select>
                  </Col>
                </Form.Item>
              </Space>
            </Row> */}
            {' '}
            {/* <Row >
              <Space>
                <Form.Item name='Condition' label='Condition'>
                  <Col span={12}>
                    <Select
                      style={{ width: 120 }}
                      onChange={chooseCondition}>
                      <Option value='true'>true</Option>
                      <Option value='false'>false</Option>
                    </Select>
                  </Col>
                </Form.Item>
                {' '}
                <Form.Item name='Apartment' label='Содержание в квратире'>
                  <Col span={12}>
                    <Select
                      style={{ width: 120 }}
                      onChange={chooseApartment}>
                      <Option value='true'>Подходит</Option>
                      <Option value='false'>Не рекомендуется</Option>
                    </Select>
                  </Col>
                </Form.Item>
              </Space>
            </Row> */}
            {' '}
          </Form>
        </>
      </Modal>
    </>
  );
}

export default ModalFilter
