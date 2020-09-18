import React, { useState } from 'react';
import './newForms.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'

function NewDogForm() {
  const [inputs, setInputs] = useState({
    kind: '',
    nickname: '',
    description: '',
    age: '',
    age: '',
    pay: false,
    price: '',
    adultSize: '',
    adultweight: '',
    possibleForAllergySufferers: false,
    longHaired: false,
    guideВog: false,
    warDog: false,
    onlyInNonApartments: false,
    specialConditionsOfDetention: false,
    childrenInTheHouse: false,
    photo: '',
  });

  const [error, setError] = useState(false);

  function changed({ target: { value, name } }) {
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function fooCheckbox({ target: { name } }) {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: !prevInputs[name],
    }));
}

function addAnimal() {

}

return (
  <>
    <form className="addForm" onSubmit={addAnimal} encType="multipart/form-data" style={{ display: "flex", flexWrap: "wrap" }}>
      <label className="input" htmlFor="kind">Порода:
        <br />
        <select name="kind" onChange={changed} value={inputs.kind}>
          <option value="Сенбернар">Сенбернар</option>
          <option value="Дог">Дог</option>
          <option value="Беспородная">Беспородная</option>
          <option value="Иное">Иное</option>
        </select>
      </label>
      {/* <br /> */}
      <label className="input" htmlFor="nickname">Кличка:
        <br />
        <input id="nickname" type="text" name="nickname" required value={inputs.nickname} onChange={changed} />
      </label>
      <br />
      <label className="input" htmlFor="description">Oписание:
        <br />
        <textarea rows="8" cols="52" id="description" type="text" name="description" required onChange={changed} value={inputs.description}></textarea>
      </label>

      <label className="input" htmlFor="age">Возраст:
        <br />
        <input id="age" type="number" name="age" required value={inputs.age} onChange={changed} />
      </label>

      <label className="input" htmlFor="pay">Даром:
        <br />
        <input name="pay" type="checkbox" checked={inputs.pay} onChange={fooCheckbox} />
      </label>

      <label className="input" htmlFor="price">Цена:
        <br />
        <input id="price" type="number" name="price" required value={inputs.price} onChange={changed} />
      </label>

      <label className="input" htmlFor="adultSize">Размер взрослого животного:
        <br />
        <select name="adultSize" onChange={changed} value={inputs.adultSize}>
          <option value="очень маленькое (хомяк и меньше)">очень маленькое (хомяк и меньше)</option>
          <option value="маленькое (кошка)">маленькое (кошка)</option>
          <option value="среднее (бульдог)">среднее (бульдог)</option>
          <option value="большое (сенбернар)">большое (сенбернар)</option>
          <option value="очень больше (лошадь и больше)">очень большое (лошадь и более)</option>
        </select>
      </label>

      <label className="input" htmlFor="adultweight">  Вес взрослого животного:
        <br />
        <input id="adultweight" type="text" name="adultweight" required value={inputs.adultweight} onChange={changed} />
      </label>

      <label className="checkbox" htmlFor="possibleForAllergySufferers">Хороший вариант для аллергиков:
        <input name="possibleForAllergySufferers" type="checkbox" checked={inputs.possibleForAllergySufferers} onChange={fooCheckbox} />
      </label>
      <label className="checkbox" htmlFor="longHaired">Длинношерстное:
        <input name="longHaired" type="checkbox" checked={inputs.longHaired} onChange={fooCheckbox} />
      </label>
      <label className="checkbox" htmlFor="guideВog">Собака-поводырь:
        <input name="guideВog" type="checkbox" checked={inputs.guideВog} onChange={fooCheckbox} />
      </label>
      <label className="checkbox" htmlFor="warDog">Служебная собака:
        <input name="warDog" type="checkbox" checked={inputs.warDog} onChange={fooCheckbox} />
      </label>
      <label className="checkbox" htmlFor="onlyInNonApartments">Только в не квартиры:
        <input name="onlyInNonApartments" type="checkbox" checked={inputs.onlyInNonApartments} onChange={fooCheckbox} />
      </label>
      <label className="checkbox" htmlFor="specialConditionsOfDetention">Специальные условия содержания:
        <input name="specialConditionsOfDetention" type="checkbox" checked={inputs.specialConditionsOfDetention} onChange={fooCheckbox} />
      </label>
      <label className="checkbox" htmlFor="childrenInTheHouse">Дети в доме:
        <input name="childrenInTheHouse" type="checkbox" checked={inputs.childrenInTheHouse} onChange={fooCheckbox} />
      </label>



      <label htmlFor="photo">Загрузите фотографии собаки: {' '}
        <input type="file" name="photo" id="photo" multiple accept="image/*,image/jpeg" required value={inputs.photo} onChange={changed} />
      </label>
      <br /><br />
      <button type="submit">Занести в базу животных</button>
      <br /><br />
      {error && <div className="error">{error}</div>}

    </form>

    {/* <form onSubmit={addPhotosAnimal} enctype="multipart/form-data" >
      
      </form> */}
  </>
)
}

export default NewDogForm;
