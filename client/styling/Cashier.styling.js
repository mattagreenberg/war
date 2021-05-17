import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 40rem;
  top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 25rem;
  width: 18rem;
  border-radius: 5px;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 0 30px rgba(0,0,0,.15) inset,
            0 6px 10px rgba(0,0,0,.15);
  z-index: 4;
`;

export const Radio = styled.input`
  height: fit-content;
  width: fit-content;
  color: white;
`;

export const RadioGroup = styled.div`
  width: 12rem;
`;

export const Label = styled.label`
  margin-left: 1rem;
  color: ${({ theme }) => theme.secondaryLabel};
`;

export const Form = styled.form`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Amount = styled.input`
  height: 3rem;
  border: none;
  width: 7rem;
  border-radius: 5px;
  background: black;
  color: #32c232;
  text-align: right;
  padding-right: .3rem;
  padding-top: .3rem;
  &:focus {
    outline: none;
  };
`;

export const TextArea = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const ApplyBtn = styled.button`
  width: 6rem;
  height: 2rem;
  border-radius: 5px;
  background: yellow;
  border: none;
  cursor: pointer;
  color: #282929;
  box-shadow: 0 0 30px rgba(0,0,0,.15) inset,
      				0 6px 10px rgba(0,0,0,.15);
`;

export const CancelBtn = styled(ApplyBtn)`
  background: none;
  color: white;
  color: ${({ theme }) => theme.secondaryLabel};
`;

export const BtnContainer = styled.div`
  height: fit-content;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
`;

export const BalanceDetails = styled.div`
  height: fit-content;
  width: 12rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.secondaryLabel};
`;

export const BalanceText = styled.p`

`;

export const BalanceAmount = styled.p`

`;