import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function DeleteAnimal() {
  const { id } = useParams();
  const animals = useSelector(state => state.animals).animals;

  return (
    <>
      Delete Page
    </>
  )
}
export default DeleteAnimal;
