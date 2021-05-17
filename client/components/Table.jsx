import * as React from 'react';
import { useWager } from '../context/wagerContext';
import { useBalance } from '../context/balanceContext';
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
  ChipContainer,
  DealerDeck,
  DealerHand,
  PlayerHand,
  HandsContainer,
  WarContainer,
  DealerWarHand,
  PlayerWarHand,
  HandResult
} from '../styling/table.styling';
import { generateHand } from '../utils/cardServices.jsx';
import { useGame } from '../context/gameContext';
import WarPopup from './WarPopup.jsx';

// const fakeHand = [{ suit: 'diamond', face: 'K', value: 13 }, { suit: 'spade', face: '4', value: 4 }, { suit: 'heart', face: 'A', value: 14 }, { suit: 'club', face: 'J', value: 11 }]

export default function Table({ deck, muck }) {
  const { wager, resetWager } = useWager();
  const { 
    dealerHand, 
    playerHand, 
    evaluateHand, 
    dealWar, 
    dealerWarHand, 
    playerWarHand,
    evaluateWar
  } = useGame();
  const { playerWin, dealerWin } = useBalance();

  const [dealerTable, setDealerTable] = React.useState();
  const [playerTable, setPlayerTable] = React.useState();
  const [dealerWarTable, setDealerWarTable] = React.useState();
  const [playerWarTable, setPlayerWarTable] = React.useState();
  const [handResult, setHandResult] = React.useState('');
  const [warPopup, setWarPopup] = React.useState(false);

  const [stack, setStack] = React.useState([]);

  const valueMatch = {
    1: (<One wager={false} />),
    5: (<Five wager={false} />),
    25: (<TwentyFive wager={false} />),
    100: (<OneHundred wager={false} />),
    500: (<FiveHundred wager={false} />),
    1000: (<OneThousand wager={false} />)
  };

  React.useEffect(() => {
    const updated = wager.map(element => valueMatch[element]);
    setStack(updated);
  }, [wager]);


  React.useEffect(() => {
    setPlayerWarTable(generateHand('hand', playerWarHand));
    setDealerWarTable(generateHand('hand', dealerWarHand));
    if (playerWarHand.length > 0 && dealerWarHand.length > 0) {
      const result = evaluateWar();
      const wagerTotal = wager.reduce((acc, cur) => acc += cur);
      if (result === 'player') {
        setHandResult('Player Win!')
        playerWin(Number(wagerTotal));
        resetWager();
      } else if (result === 'dealer') {
        setHandResult('Dealer Win!')
        dealerWin(Number(wagerTotal));
        resetWager();
      } else if (result === 'war') {
        setHandResult('War!');
        
      }

    }
  }, [playerWarHand, dealerWarHand]);

  React.useEffect(() => {
    setDealerTable(generateHand('hand', dealerHand));
    setPlayerTable(generateHand('hand', playerHand));
    if (playerHand.length > 0 && dealerHand.length > 0) {
      const result = evaluateHand();
      const wagerTotal = wager.reduce((acc, cur) => acc += cur);
      if (result === 'player') {
        setHandResult('Player Win!')
        playerWin(Number(wagerTotal));
        resetWager();
      } else if (result === 'dealer') {
        setHandResult('Dealer Win!')
        dealerWin(Number(wagerTotal));
        resetWager();
      } else if (result === 'war') {
        setHandResult('War!');
        setWarPopup(true);
      }
    };
  }, [dealerHand, playerHand]);

  React.useEffect(() => {
    if (handResult.length > 0) {
      setTimeout(() => {
        setHandResult('');
      }, 1000);
    };
  }, [handResult]);

  const handleWarPopup = () => {
    if (warPopup) setWarPopup(false);
    else setWarPopup(true);
  };

  return (
    <Container>
      <HandResult>
        {handResult}
      </HandResult>
      <DealerDeck>
        {generateHand('deck', deck)};
      </DealerDeck>
      <HandsContainer>
        <DealerHand>
          {dealerTable}
        </DealerHand>
        <PlayerHand>
          {playerTable}
        </PlayerHand>
      </HandsContainer>
      {warPopup && <WarPopup handleWarPopup={handleWarPopup}/>}
      <WarContainer>
        <DealerWarHand>
          {dealerWarTable}
        </DealerWarHand>
        <PlayerWarHand>
          {playerWarTable}
        </PlayerWarHand>
      </WarContainer>
    <ChipContainer>
      {stack}
    </ChipContainer>
    </Container>
  );
};