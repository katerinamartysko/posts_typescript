import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './HeaderUs';
import { privateRoutes, publicRoutes } from '../router/route';
import NavBar from './ui/navBar/NavBar';
import { AuthContext } from '../contex';


const AppRouter = () => {
  const { isAuth} = useContext(AuthContext);
  return (
    isAuth
      ? (
        <BrowserRouter>
          <Header />
          <NavBar/>

          <Routes>
            {privateRoutes.map(privatRoutes => {
              const Component = privatRoutes.components;
              return (
                <Route
                  key={privatRoutes.path}
                  path={privatRoutes.path}
                  element={<Component />}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      )
      : (
        <BrowserRouter>
          <Routes>
            {publicRoutes.map(publicRoute => {
              const Component = publicRoute.components;
              return (
                <Route
                  key={publicRoute.path}
                  path={publicRoute.path}
                  element={<Component />}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      )
  );
};

export default AppRouter;
