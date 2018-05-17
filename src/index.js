import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { Router, Route } from 'react-router';
// import { browserHistory } from 'react-router';
// import { hashHistory } from 'react-router';
import  { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
