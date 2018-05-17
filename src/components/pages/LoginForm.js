import React, { Component } from 'react';
import './LoginForm.css';
const TAG = "LoginForm";

export default class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      username:'',
      password:'',
    }
    this._onLogin=this._onLogin.bind(this);
    this._handleInputChange=this._handleInputChange.bind(this);
  }
  _onLogin(event){
    event.preventDefault();
    console.log(TAG,"onLogin");
    console.log(TAG,"onLogin","username = "+this.state.username);
    console.log(TAG,"onLogin","password = "+this.state.password);

  }

  _handleInputChange(event){
    console.log(TAG,"_handleInputChange","event target="+event.target.name);
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]:value,
    })
  }

  render(){
    console.log(TAG,"render");
    return(
      <form onSubmit = {this._onLogin}>
       <div className="container">
         <label><b>Username</b></label>
         <input className="input"
            type="text"
            placeholder="Enter Username"
            name="username" required
            onChange={this._handleInputChange}/>
         <br/>

         <label><b>Password</b></label>
         <input className="input"
            type="password"
            placeholder="Enter Password"
            name="password" required
            onChange={this._handleInputChange}/>
         <br/>

         <button type="submit">Login</button>
       </div>
     </form>
    );
  }
}




  // <form action="/session" accept-charset="UTF-8" method="post">
  // <input name="utf8" type="hidden" value="✓"/>
  // <input type="hidden" name="authenticity_token" value="lxqFxYJlhGUAnnaPlLY8RRTLq4iGcphkC8ATPxn70LXFfmDreLKE+LyuMSyLJXhiYmUyFnmmCdd8TuC3FHg3SA==">
  // <div class="auth-form-header p-0">
  //         <h1>Sign in to GitHub</h1>
  //       </div>
  //
  //
  //       <div id="js-flash-container">
  // </div>
  //
  //
  //       <div class="auth-form-body mt-3">
  //
  //         <label for="login_field">
  //           Username or email address
  //         </label>
  //         <input type="text" name="login" id="login_field" class="form-control input-block" tabindex="1" autocapitalize="off" autocorrect="off" autofocus="autofocus">
  //
  //         <label for="password">
  //           Password <a class="label-link" href="/password_reset">Forgot password?</a>
  //         </label>
  //         <input type="password" name="password" id="password" class="form-control form-control input-block" tabindex="2">
  //
  //         <input type="submit" name="commit" value="Sign in" tabindex="3" class="btn btn-primary btn-block" data-disable-with="Signing in…"/>
  //       </div>
  // </form>
