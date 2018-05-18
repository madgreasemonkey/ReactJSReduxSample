import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import LoginForm from './components/pages/LoginForm.js';
import UserDataEdit from './UserDataEdit.js';
// import Header from './components/headerComponent/header';
// import Footer from './components/footerComponent/footer';
// import logo from './logo.svg';Lo
// import Counter from './Counter.js';
// import { Provider } from 'react-redux';
// import './App.css';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import loginReducer from './reducers/loginReducer';
import userReducer from './reducers/userReducer';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const initialState = {
  count:0
};





const allReducers = combineReducers({
  login: loginReducer,
  user: userReducer
});

const store = createStore(
  allReducers,
  window.devToolsExtension & window.devToolsExtension()
);

const action = {
  type: 'changeState',
  payload: {
    newState: 'New state'
  }
};
class App extends Component {
  render() {
    return (
      <div>
        <Route  path="/" exact component={HomePage}/>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/loginForm" exact component={LoginForm}/>
        <Route path="/userDataEdit" exact component={UserDataEdit}/>
      </div>
    );
  }
}



export default App;


// <Provider store = {store}a>
//   <LoginForm/>
//   <Header/>
// </Provider>
