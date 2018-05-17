import React, { Component } from 'react';
// import logo from './logo.svg';Lo
import Counter from './Counter.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import './App.css';
import LoginForm from './components/pages/LoginForm.js';
import UserDataEdit from './UserDataEdit.js';
// import Header from './components/headerComponent/header';
// import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import { Route } from 'react-router-dom';

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
      <div>
        <Route  path="/" exact component={HomePage}/>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/loginForm" exact component={LoginForm}/>
      </div>
    );
  }
}



export default App;


// <Provider store = {store}a>
//   <LoginForm/>
//   <Header/>
// </Provider>
