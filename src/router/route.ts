import About from '../pages/About';
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';
import NoMatch from '../pages/NoMatch';
import Login from '../pages/Login';
import NoMatchLogin from '../pages/NoMatchLogin';

export const privateRoutes = [
  { path: '/about', components: About },
  { path: '/posts', components: Posts },
  { path: '/posts/:id', components: PostIdPage },
  { path: '*', components: NoMatch },
];

export const publicRoutes = [
  { path: '/login', components: Login },
  { path: '*', components: NoMatchLogin },
];
