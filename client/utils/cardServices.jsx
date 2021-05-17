import * as React from 'react';
import Card from '../components/Card.jsx';
import { CardContainer } from '../styling/card.styling';
import { v4 as uuidv4 } from 'uuid';

export const deck = [
  { suit: 'diamond', face: 'A', value: 14 },
  { suit: 'diamond', face: 'K', value: 13 },
  { suit: 'diamond', face: 'Q', value: 12 },
  { suit: 'diamond', face: 'J', value: 11 },
  { suit: 'diamond', face: '10', value: 10 },
  { suit: 'diamond', face: '9', value: 9 },
  { suit: 'diamond', face: '8', value: 8 },
  { suit: 'diamond', face: '7', value: 7 },
  { suit: 'diamond', face: '6', value: 6 },
  { suit: 'diamond', face: '5', value: 5 },
  { suit: 'diamond', face: '4', value: 4 },
  { suit: 'diamond', face: '3', value: 3 },
  { suit: 'diamond', face: '2', value: 2 },
  { suit: 'heart', face: 'A', value: 14 },
  { suit: 'heart', face: 'K', value: 13 },
  { suit: 'heart', face: 'Q', value: 12 },
  { suit: 'heart', face: 'J', value: 11 },
  { suit: 'heart', face: '10', value: 10 },
  { suit: 'heart', face: '9', value: 9 },
  { suit: 'heart', face: '8', value: 8 },
  { suit: 'heart', face: '7', value: 7 },
  { suit: 'heart', face: '6', value: 6 },
  { suit: 'heart', face: '5', value: 5 },
  { suit: 'heart', face: '4', value: 4 },
  { suit: 'heart', face: '3', value: 3 },
  { suit: 'heart', face: '2', value: 2 },
  { suit: 'spade', face: 'A', value: 14 },
  { suit: 'spade', face: 'K', value: 13 },
  { suit: 'spade', face: 'Q', value: 12 },
  { suit: 'spade', face: 'J', value: 11 },
  { suit: 'spade', face: '10', value: 10 },
  { suit: 'spade', face: '9', value: 9 },
  { suit: 'spade', face: '8', value: 8 },
  { suit: 'spade', face: '7', value: 7 },
  { suit: 'spade', face: '6', value: 6 },
  { suit: 'spade', face: '5', value: 5 },
  { suit: 'spade', face: '4', value: 4 },
  { suit: 'spade', face: '3', value: 3 },
  { suit: 'spade', face: '2', value: 2 },
  { suit: 'club', face: 'A', value: 14 },
  { suit: 'club', face: 'K', value: 13 },
  { suit: 'club', face: 'Q', value: 12 },
  { suit: 'club', face: 'J', value: 11 },
  { suit: 'club', face: '10', value: 10 },
  { suit: 'club', face: '9', value: 9 },
  { suit: 'club', face: '8', value: 8 },
  { suit: 'club', face: '7', value: 7 },
  { suit: 'club', face: '6', value: 6 },
  { suit: 'club', face: '5', value: 5 },
  { suit: 'club', face: '4', value: 4 },
  { suit: 'club', face: '3', value: 3 },
  { suit: 'club', face: '2', value: 2 }
];

export function generateHand(type, cards) {
  const stack = [];
    let distance = 0;
    if (type === 'deck') {
      if (cards.length >= 3) {
        for (let i = 0; i < 3; i += 1) {
          stack.push(<Card key={uuidv4()} face={false} distance={distance} card={cards[i]} />);
          distance += 8;
        };
      } else {
        for (let i = 0; i < cards.length; i += 1) {
          stack.push(<Card key={uuidv4()} face={false} distance={distance} card={cards[i]} />);
          distance += 8;
        }
      }

    } else if (type === 'hand') {
      for (let i = 0; i < cards.length; i += 1) {
        stack.push(<Card key={uuidv4()} face={true} distance={distance} card={cards[i]} />);
        distance += 30;
      }
    }
    return (
      <CardContainer>
        {stack}
      </CardContainer>
    );
};
