import React, { Component } from 'react';
import logo from './logo.svg';
import Counter from './Counter.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import './App.css';

const store = createStore(reducerFunc);
class App extends Component {
  render() {
    return (
      <Provider store = {store}a>
        <Counter/>
      </Provider>
    );
  }
}

function reducerFunc(){
  return{
    count:42
  };
}

export default App;
