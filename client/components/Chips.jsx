import * as React from 'react';
import { useBalance } from '../context/balanceContext';
import { v4 as uuidv4 } from 'uuid';
import {
  Back,
  Chip,
  Inner,
  Value,
  TableChipBack
} from '../styling/chips.styling';


export function One({ wager, addWager }) {
  const { tableBalance } = useBalance();

  return (
    <>
      {wager
        ? (<Back key={uuidv4()} color='#000000'>
              <Chip onClick={wager && tableBalance >= 1 ? addWager : undefined} title='1' color='eee'>
                <Inner color='#eee'>
                  <Value color='#000000'>1</Value>
                </Inner>
              </Chip>)
            </Back>)
        : (<TableChipBack key={uuidv4()} color='#000000'>
            <Chip color='eee'>
              <Inner color='#eee'>
                <Value color='#000000'>1</Value>
              </Inner>
            </Chip>
          </TableChipBack>)}
    </>
  );
};

export function Five({ wager, addWager }) {
  const { tableBalance } = useBalance();

  return (
    <>
      {wager
        ? (<Back key={uuidv4()} color='#eee'>
              <Chip onClick={wager && tableBalance >= 5 ? addWager : undefined} title='5' color='942c2c'>
                <Inner color='#942c2c'>
                  <Value color='#eee'>5</Value>
                </Inner>
              </Chip>)
            </Back>)
        : (<TableChipBack key={uuidv4()} color='#eee'>
            <Chip color='942c2c'>
              <Inner color='#942c2c'>
                <Value color='#eee'>5</Value>
              </Inner>
            </Chip>
          </TableChipBack>)}
    </>
  );
};

export function TwentyFive({ wager, addWager }) {
  const { tableBalance } = useBalance();

  return (
    <>
      {wager
        ? (<Back key={uuidv4()} color='#eee'>
              <Chip onClick={wager && tableBalance >= 25 ? addWager : undefined} title='25' color='35654d'>
                <Inner color='#35654d'>
                  <Value color='#eee'>25</Value>
                </Inner>
              </Chip>)
            </Back>)
        : (<TableChipBack key={uuidv4()} color='#eee'>
            <Chip color='35654d'>
              <Inner color='#35654d'>
                <Value color='#eee'>25</Value>
              </Inner>
            </Chip>
          </TableChipBack>)}
    </>
  );
};

export function OneHundred({ wager, addWager }) {
  const { tableBalance } = useBalance();

  return (
     <>
      {wager
        ? (<Back key={uuidv4()} color='#eee'>
              <Chip onClick={wager && tableBalance >= 100 ? addWager : undefined} title='100' color='000000'>
                <Inner color='#000000'>
                  <Value color='#eee'>100</Value>
                </Inner>
              </Chip>)
            </Back>)
        : (<TableChipBack key={uuidv4()} color='#eee'>
            <Chip color='000000'>
              <Inner color='#000000'>
                <Value color='#eee'>100</Value>
              </Inner>
            </Chip>
          </TableChipBack>)}
    </>
  );
};

export function FiveHundred({ wager, addWager }) {
  const { tableBalance } = useBalance();
 
  return (
    <>
      {wager
        ? (<Back key={uuidv4()} color='#eee'>
              <Chip onClick={wager && tableBalance >= 500 ? addWager : undefined} title='500' color='723c8c'>
                <Inner color='#723c8c'>
                  <Value color='#eee'>500</Value>
                </Inner>
              </Chip>)
            </Back>)
        : (<TableChipBack key={uuidv4()} color='#eee'>
            <Chip color='723c8c'>
              <Inner color='#723c8c'>
                <Value color='#eee'>500</Value>
              </Inner>
            </Chip>
          </TableChipBack>)}
    </>
  );
};

export function OneThousand({ wager, addWager }) {
  const { tableBalance } = useBalance();
  
  return (
    <>
      {wager
        ? (<Back key={uuidv4()} color='#eee'>
              <Chip onClick={wager && tableBalance >= 1000 ? addWager : undefined} title='1000' color='ab6e1f'>
                <Inner color='#ab6e1f'>
                  <Value color='#eee'>1000</Value>
                </Inner>
              </Chip>)
            </Back>)
        : (<TableChipBack key={uuidv4()} color='#eee'>
            <Chip color='ab6e1f'>
              <Inner color='#ab6e1f'>
                <Value color='#eee'>1000</Value>
              </Inner>
            </Chip>
          </TableChipBack>)}
    </>
  );
};