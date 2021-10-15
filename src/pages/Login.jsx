import React from 'react';
import MyButton from '../components/UI/button/MyButton.jsx';
import MyInput from '../components/UI/input/MyInput.jsx';

const Login = () => (
  <div>
    <h1>Login</h1>
    <form>
      <MyInput type="text" placeholder="Enter login" />
      <MyInput type="password" placeholder="Enter password" />
      <MyButton>Log In</MyButton>
    </form>
  </div>
);

export default Login;
