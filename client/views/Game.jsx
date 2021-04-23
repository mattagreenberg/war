import * as React from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/authContext';
import { useHistory } from 'react-router-dom';

function Game() {
  const { data, logout } = useAuth();
  const history = useHistory();
  const { user } = data;
  if (user === null) {
    history.push('/');
    return;
  };

  return (
    <div>Game Authenticated success user is {user.username}</div>
  );
};

export default Game;