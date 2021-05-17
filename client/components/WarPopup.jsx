import * as React from 'react';
import { useGame } from '../context/gameContext';
import { useWager } from '../context/wagerContext';
import { useBalance } from '../context/balanceContext';
import {
  Container,
  Text,
  WarBtn,
  ForfeitBtn,
  BtnContainer
} from '../styling/warPopup.styling';

export default function WarPopup({ handleWarPopup }) {

  const { dealWar, resetHands } = useGame();
  const { wager, addWager, resetWager } = useWager();
  const { updateTableBalance } = useBalance();

  const handleForfeit = () => {
    handleWarPopup();
    resetWager();
    resetHands();
  };

  const handleWar = () => {
    handleWarPopup();
    const wagerTotal = wager.reduce((acc, cur) => acc += cur);
    addWager(wagerTotal);
    updateTableBalance('subtract', wagerTotal);
    dealWar();
  };
  
  return (
    <Container>
      <Text>Would you like to go to war?</Text>
      <BtnContainer>
        <ForfeitBtn onClick={handleForfeit}>Forfeit</ForfeitBtn>
        <WarBtn onClick={handleWar}>Go to War</WarBtn>
      </BtnContainer>
    </Container>
  );
};

