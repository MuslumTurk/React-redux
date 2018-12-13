import React from 'react';
import DefaultLayout from '../containers/Layout';

const Users = React.lazy(() => import('../views/Pages/Users'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/users', exact: true, name: 'Users', component: Users },
];

export default routes;
