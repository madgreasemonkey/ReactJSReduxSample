import React, { Component } from 'react';
// import LoginForm from './components/pages/LoginForm.js';
// import UserDataEdit from './UserDataEdit.js';
//
// import HomePage from './components/pages/HomePage';
// import LoginPage from './components/pages/LoginPage';
import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions';

const initialState = {
  count:0
};

class App extends Component {
  constructor(props){
    super(props);
    console.log('App','constructor');
    console.log(JSON.stringify(props));
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event){
    this.props.onUpdateUser(event.target.value);
  }
  render() {
    console.log('App','render');
    console.log(this.props);
    return (
      <div>
        <div>{this.props.user}</div>
        <div onClick={this.onUpdateUser}> Update user</div>
        <input onChange={this.onUpdateUser}/>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user,
});

const mapActionToProps = {
   onUpdateUser: updateUser
};

export default connect(mapStateToProps, mapActionToProps)(App);


// <Provider store = {store}a>
//   <LoginForm/>
//   <Header/>
// </Provider>


// <Route path="/" exact component={HomePage}/>
// <Route path="/login" exact component={LoginPage}/>
// <Route path="/loginForm" exact component={LoginForm}/>
// <Route path="/userDataEdit" exact component={UserDataEdit}/>



// import { combineReducers, createStore } from 'redux';
// import Header from './components/headerComponent/header';
// import Footer from './components/footerComponent/footer';
// import logo from './logo.svg';Lo
// import Counter from './Counter.js';
// import { Provider } from 'react-redux';
// import './App.css';
// import loginReducer from './reducers/loginReducer';
// import userReducer from './reducers/userReducer';
// import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// const allReducers = combineReducers({
//   login: loginReducer,
//   user: userReducer
// });

// const store = createStore(
//   allReducers,
//   window.devToolsExtension & window.devToolsExtension()
// );

// const action = {
//   type: 'changeState',
//   payload: {
//     newState: 'New state'
//   }
// };
