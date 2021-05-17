import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { 
    transform: rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg); 
  }
`;

export const Loader = styled.div`
  border: 3px solid yellow;
  border-top: 3px solid #2e2d2e;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: ${spin} .8s linear infinite;
  margin-right: 1rem;
  z-index: 5;
  margin-top: 1.5rem;
`;

