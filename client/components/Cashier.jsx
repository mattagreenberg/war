import * as React from 'react';
import { useTheme } from '../context/themeContext';
import { useBalance } from '../context/balanceContext';
import { useAuth } from '../context/authContext';
import {
  Container,
  Radio,
  RadioGroup,
  Label,
  Form,
  Amount,
  TextArea,
  ApplyBtn,
  CancelBtn,
  BtnContainer,
  BalanceDetails,
  BalanceText,
  BalanceAmount
} from '../styling/Cashier.styling';

export default function Cashier({ handleCashier }) {
  const { theme } = useTheme();
  const { balance, tableBalance, updateTableBalance, updateBalance, updateBalanceInDb } = useBalance();
  const { data } = useAuth();

  const [amount, setAmount] = React.useState('');
  const [location, setLocation] = React.useState('');

  const handleInputChange = (event) => {
    setAmount(event.target.value);
  };

  const handleRadioChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (location === 'table') {
      if (amount > balance) {
        updateTableBalance('add', Number(balance));
        updateBalance('subtract', Number(balance));
        handleCashier();
        if (data.user.username === 'guest') return;
        updateBalanceInDb(balance - Number(amount), data.user.username);
        return;
      }
      updateTableBalance('add', Number(amount));
      updateBalance('subtract', Number(amount));
      if (data.user.username === 'guest') {
        handleCashier();
        return;
      }
      updateBalanceInDb(balance - Number(amount), data.user.username);
    } else if (location === 'balance') {
      if (amount > tableBalance) {
        updateTableBalance('subtract', Number(tableBalance));
        updateBalance('add', Number(tableBalance));
        handleCashier();
        if (data.user.username === 'guest') return;
        updateBalanceInDb(balance + Number(amount), data.user.username);
        return;
      }
      updateTableBalance('subtract', Number(amount));
      updateBalance('add', Number(amount));
      if (data.user.username === 'guest') {
        handleCashier();
        return;
      }
      updateBalanceInDb(balance + Number(amount), data.user.username);
    };
    handleCashier();
  };

  const handleCancel = (event) => {
    event.preventDefault();
    handleCashier();
  };

  return (
    <Container theme={theme}>
      <BalanceDetails theme={theme}>
        <BalanceText>Balance:</BalanceText>
        <BalanceAmount>{balance}</BalanceAmount>
      </BalanceDetails>
      <BalanceDetails theme={theme}>
        <BalanceText>Table Balance:</BalanceText>
        <BalanceAmount>{tableBalance}</BalanceAmount>
      </BalanceDetails>
      <Form>
        <RadioGroup>
          <Radio type='radio' value='table' name='cashier' id='table' onChange={handleRadioChange} />
          <Label theme={theme} htmlFor='table'>Move to table</Label>
        </RadioGroup>
        <RadioGroup>
          <Radio type='radio' value='balance' name='cashier' id='balance'  onChange={handleRadioChange} />
          <Label theme={theme} htmlFor='balance'>Move to balance</Label>
        </RadioGroup>
        <TextArea>
          <Label theme={theme} htmlFor='amount'>Amount:</Label>
          <Amount type='text' name='amount' id='amount' value={amount} onChange={handleInputChange} />
        </TextArea>
        <BtnContainer>
          <CancelBtn theme={theme} onClick={handleCancel}>cancel</CancelBtn>
          <ApplyBtn onClick={handleSubmit} disabled={(amount.length > 0 && location.length > 0) ? false : true}>Apply</ApplyBtn>
        </BtnContainer>
      </Form>
    </Container>
  );
};