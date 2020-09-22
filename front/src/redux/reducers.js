import { SET_USER, AUTHENTICATED_SUCCESSFULLY, LOGOUT, DELETE_USER, SET_ANIMALS, ANIMAL_CATEGORY, PAY_FILTER, SET_FILTERED_ANIMALS, ADD_ANIMAL, AGE_FILTER } from "./action-types";



export function userReducer(state = false, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload.user;
    case AUTHENTICATED_SUCCESSFULLY:
      return {
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
      };
    case DELETE_USER:
      return false;
    default:
      return state;
  }
}

const initialState = {
  animals: [],
  filters: []
}

export function animalReducer(state = initialState, action) {
  console.log('STATE===', state)
  switch (action.type) {
    case SET_ANIMALS:
      return {
        ...state,
        animals: action.payload,
      }
    case ANIMAL_CATEGORY:
      return {
        ...state,
        filters: { ...state.filters, category: action.payload }
      }
    case PAY_FILTER:
      return {
        ...state,
        filters: { ...state.filters, pay: action.payload }
      }
    case AGE_FILTER:
      return {
        ...state,
        filters: { ...state.filters, age: action.payload }
      }
    case ADD_ANIMAL:
      console.log('ADD_ANIMAL');
          return {
            ...state,
            animals: {
              ...state.animals,
              [action.payload.typeAnimal]: [
                ...state.animals[action.payload.typeAnimal],
                action.payload.newAnimal
              ]
            }
          }
    default:
      return state;
  }
}
