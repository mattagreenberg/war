import styled from 'styled-components';

export const TextInput = styled.input`
  height: 2.7rem;
  width: 80%;
  text-indent: .5rem;
  margin-top: .5rem;
  border-radius: 5px;
  box-shadow: 0;
  outline: none;
  border: none;
  background-color: white;
`;

export const Form = styled.form`
  height: ${props => props.signup ? '50%' : '60%'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #282929;
`;

export const Button = styled.button`
  height: 1.7rem;
  width: 80%;
  margin-bottom: .3rem;
  margin-top: ${props => props.top ? '.8rem' : '0'};
  background-color: ${props => props.top ? '#74e87e' : '#e3e3e3'};
  border: none;
  border-radius: 5px;
  font-size: .7rem;
  cursor: pointer;
`;

export const ErrorMsg = styled.p`
  height: fit-content;
  color: red;
  font-size: .6rem;
  text-align: center;
  font-weight: bold;
`;

export const ErrorContainer = styled.div`
  height: 2rem;
`;