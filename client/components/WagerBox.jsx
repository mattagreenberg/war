import * as React from 'react';
import { useWager } from '../context/wagerContext';
import { useBalance } from '../context/balanceContext';
import { useGame } from '../context/gameContext';
import {
  One,
  Five,
  TwentyFive,
  OneHundred,
  FiveHundred,
  OneThousand
} from './Chips.jsx';
import {
  Container,
  UndoArrow,
  ChipContainer,
} from '../styling/wagerBox.styling';


export default function WagerBox() {

  const { wager, resetWager, addWager, removeLast } = useWager();
  const { updateTableBalance } = useBalance();
  const { resetHands, dealerHand, playerHand } = useGame();

  const handleUndo = (event) => {
    updateTableBalance('add', Number(wager[wager.length - 1]));
    removeLast(event);
  };

  const handleWager = (event) => {
    if (playerHand.length > 0 && dealerHand.length > 0) {
      resetHands();
    }
    addWager(Number(event.target.lastChild.textContent));
    updateTableBalance('subtract', Number(event.target.lastChild.textContent));
  };

  return (
    <Container>
      <UndoArrow onClick={handleUndo}>&#8634;</UndoArrow>
      <ChipContainer>
        <One wager={true} addWager={handleWager} />
        <Five wager={true} addWager={handleWager} />
        <TwentyFive wager={true} addWager={handleWager} />
        <OneHundred wager={true} addWager={handleWager} />
        <FiveHundred wager={true} addWager={handleWager} />
        <OneThousand wager={true} addWager={handleWager} />
      </ChipContainer>
    </Container>
  );
};
