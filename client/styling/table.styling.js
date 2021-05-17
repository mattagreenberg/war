import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 65rem;
  height: 35rem;
  position: relative;
  border-bottom-left-radius: 35rem;
  border-bottom-right-radius: 35rem;
  border: 10px solid gray;
  position: absolute;
  right: 12rem;
  top: 0;
  background: #142915;
  box-shadow: 0 0 30px rgba(0,0,0,.15) inset,
      				0 6px 10px rgba(0,0,0,.15);
`;

export const ChipContainer = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 100px;
  border: 5px solid grey;
  position: absolute;
  bottom: 3rem;
  right: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WagerAmount = styled.div`
  position: absolute;
  right: 45.5%;
  bottom: 20rem;
  color: white;
`;

export const DealerDeck = styled.div`
  position: absolute;
  top: 4rem;
  left: 5rem;
  width: fit-content;
  height: fit-content;
`;

export const HandsContainer = styled.div`
  position: absolute;
  top: 4rem;
  right: 29rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 20rem;
  width: fit-content;
`;

export const DealerHand = styled.div`
  border: 3px solid grey;
  height: 9.5rem;
  width: 7rem;
  border-radius: 5px;
`;

export const PlayerHand = styled.div`
  border: 3px solid grey;
  height: 9.5rem;
  width: 7rem;
  border-radius: 5px;
`;

export const WarContainer = styled.div`
  position: absolute;
  top: 4rem;
  right: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 20rem;
  width: fit-content;
`;

export const DealerWarHand = styled.div`
  height: 9.5rem;
  width: 17rem;
  border-radius: 5px;
`;

export const PlayerWarHand = styled.div`
  height: 9.5rem;
  width: 17rem;
  border-radius: 5px;
`;

const fadeIn = keyframes`
  0% { 
    opacity: 0; 
  }
  100% { 
    opaacity: 1; 
  }
`;

export const HandResult = styled.div`
  position: absolute;
  right: 15rem;
  top: 13rem;
  color: yellow;
  font-size: 5rem;
  height: fit-content;
  width: fit-content;
  z-index: 2;
  -moz-animation: 7s ${fadeIn} ease-out;
  animation: 7s ${fadeIn} ease-out; 
  font-weight: bold;
`;
