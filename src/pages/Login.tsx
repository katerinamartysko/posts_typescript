import React, { FormEvent, useContext } from 'react';
import { AuthContext } from '../contex';
import { useNavigate } from 'react-router-dom';
import MyButton from '../components/ui/button/MyButton';

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = (event: FormEvent) => {
    event.preventDefault();
    setIsAuth(1);
    localStorage.setItem('auth', '1');
    navigate('/posts');
  };

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <input className="myInp" type="text" placeholder="Введите логин" />
        <input className="myInp" type="password" placeholder="Введите пароль" />
        <MyButton>ВОЙТИ </MyButton>
      </form>
    </div>
  );
};

export default Login;
