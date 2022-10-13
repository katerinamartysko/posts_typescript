import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
return (
    <div>
      <h1 className="noPage">ВЫ ПЕРЕШЛИ НА НЕСУЩЕСТВУЮЩУЮ СТРАНИЦУ</h1>
      <Link to="/" className="noMatch"> ВЕРНУТЬСЯ К ПОСТАМ</Link>
    </div>
  );
};

export default NoMatch;
