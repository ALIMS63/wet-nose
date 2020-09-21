import { SET_USER, AUTHENTICATED_SUCCESSFULLY, LOGOUT, DELETE_USER, SET_ANIMALS, ANIMAL_CATEGORY, PAY_FILTER, SET_FILTERED_ANIMALS } from "./action-types";


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
  filterAnimals: []
}

export function animalReducer(state = initialState, action) {
  console.log('STATE===', state)
  switch (action.type) {
    case SET_ANIMALS:
      return {
        ...state,
        animals: action.payload,
        filterAnimals: action.payload
      }
    case SET_FILTERED_ANIMALS:
      return {
        ...state,
        filterAnimals: action.payload
      }
    case ANIMAL_CATEGORY:
      return {
        ...state,
        filterAnimals: { ...state.filterAnimals[action.payload] }
      }
    case PAY_FILTER:
      console.log('PAY_FILTER');
      return {
        ...state,
        filterAnimals: { ...state.filterAnimals }
      }
    default:
      return state;
  }
}
