import React, { useState } from 'react';

function NewDogForm() {
  // async function login(event) {
  //   event.preventDefault();
  //   const response = await fetch('/api/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ inputs }),
  //   });
  //   const resp = await response.json();
  //   if (response.status === 200) {
  //     return history.push('/pokemons');
  //   }
  //   return setError('Попробуйте еще раз');
  // }
  const [inputs, setInputs] = useState({
    kind: '',
    nickname: '',
    description: '',
    age: '',
    age: null,
    pay: false,
    price: null,
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

  function addAnimal() {

  }

  return (
    <>
      <form onSubmit={addAnimal} enctype="multipart/form-data">
        <label htmlFor="kind">Порода:
          <select name="kind" onChange={changed} value={inputs.kind}>
            <option value="Сенбернар">Сенбернар</option>
            <option value="Дог">Дог</option>
            <option value="Беспородная">Беспородная</option>
            <option value="Иное">Иное</option>
          </select>
        </label>

        <label htmlFor="nickname">Кличка:
          <input id="nickname" type="text" name="nickname" required value={inputs.nickname} onChange={changed} />
        </label>

        <label htmlFor="description">Oписание
          <textarea id="description" type="text" name="description" required onChange={changed}>{inputs.description}</textarea>
        </label>

        <label htmlFor="age">Возраст:
          <input id="age" type="number" name="age" required value={inputs.age} onChange={changed} />
        </label>

        <label htmlFor="pay">Даром:
        <input type="checkbox" checked={inputs.pay} onChange={changed} />
        </label>

        <label htmlFor="price">Цена:
          <input id="price" type="number" name="price" required value={inputs.price} onChange={changed} />
        </label>

        <label htmlFor="adultSize">Размер взрослого животного:
          <select name="adultSize" onChange={changed} value={inputs.adultSize}>
            <option value="очень маленькое (хомяк и меньше)">очень маленькое (хомяк и меньше)</option>
            <option value="маленькое (кошка)">маленькое (кошка)</option>
            <option value="среднее (бульдог)">среднее (бульдог)</option>
            <option value="большое (сенбернар)">большое (сенбернар)</option>
            <option value="очень больше (лошадь и больше)">очень большое (лошадь и более)</option>
          </select>
        </label>

        <label htmlFor="adultweight">  Вес взрослого животного:
          <input id="adultweight" type="text" name="adultweight" required value={inputs.adultweight} onChange={changed} />
        </label>

        <label htmlFor="possibleForAllergySufferers">Хороший вариант для аллергиков:
        <input type="checkbox" checked={inputs.possibleForAllergySufferers} onChange={changed} />
        </label>
        <label htmlFor="longHaired">Длинношерстное:
        <input type="checkbox" checked={inputs.longHaired} onChange={changed} />
        </label>
        <label htmlFor="guideВog">Собака-поводырь:
        <input type="checkbox" checked={inputs.guideВog} onChange={changed} />
        </label>
        <label htmlFor="warDog">Служебная собака:
        <input type="checkbox" checked={inputs.warDog} onChange={changed} />
        </label>
        <label htmlFor="onlyInNonApartments">Только в не квартиры:
        <input type="checkbox" checked={inputs.onlyInNonApartments} onChange={changed} />
        </label>
        <label htmlFor="specialConditionsOfDetention">Специальные условия содержания:
        <input type="checkbox" checked={inputs.specialConditionsOfDetention} onChange={changed} />
        </label>
        <label htmlFor="childrenInTheHouse">Дети в домеаром:
        <input type="checkbox" checked={inputs.childrenInTheHouse} onChange={changed} />
        </label>

        <label htmlFor="photo">Загрузите фотографии собаки
          <input type="file" name="photo" id="photo" multiple accept="image/*,image/jpeg" required value={inputs.photo} onChange={changed} />
          <button type="submit">Оправить</button>
        </label>

        <button type="submit">Занести в базу животных</button>
        {error && <div className="error">{error}</div>}
      </form>

      {/* <form onSubmit={addPhotosAnimal} enctype="multipart/form-data" >
      
      </form> */}
    </>
  )
}

export default NewDogForm;
