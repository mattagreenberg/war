import * as React from 'react';
import { Spade, Diamond, Heart, Club } from './Suits.jsx';
import { v4 as uuidv4 } from 'uuid';
import {
  Container,
  Header,
  Body,
  Footer,
  CardBack
} from '../styling/card.styling';

export default function Card({ face, card, distance }) {
  const num = distance + 'px';
  const suits = {
    'diamond': (<Diamond mini={false} />),
    'heart': (<Heart mini={false} />),
    'spade': (<Spade mini={false} />),
    'club': (<Club mini={false} />)
  };

  const miniSuits = {
    'diamond': (<Diamond mini={true} />),
    'heart': (<Heart mini={true} />),
    'spade': (<Spade mini={true} />),
    'club': (<Club mini={true} />)
  };

  const colors = {
    'diamond': 'red',
    'heart': 'red',
    'spade': 'black',
    'club': 'black'
  };

  return (
    <Container distance={num} key={uuidv4()}>
      {face
        ? (<>
            <Header color={colors[card.suit]}>{card.face}</Header>
            {miniSuits[card.suit]}
            <Body>
              {suits[card.suit]}
            </Body>
            <Footer color={colors[card.suit]}>{card.face}</Footer>
          </>)
        : (<CardBack />)}
    </Container>
  );
};