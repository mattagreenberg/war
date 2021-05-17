import * as React from 'react';
import { useTheme } from '../context/themeContext';
import { useBalance } from '../context/balanceContext';
import { useAuth } from '../context/authContext';
import {
  Container,
  BalanceText,
  BalanceBox,
  Label,
  CashierBtn
} from '../styling/balanceScreen.styling';

export default function BalanceScreen({ handleCashier }) {
  const { theme } = useTheme();
  const { data } = useAuth();
  const { balance, tableBalance, setUserBalance, updateBalance } = useBalance();

  React.useEffect(() => {
    if (data.user.username === 'guest') {
      updateBalance('add', 100);
      return;
    };
    setUserBalance(data.user.username)
  }, []);

  return (
    <Container theme={theme}>
      <Label theme={theme}>Balance:</Label>
      <BalanceBox>
        <BalanceText>{balance}</BalanceText>
      </BalanceBox>
      <Label theme={theme}>Table Balance:</Label>
      <BalanceBox>
        <BalanceText>{tableBalance}</BalanceText>
      </BalanceBox>
      <CashierBtn onClick={handleCashier}>CASHIER</CashierBtn>
    </Container>
  );
};