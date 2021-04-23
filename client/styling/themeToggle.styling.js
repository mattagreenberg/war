import styled from 'styled-components';

export const ThemeContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export const ThemeBox = styled.div`
  background-color: ${({theme}) => theme.themeToggle.box};
  opacity: 0.7;
  height: 1.8rem;
  min-width: 4rem;
  width: 5%;
  border-radius: 25px;
  margin-right: 2rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ThemeBtn = styled.div`
  min-height: 2.5rem;
  height: 2.5rem;
  min-width: 2.5rem;
  width: 2.5rem;
  border-radius: 25px;
  background-color: ${({theme}) => theme.themeToggle.btn};
  box-shadow: 1px 1px 1px #11151f;
  margin-left: ${({theme}) => theme.themeToggle.btnMargin};
  transition: .1s linear;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThemeIcon = styled.div`
  height: fit-content;
  text-align: center;
`;