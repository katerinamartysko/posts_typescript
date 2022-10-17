import React, { useContext } from 'react';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../contex';
import { useNavigate } from 'react-router-dom';
import { AuthContextType } from '../../../api/types';

const NavBar = () => {
  const { setIsAuth } = useContext<AuthContextType>(AuthContext);
  const navigate = useNavigate();

  const loginOut = () => {
    setIsAuth(0);
    localStorage.setItem('auth', '0');
    navigate('/login');
  };
  return (
    <div className="goOut">
      <MyButton onClick={loginOut}>ВЫЙТИ</MyButton>
    </div>
  );
};

export default NavBar;
