import * as React from 'react';
import {
  Container,
  WagerText,
  WagerBox,
  Label,
  DealBtn
} from '../styling/dealHand.styling';
import { useTheme } from '../context/themeContext';
import { useWager } from '../context/wagerContext';
import { useGame } from '../context/gameContext';

export default function DealHand() {
  const { theme } = useTheme();
  const { wager } = useWager();
  const { dealHand } = useGame();

  return (
    <Container theme={theme}>
      <Label theme={theme}>Wager Amount:</Label>
      <WagerBox>
        <WagerText>{wager.length && wager.reduce((acc, cur) => acc += cur)}</WagerText>
      </WagerBox>
      <DealBtn onClick={dealHand} disabled={wager < 1}>Deal Hand</DealBtn>
    </Container>
  );
};