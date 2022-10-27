import React, { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, TextField } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { AppTheme } from '../utils/them';
import { AuthContext } from '../contex';
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
    width: '70%',
  },
}));

interface LoginFormValue {
  login: string;
  password: string;
}

const initialValue: LoginFormValue = {
  login: '',
  password: '',
};

const validationsSchema = yup.object().shape({
  login: yup.string().typeError('Должно быть строкой').required('Обязательно'),
  password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
});

const Login: FC = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { classes } = useStyles();

  const login = (values: LoginFormValue): void => {
    setIsAuth(1);
    localStorage.setItem('auth', '1');
    navigate('/posts');
  };

  return (
    <div>
      <h1>Страница для логина</h1>
      <div>
        <Formik initialValues={initialValue} validateOnBlur onSubmit={login} validationSchema={validationsSchema}>
          {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
            <Form>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Введите логин"
                  variant="outlined"
                  className={classes.myInp}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.login}
                  name="login"
                />
              </div>
              {touched.login && errors.login && <Alert severity="error">{errors.login}</Alert>}
              <div>
                <TextField
                  id="outlined-basic"
                  label="Введите пароль"
                  variant="outlined"
                  className={classes.myInp}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password && errors.password}
                />
              </div>
              {touched.password && errors.password && <Alert severity="error">{errors.password}</Alert>}

              <Button disabled={!isValid && !dirty} type="submit" variant="outlined" className={classes.login}>
                ВОЙТИ
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
