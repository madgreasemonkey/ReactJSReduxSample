import React from 'react';
import { Link } from 'react-router-dom';

 const HomePage = () => (
   <div>
    <h1> Home Page</h1>
    <Link to="/login">Login</Link>
    <Link to="/loginForm">LoginForm</Link>
  </div>
);

export default HomePage;
