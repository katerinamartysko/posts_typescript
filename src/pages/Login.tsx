import React, { FormEvent, useContext } from 'react';
import { AuthContext } from '../contex';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import { AppTheme } from '../utils/them';
import '../App.css';

const useStyles = makeStyles()((theme: AppTheme) => ({
  root: {
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'column',
  },
  login: {
    marginLeft: theme.spacing(2.5),
    width: 90,
  },
  myInp: {
    marginLeft: theme.spacing(1),
  },
}));
const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { classes } = useStyles();

  const login = (event: FormEvent) => {
    event.preventDefault();
    setIsAuth(1);
    localStorage.setItem('auth', '1');
    navigate('/posts');
  };

  return (
    <div>
      <h1>Страница для логина</h1>
      <form className={classes.root} onSubmit={login}>
        <input className="myInp" type="text" placeholder="Введите логин" />
        <input className="myInp" type="password" placeholder="Введите пароль" />
        <Button className={classes.login} variant="outlined" type="submit">
          ВОЙТИ
        </Button>
      </form>
    </div>
  );
};

export default Login;
