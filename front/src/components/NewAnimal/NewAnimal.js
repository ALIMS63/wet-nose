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
      <form onSubmit={whatAnimal}>
        <label htmlFor="bigType">Тип животного:
          <select name="bigType" onChange={changed} value={bigTypeInput}>
            <option value="Собака">Собака</option>
            <option value="Кот">Кот</option>
            <option value="Иное">Иное</option>
          </select>
          <button type="submit">Занести в базу животных</button>
          {error && <div className="error">{error}</div>}
        </label>
      </form>
      <NewDogForm />
    </>
  )
}

export default NewAnimal;
