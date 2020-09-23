
import { SET_USER, DELETE_USER, AUTHENTICATED_SUCCESSFULLY, SET_ANIMALS, ANIMAL_CATEGORY, PAY_FILTER, ADD_ANIMAL, AGE_FILTER, GENDER_FILTER, PRICE_FILTER, HAIR_FILTER, WEIGHT_FILTER, GUIDE_FILTER, WAR_FILTER, CONDITION_FILTER, SUFFER_FILTER, APARTMENT_FILTER, CHILDREN_FILTER, UPDATE_ANIMAL } from "./action-types";


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

export function ageFilter(age) {
  return {
    type: AGE_FILTER,
    payload: age
  }
}

export function priceFilter(price) {
  return {
    type: PRICE_FILTER,
    payload: price
  }
}

export function genderFilter(gender) {
  return {
    type: GENDER_FILTER,
    payload: gender
  }
}

export function hairFilter(haired) {
  return {
    type: HAIR_FILTER,
    payload: haired
  }
}

export function weightFilter(weight) {
  return {
    type: WEIGHT_FILTER,
    payload: weight
  }
}

export function warFilter(war) {
  return {
    type: WAR_FILTER,
    payload: war
  }
}

export function guideFilter(guide) {
  return {
    type: GUIDE_FILTER,
    payload: guide
  }
}

export function sufferFilter(suffer) {
  return {
    type: SUFFER_FILTER,
    payload: suffer
  }
}

export function conditionFilter(condition) {
  return {
    type: CONDITION_FILTER,
    payload: condition
  }
}

export function apartmentFilter(apartment) {
  return {
    type: APARTMENT_FILTER,
    payload: apartment
  }
}

export function childrenFilter(children) {
  return {
    type: CHILDREN_FILTER,
    payload: children
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

// export function updateMyAnimal(typeAnimal, updateAnimal) {
//   return {
//     type: UPDATE_ANIMAL,
//     payload: {
//       typeAnimal,
//       updateAnimal,
//     }
//   }
// }
