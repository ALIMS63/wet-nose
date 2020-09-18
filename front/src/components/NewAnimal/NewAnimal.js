import React, { useState } from 'react';
import NewDogForm from './NewDogForm';

function NewAnimal() {
  const [bigTypeInput, setbigTypeInput] = useState('');
  const [error, setError] = useState(false);
  function changed({ target: { value } }) {
    setbigTypeInput(value);
  }

  function whatAnimal() {

  }

  return (
    <>
     <br />
      <form onSubmit={whatAnimal}>
        <label htmlFor="bigType">Тип животного:
          <select name="bigType" onChange={changed} value={bigTypeInput}>
            <option value="Собака">Собака</option>
            <option value="Кот">Кот</option>
            <option value="Иное">Иное</option>
          </select>
          {error && <div className="error">{error}</div>}
        </label>
      </form>
      <br />
      <NewDogForm />
    </>
  )
}

export default NewAnimal;
