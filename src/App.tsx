import React, { useState } from 'react';
import { AuthContext } from './contex';
import AppRouter from './components/AppRouter';
import './App.css'

const App = () => {
  const auth = localStorage.getItem('auth');
  const [isAuth, setIsAuth] = useState<number>(Number(auth));

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth
      }}
    >
      <AppRouter />
    </AuthContext.Provider>

  );
};

export default App;
