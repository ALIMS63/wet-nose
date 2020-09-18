import { useSelector } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer, animalReducer } from './reducers.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';


// const auth = useSelector(state => state?.user);
const preloadedState = window.localStorage.getItem('redux') || '{}';

// const store = createStore(
//   combineReducers({
//     user: userReducer,
//   }),
//   undefined,
//   composeWithDevTools()
// );
const preloadedState = window.localStorage.getItem('redux') ?? '{}';
const store = createStore(
 combineReducers({
    user: userReducer,
    animals: animalReducer
  }),
  JSON.parse(preloadedState),
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware
    )
  )
);

store.subscribe(() => {
  window.localStorage.setItem('redux', JSON.stringify(store.getState()));
});


export default store;
