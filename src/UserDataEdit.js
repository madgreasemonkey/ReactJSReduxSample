import React, { Component } from 'react';

const TAG = 'UserData';

export default class UserDataEdit extends Component{

  constructor(props){
    super(props);
    this.state ={
      name:'',
      phone_number:'',
      address:'',
      kids_name:'',
    }
    this._saveInfo=this._saveInfo.bind(this);
    this._handleInputChange=this._handleInputChange.bind(this);
  }

  _saveInfo(event){
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
    return(
      <div className="container">
        <form onSubmit={this._saveInfo}>
          <label><b>Name</b></label>
          <input className="input"
             type="text"
             placeholder="Enter Name"
             name="name" required
             onChange={this._handleInputChange}/>
          <br/>
          <label><b>Phone Number</b></label>
          <input className="input"
             type="text"
             placeholder="Enter Phone Number"
             name="phone_number" required
             onChange={this._handleInputChange}/>
          <br/>
          <label><b>Address</b></label>
          <input className="input"
             type="text"
             placeholder="Enter Address"
             name="address" required
             onChange={this._handleInputChange}/>
          <br/>
          <label><b>{"Kid's Name"}</b></label>
          <input className="input"
             type="text"
             placeholder="Enter Your kid's name"
             name="kids_name" required
             onChange={this._handleInputChange}/>
          <br/>
          <button type = "submit">Save</button>
        </form>
        <table style={{
          width:"100%",
          height:"50%",
          color:'#000',
        }}>
        <tr>
          <th><label><b>Name</b></label>
          </th>
          <td><input className="input"
             type="text"
             placeholder="Enter Name"
             name="name" required
             onChange={this._handleInputChange}/></td>
        </tr>
        <tr>
          <th><label><b>Phone Number</b></label></th>
          <td><input className="input"
             type="text"
             placeholder="Enter Phone Number"
             name="phone_number" required
             onChange={this._handleInputChange}/></td>
        </tr>
        <tr>
          <th><label><b>Address</b></label></th>
          <td><input className="input"
             type="text"
             placeholder="Enter Address"
             name="address" required
             onChange={this._handleInputChange}/></td>
        </tr><tr>
          <th><label><b>{"Kid's Name"}</b></label></th>
          <td><input className="input"
             type="text"
             placeholder="Enter Your kid's name"
             name="kids_name" required
             onChange={this._handleInputChange}/></td>
        </tr>

        </table>
      </div>
    );
  }
}
