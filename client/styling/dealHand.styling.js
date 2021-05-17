import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 10rem;
  width: 12rem;
  border-radius: 5px;
  background: ${({ theme }) => theme.primary};
  margin-left: 2rem;
  margin-top: 2rem;
  box-shadow: 0 0 30px rgba(0,0,0,.15) inset,
      				0 6px 10px rgba(0,0,0,.15);
`;

export const WagerText = styled.p`
  height: fit-content;
  color: #32c232;
  text-align: right;
  padding-right: .3rem;
  padding-top: .3rem;
`;

export const WagerBox = styled.div`
  height: 2rem;
  width: 80%;
  border-radius: 5px;
  background: black;
`;

export const Label = styled.p`
  height: fit-content;
  color: ${({ theme }) => theme.secondaryLabel};
  margin-left: 2rem;
`;

export const DealBtn = styled.button`
  height: 2rem;
  width: 6rem;
  margin-top: .2rem;
  background: yellow;
  border: none;
  font-weight: bold;
  color: #282929;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 30px rgba(0,0,0,.15) inset,
      				0 6px 10px rgba(0,0,0,.15);
`;