// routes.tsx
import { RouteProps } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ListRepos from './pages/ListRepos';
import Profile from './pages/Profile';
import ListReposFavorites from './pages/ListReposFavorites';

const routes: RouteProps[] = [
  {
    path: '/',
    element: <ListRepos />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/list-repos',
    element: <ListRepos />,
  },
  {
    path: '/list-repos-fav',
    element: <ListReposFavorites />,
  },
];

export default routes;
