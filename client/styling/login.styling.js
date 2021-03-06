import styled from 'styled-components';

export const Main = styled.div`
  background-color: ${({theme}) => theme.primary};
`;

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 93%;
`;

export const Container = styled.div`
  height: 60%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginContainer = styled.div`
  height: 80%;
  min-height: 17rem;
  transition: ${props => props.signup ? 'none' : 'height 0.4s ease-out'};
  width: 20%;
  min-width: 20rem;
  border: none;
  padding-bottom: .5rem;
  box-shadow: ${({theme}) => theme.boxShadow};
  border-radius: 5px;
  display: ${props => props.signup ? 'none' : 'flex'};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transform: ${props => props.signup ? 'translateY(10%)' : 'none'};
  background-color: ${({theme}) => theme.secondary};
`;

export const SignupContainer = styled.div`
  height: ${props => props.signup ?  '90%' : '15%'};
  min-height: ${props => props.signup ?  '17rem' : '3rem'};
  width: 20%;
  min-width: 20rem;
  border: none;
  box-shadow: ${({theme}) => theme.boxShadow};
  border-radius: 5px;
  margin-top: .5rem;
  font-size: .7rem;
  background-color: ${({theme}) => theme.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  font-size: 1rem;
  height: fit-content;
  text-align: center;
  margin-top: .5rem;
`;

export const X = styled.div`
  height: .8rem;
  width: 100%;
  text-align: right;
  cursor: pointer;
  color: #f7f7f7;
  margin-right: 2.5rem;
`;

export const SignupText = styled.div`
  color: #282929;
  height: fit-content;
  width: fit-content;
`;
