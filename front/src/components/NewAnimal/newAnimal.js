import React from 'react';
import NewDogForm from './newDogForm';

function NewAnimal() {
  const [bigTypeInput, setbigTypeInput] = useState('');
  const [error, setError] = useState(false);
  function changed({ target: { value } }) {
    setInputs(value);
  }

  return (
    <>
      <form onSubmit={whatAnimal}>
        <label htmlFor="bigType">Тип животного:
          <select name="bigType" onChange={changed} value={inputs.adultSize}>
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
