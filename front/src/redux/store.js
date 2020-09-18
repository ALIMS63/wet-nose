import { useSelector } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from './reducers.js';
import { composeWithDevTools } from 'redux-devtools-extension';

// const auth = useSelector(state => state?.user);
const preloadedState = window.localStorage.getItem('redux') || '{}';


const store = createStore(
  combineReducers({
    user: userReducer,
  }),
  JSON.parse(preloadedState),
  composeWithDevTools()
);

store.subscribe(() => {
  window.localStorage.setItem('redux', JSON.stringify(store.getState()));
});


export default store;
