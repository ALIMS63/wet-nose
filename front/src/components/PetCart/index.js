import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
//import img from '../../img/1.jpg'

 export default function PetCart(){
    const [modal, setModal] = useState(false)
    const [btnStat, setBtnStat] = useState(true)
    
    const data =  useSelector(state => state.animals).animals
    
    const animalType = Object.keys(data)
    const Animals = data[animalType[0]]
    
   
    
    
    
export default function PetCart() {
  const [modal, setModal] = useState(false)
  const [btnStat, setBtnStat] = useState(true)

  const data = useSelector(state => state.animals).animals
  console.log('......', data);
  const animalType = Object.keys(data)
  const Animals = data[animalType[0]];



  function handlePetInfo() {
    setModal(!modal)
    setBtnStat(!btnStat)
  }

  return (
    <>
      {Animals ? Animals.map(animal => (
        <div className='container-1'>
          <div className='pet-content'>
            <img className='pet-img' src={animal.photo[0]} />
            <div className='textContainer'>


              <h3>nickname:{animal.nickname}  </h3>
              <div className='content-text'>
                <p>{animal.kind}</p>
                <p>возраст:{animal.age} </p>
                <p>{animal.description}</p>

              </div>
              <a onClick={handlePetInfo} className='pet-link'>{btnStat ? 'подробнее' : 'свернуть'}</a>
            </div>
            {modal ?
              <div className='textContainer moreDetails'>
                <p>характер: очень хороший и добрый</p>
                <p>аллергия: нет</p>
                <p>корм: сухой, мокрый, сырой</p>
                <p>здоровье: богатырское</p>
              </div> : ''}

          </div>
        </div>
      )) : ''}
    </>
  )
}

