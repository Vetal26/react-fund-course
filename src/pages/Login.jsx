import React, { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton.jsx';
import MyInput from '../components/UI/input/MyInput.jsx';
import { AuthContext } from '../context';

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };
  <div>
    <h1>Login</h1>
    <form onSubmit={login}>
      <MyInput type="text" placeholder="Enter login" />
      <MyInput type="password" placeholder="Enter password" />
      <MyButton>Log In</MyButton>
    </form>
  </div>;
};

export default Login;
