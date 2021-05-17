import * as React from 'react';
import { generateWarDeck, shuffleDeck, evaluateWarHand, evaluateTie } from '../services/gameServices';

const GameContext = React.createContext({});

function GameProvider(props) {
  const [game, setGame] = React.useState('');
  const [deck, setDeck] = React.useState([]);
  const [muck, setMuck] = React.useState([]);
  const [playerHand, setPlayerHand] = React.useState([]);
  const [dealerHand, setDealerHand] = React.useState([]);
  const [playerWarHand, setPlayerWarHand] = React.useState([]);
  const [dealerWarHand, setDealerWarHand] = React.useState([]);

  const generateDeck = () => {
    switch (game) {
      case 'war':
         setDeck(generateWarDeck());
         break;
      default: 
        break;
    }
  };

  const shuffle = () => {
    setDeck(shuffleDeck(deck));
  }

  const restDeck = () => {
    setDeck([...deck, ...muck]);
    setMuck([]);
  };

  const dealHand = () => {
    setPlayerHand([deck[0]]);
    setDealerHand([deck[1]]);
    setDeck(deck.slice(2));
  };

  const dealWar = () => {
    console.log('in deal war');
    setPlayerWarHand(deck.slice(0, 3));
    setDealerWarHand(deck.slice(3, 6));
    setDeck(deck.slice(6));
  };

  const resetHands = () => {
    setPlayerHand([]);
    setDealerHand([]);
    setDealerWarHand([]);
    setPlayerWarHand([]);
  };

  const evaluateHand = () => {
    let result;
    switch (game) {
      case 'war':
        result = evaluateWarHand(playerHand, dealerHand);
        break;
      default:
        break;
    };

    return result;
  };

  const evaluateWar = () => {
    let result;
    switch (game) {
      case 'war':
        result = evaluateTie(playerWarHand, dealerWarHand);
        break;
      default:
        break;
    };

    return result;
  };

  const updateGame = (type) => {
    setGame(type);
  }

  const gameContextValues = {
    game,
    deck,
    muck,
    playerHand,
    dealerHand,
    generateDeck,
    shuffle,
    restDeck,
    dealHand,
    updateGame,
    evaluateHand,
    resetHands,
    playerWarHand,
    dealerWarHand,
    dealWar,
    evaluateWar
  };

  return <GameContext.Provider value={gameContextValues} {...props} />
};

function useGame() {
  return React.useContext(GameContext);
};

export { GameProvider, useGame };