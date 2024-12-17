import React from 'react';
import Login from '../screens/Login/Login';
import {useLogin} from '../hooks/useLogin';
import Home from '../screens/Home/Home';

const Navigation = () => {
  const {isToken} = useLogin();

  return isToken ? <Home /> : <Login />;
};

export default Navigation;
