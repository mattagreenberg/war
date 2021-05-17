import * as React from 'react';
import WagerBox from '../../components/WagerBox.jsx';
import { generateHand } from '../../utils/cardServices.jsx';
import BalanceScreen from '../../components/BalanceScreen.jsx';
import DealHand from '../../components/DealHand.jsx';
import Table from '../../components/Table.jsx';
import { useGame } from '../../context/gameContext';
import {
  Container,
  BalanceDetails,
  BalanceText
} from '../../styling/war.styling';
import Cashier from '../../components/Cashier.jsx';

export default function War() {
  const { deck, muck, generateDeck, shuffle } = useGame();

  const [cashierPopup, setCashierPopup] = React.useState(false);

  React.useEffect(() => {
    generateDeck();
  }, []);

  React.useEffect(() => {
    if (deck.length === 624) {
      shuffle();
    }
  }, [deck]);

  const handleCashier = () => {
    if (cashierPopup) setCashierPopup(false);
    else setCashierPopup(true);
  };

  return (
    <Container>
      <BalanceScreen handleCashier={handleCashier} />
      <DealHand />
      {cashierPopup && <Cashier handleCashier={handleCashier} />}
      <Table deck={deck} muck={muck} />
      <WagerBox />
    </Container>
  );
};

