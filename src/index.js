import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { Router, Route } from 'react-router';
// import { browserHistory } from 'react-router';
// import { hashHistory } from 'react-router';
// import  { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './reducers/productsReducer';
import userReducer from './reducers/userReducer'

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer,
});
const store = createStore(
  allReducers, {
    products: [{name:'iPhone'}],
    user: 'Michael',},
    window.devToolsExtension && window.devToolsExtension()
  );


ReactDOM.render((
  <Provider store = {store}>
    <App/>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();


// const action = {
//   type: 'changeState',
//   payload: {
//     newState: 'New State'
//   }
// };
//
// store.dispatch(action);
//
// console.log(store.getState());



// console.log(store.getState());
//
// const updateUserAction = {
//   type: 'updateUser',
//   payload: {
//     user: 'John'
//   }
// };
//
// store.dispatch(updateUserAction);

// function productsReducer(state = [], action) {
//
//   console.log('reducer state = '+JSON.stringify(state));
//   console.log('reducer action = '+JSON.stringify(action));
//   return state;
// }


// function userReducer(state = '', {type, payload }) {
//
//   switch (type){
//     case 'updateUser':
//       return payload;
//     default
//   }
//   return state;
// }
