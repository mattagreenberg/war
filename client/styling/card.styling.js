import styled from 'styled-components';

export const Container = styled.div`
  height: 8.5rem;
  width: 6rem;
  min-width: 6rem;
  min-height: 7rem;
  display: flex;
  flex-direction: column;
  background: #eee;
  border-radius: 5px;
  font-family: 'Nanum Gothic Coding', monospace;
  font-size: 1.5rem;
  font-weight: bold;
  position: absolute;
  left: ${({ distance }) => distance};
  top: 0px;
  box-shadow: 0 0 30px rgba(0,0,0,.15) inset,
      				0 6px 10px rgba(0,0,0,.15);
`;

export const Header = styled.div`
  height: 20%;
  padding-left: .5rem;
  padding-top: .3rem;
  color: ${({ color }) => color};
`;

export const Body = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  align-self: center;
`;

export const Footer = styled.div`
  height: 20%;
  padding-left: .5rem;
  padding-top: .6rem;
  transform: rotate(180deg);
  color: ${({ color }) => color};
`;

export const CardBack = styled.div`
  border-radius: 4px; 
  background:
    radial-gradient(black 15%, transparent 16%) 0 0,
    radial-gradient(black 15%, transparent 16%) 8px 8px,
    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
  background-color:#282828;
  background-size:16px 16px;
`;

export const CardContainer = styled.div`
  position: relative;
  margin-left: .3rem;
  margin-top: .3rem;
`;