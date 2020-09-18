import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer, animalReducer } from './reducers.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';



const store = createStore(
  combineReducers({
    user: userReducer,
    animals: animalReducer,
  }),
  undefined,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware
    )
  )
);


export default store;
