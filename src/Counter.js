import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
// import './App.css';

class Counter extends Component {
  // state = { count:0 }
  increment = () => {
    // this.setState({
    //   count:this.state.count + 1
    // });
  }

  decrement = () => {
    // this.setState({
    //   count:this.state.count - 1
    // });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    count:state.count
  };
}

export default connect(mapStateToProps)(Counter);
