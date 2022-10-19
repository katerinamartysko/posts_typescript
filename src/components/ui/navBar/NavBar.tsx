import React, { useContext } from 'react';
import { AuthContext } from '../../../contex';
import { useNavigate } from 'react-router-dom';
import { AuthContextType } from '../../../api/types';
import { makeStyles } from 'tss-react/mui';
import { AppTheme } from '../../../utils/them';
import { Button } from '@mui/material';

const useStyles = makeStyles()((theme: AppTheme) => ({
  button: {
    marginTop: theme.spacing(1.5),
  },
}));
const NavBar = () => {
  const { setIsAuth } = useContext<AuthContextType>(AuthContext);
  const navigate = useNavigate();
  const { classes } = useStyles();

  const loginOut = () => {
    setIsAuth(0);
    localStorage.setItem('auth', '0');
    navigate('/login');
  };
  return (
    <div className="goOut">
      <Button variant="outlined" className={classes.button} onClick={loginOut}>
        ВЫЙТИ
      </Button>
    </div>
  );
};

export default NavBar;
