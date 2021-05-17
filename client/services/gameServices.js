import * as React from 'react';
import { deck } from '../utils/cardServices.jsx';

export function generateWarDeck() {
  // twelve standrard decks used in a game of war
  const warDeck = [
    ...deck,
    ...deck,
    ...deck, 
    ...deck, 
    ...deck, 
    ...deck, 
    ...deck, 
    ...deck, 
    ...deck, 
    ...deck, 
    ...deck, 
    ...deck
  ];

  return warDeck;
};

export function evaluateWarHand(playerHand, dealerHand) {
  if (playerHand[0].value > dealerHand[0].value) {
    // player win
    return 'player'

  } else if (dealerHand[0].value > playerHand[0].value) {
    // dealer win
    return 'dealer'
  } else if (dealerHand[0].value === playerHand[0].value) {
    // war
    return 'war';
  }
};

export function evaluateTie(playerHand, dealerHand) {
  if (playerHand[2].value > dealerHand[2].value) {
    // player win
    return 'player'

  } else if (dealerHand[2].value > playerHand[2].value) {
    // dealer win
    return 'dealer'
  } else if (dealerHand[2].value === playerHand[2].value) {
    // war
    return 'war';
  }
};

export function shuffleDeck(deck) {
  // shuffle deck 7 times
  for (let x = 0; x < 7; x += 1) {
    for (let i = deck.length - 1; i > 0; i -= 1) {
      let j = Math.floor(Math.random() * i);
      let temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    };
  }
  return deck;
};