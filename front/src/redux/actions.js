
import { SET_USER, DELETE_USER, AUTHENTICATED_SUCCESSFULLY, SET_ANIMALS, ANIMAL_CATEGORY, PAY_FILTER, SET_FILTERED_ANIMALS, ADD_ANIMAL } from "./action-types";

import axios from 'axios'


export function setUser(user) {
  return {
    type: SET_USER,
    payload: {
      user,
    },
  };
}

export function deleteUser() {
  return {
    type: DELETE_USER,
  };
}

export function startAnimals() {
  return async function (dispatch) {
    const animals = await axios.get('/api/allAnimals')
    dispatch(setAnimals(animals.data))
  }
}

export function setAnimals(animals) {
  return {
    type: SET_ANIMALS,
    payload: animals
  }
}

export function setFilteredAnimals(animals) {
  return {
    type: SET_FILTERED_ANIMALS,
    payload: animals
  }
}

export function setAnimalCategory(category) {
  return {
    type: ANIMAL_CATEGORY,
    payload: category
  }
}

export function paymentFilter(payment) {
  return {
    type: PAY_FILTER,
    payload: payment
  }
}

export function addNewAnimal(typeAnimal, newAnimal) {
  return {
    type: ADD_ANIMAL,
    payload: {
      typeAnimal,
      newAnimal,
    }
  }
}
