import Login from '../views/Login.jsx';
import Main from '../views/Main.jsx';

const routes = [
  {
    path: '/main',
    component: Main
  },
  {
    path: '/',
    component: Login
  }
];

export default routes;