import React from 'react';
import { Link } from 'react-router-dom';

const NoMatchLogin = () => {
  return (
    <div>
      <h1 className="noPage">ВЫ НЕ АВТОРИЗИРОВАЛИСЬ</h1>
      <Link to="/login" className="noMatch">ДЛЯ ПРОДОЛЖЕНИЯ ВЕРНИТЕСЬ НА СТРАНИЦУ ВХОДА </Link>
    </div>
  );
};

export default NoMatchLogin;
