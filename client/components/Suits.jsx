import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

export function Club({ mini }) {
  if (mini) {
    const style = { fontSize: '1.2rem', color: 'black', marginLeft: '.6rem' };
    return <div key={uuidv4()} style={style}>&#9827;</div>
  }
  const style = { fontSize: '5rem', marginBottom: '4.5rem', color: 'black' };
  return (
    <div key={uuidv4()} style={style}>&#9827;</div>
  );
};

export function Diamond({ mini }) {
  if (mini) {
    const style = { fontSize: '1.2rem', color: 'red', marginLeft: '.6rem' };
    return <div key={uuidv4()} style={style}>&#9830;</div>
  }
  const style = { fontSize: '5rem', marginBottom: '4.5rem', color: 'red' };
  return (
    <div key={uuidv4()} style={style}>&#9830;</div>
  );
};

export function Heart({ mini }) {
  if (mini) {
    const style = { fontSize: '.8rem', color: 'red', marginLeft: '.6rem', marginTop: '.4rem' };
    return <div key={uuidv4()} style={style}>&#10084;</div>
  }
  const style = { fontSize: '4rem', marginBottom: '2.5rem', color: 'red', marginRight: '1rem' };
  return (
    <div key={uuidv4()} style={style}>&#10084;</div>
  );
};

export function Spade({ mini }) {
  if (mini) {
    const style = { fontSize: '1.2rem', color: 'black', marginLeft: '.6rem' };
    return <div key={uuidv4()} style={style}>&#9824;</div>
  }
  const style = { fontSize: '5rem', marginBottom: '4.5rem', color: 'black' };
  return (
    <div key={uuidv4()} style={style}>&#9824;</div>
  );
};
