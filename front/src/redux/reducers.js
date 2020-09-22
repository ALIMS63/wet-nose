import { SET_USER, AUTHENTICATED_SUCCESSFULLY, LOGOUT, DELETE_USER, SET_ANIMALS, ANIMAL_CATEGORY, PAY_FILTER, ADD_ANIMAL, AGE_FILTER, PRICE_FILTER, GENDER_FILTER, HAIR_FILTER, WEIGHT_FILTER, WAR_FILTER, SUFFER_FILTER, CONDITION_FILTER, APARTMENT_FILTER, GUIDE_FILTER, CHILDREN_FILTER } from "./action-types";



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
    case PRICE_FILTER:
      return {
        ...state,
        filters: { ...state.filters, price: action.payload }
      }
    case GENDER_FILTER:
      return {
        ...state,
        filters: { ...state.filters, gender: action.payload }
      }
    case HAIR_FILTER:
      return {
        ...state,
        filters: { ...state.filters, haired: action.payload }
      }
    case WEIGHT_FILTER:
      return {
        ...state,
        filters: { ...state.filters, weight: action.payload }
      }
    case WAR_FILTER:
      return {
        ...state,
        filters: { ...state.filters, war: action.payload }
      }
    case SUFFER_FILTER:
      return {
        ...state,
        filters: { ...state.filters, suffer: action.payload }
      }
    case CONDITION_FILTER:
      return {
        ...state,
        filters: { ...state.filters, condition: action.payload }
      }
    case APARTMENT_FILTER:
      return {
        ...state,
        filters: { ...state.filters, apartment: action.payload }
      }
    case GUIDE_FILTER:
      return {
        ...state,
        filters: { ...state.filters, guide: action.payload }
      }
    case CHILDREN_FILTER:
      return {
        ...state,
        filters: { ...state.filters, children: action.payload }
      }
    case ADD_ANIMAL:
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
