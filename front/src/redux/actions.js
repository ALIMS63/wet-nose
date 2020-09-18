import { SET_USER, DELETE_USER, SET_ANIMALS } from "./action-types";
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