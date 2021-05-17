import * as React from 'react';
import ThemeToggle from '../components/ThemeToggle.jsx';
import { useTheme } from '../context/themeContext';
import { TrophyIcon, GameIcon, HelpIcon } from '../utils/svg/menuSVG.jsx';
import Game from '../components/Game.jsx';
import { GameProvider } from '../context/gameContext.js';
import {
  Container,
  Header,
  MenuContainer,
  MenuBtn
} from '../styling/main.styling';

export default function Main() {
  const { theme } = useTheme();
  
  return (
    <Container theme={theme}>
      <Header>
        <MenuContainer>
          <MenuBtn>
            <TrophyIcon />
          </MenuBtn>
          <MenuBtn>
            <GameIcon />
          </MenuBtn>
          <MenuBtn>
            <HelpIcon />
          </MenuBtn>
        </MenuContainer>
        <ThemeToggle />
      </Header>
      <GameProvider>
        <Game />
      </GameProvider>
    </Container>
  );
};