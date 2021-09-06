import Login from '../pages/Login';

export const routeNames = Object.freeze({
  LOGIN: '/login',
  USER: '/user',
});

export const publicRoutes = [
  {
    path: routeNames.LOGIN,
    exact: true,
    component: Login,
  },
];

export const protectedRoutes = [
  {
    path: routeNames.USER,
    exact: true,
    component: Login,
  },
];
