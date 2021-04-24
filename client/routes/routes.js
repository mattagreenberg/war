import Login from '../views/Login.jsx';
import Game from '../views/Game.jsx';

const routes = [
  {
    path: '/game',
    component: Game
  },
  {
    path: '/',
    component: Login
  }
];

export default routes;