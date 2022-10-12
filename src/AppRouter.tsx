import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostIdPage from './pages/PostIdPage';
import Posts from './pages/Posts';

const AppRouter = () => {
  const rotes = [
    { path: '/', components: Posts },
    { path: '/posts/:id', components: PostIdPage },
  ];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {rotes.map(route => {
            const Component = route.components;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<Component />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
