import React, { Component } from 'react';
// import logo from './logo.svg';Lo
import Counter from './Counter.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import './App.css';
import LoginForm from './LoginForm.js';
import UserDataEdit from './UserDataEdit.js';

const initialState = {
  count:0
};

function reducerFunc(state = initialState,action){
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}
const store = createStore(reducerFunc);
class App extends Component {
  render() {
    return (
      <Provider store = {store}a>
        <UserDataEdit/>
      </Provider>
    );
  }
}



export default App;
