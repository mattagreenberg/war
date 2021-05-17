import * as React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/themeContext';
import { WagerProvider } from '../context/wagerContext';
import { BalanceProvider } from '../context/balanceContext';
import { useGame } from '../context/gameContext';
import LoadingSpinner from './LoadingSpinner.jsx';

const War = React.lazy(() => import('../games/war/War.jsx'));

export default function Game() {
  const { theme } = useTheme();

  const { updateGame, game } = useGame();

  const [gameComponent, setGameComonent] = React.useState();
 
  React.useEffect(() => {

  }, []);

  React.useEffect(() => {
    updateGame('war');
  }, []);

  React.useEffect(() => {
    setGameComonent(<War />)
  }, [game]);

  const fallback = (
    <FallbackContainer>
      <div>Loading game...</div>
      <LoadingSpinner />
    </FallbackContainer>
  );

  return (
    <BalanceProvider>
      <WagerProvider>
        <Container theme={theme}>
          <React.Suspense fallback={fallback}>
            {gameComponent}
          </React.Suspense>
        </Container>
      </WagerProvider>
    </BalanceProvider>
  );
};

const Container = styled.div`
  background: ${({ theme }) => theme.gamePrimary};
  height: 92%;
  overflow: hidden;
`;

const FallbackContainer = styled.div`
  position: absolute;
  right: 37rem;
  top: 20rem;
  height: fit-content;
  width: fit-content;
  color: white;
  font-size: 2rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;