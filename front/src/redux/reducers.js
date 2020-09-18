
import { SET_USER, AUTHENTICATED_SUCCESSFULLY, LOGOUT, DELETE_USER, SET_ANIMALS, ANIMAL_CATEGORY  } from "./action-types";



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
  console.log(state)
  switch (action.type) {
    case SET_ANIMALS:
      return {
        ...state,
        animals: action.payload,
        filterAnimals: action.payload
      }
      case ANIMAL_CATEGORY:
        console.log('filter>>>>',state.animals.filterAnimals);
        
        return{
          ...state,
          filterAnimals:{...state.filterAnimals[action.payload]}
        }
    default:
      return state;
  }
}