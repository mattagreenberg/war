import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.primary};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8%;
`;

export const MenuContainer = styled.div`
  display: flex;
  alig-items: center;
  justify-content: space-between;
  height: 2.5rem;
  width: 10rem;
  margin-left: 2rem;
`;

export const MenuBtn = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  min-height: 2.5rem;
  min-width: 2.5rem;
  cursor: pointer;
  border-radius: 25px;
  &:hover {
    
  }
`;