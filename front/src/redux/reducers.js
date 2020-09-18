import { SET_USER, DELETE_USER, SET_ANIMALS } from "./action-types";

export function userReducer(state = false, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload.user;
    case DELETE_USER:
      return false;

    default:
      return state;
  }
}

const initialState = {
  animals: []
}

export function animalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ANIMALS:
      return {
        ...state,
        animals: action.payload
      }
    default:
      return state;
  }
}