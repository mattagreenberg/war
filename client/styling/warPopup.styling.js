import styled from 'styled-components';

export const Container = styled.div`
  height: 10rem;
  width: 15rem;
  position: absolute;
  right: 10rem;
  top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Text = styled.p`
  height: fit-content;
  color: white;
  text-align: center;
`;

export const WarBtn = styled.button`
  width: 5rem;
  height: 1.5rem;
  border-radius: 5px;
  background: yellow;
  border: none;
  cursor: pointer;
  color: black;
  z-index: 2;
`;

export const ForfeitBtn = styled(WarBtn)`
  background: none;
  color: white;
`;

export const BtnContainer = styled.div`
  display: flex;
  justfy-content: space-evenly;
  align-items: center;
  height: fit-content;
  width: fit-content;
`;