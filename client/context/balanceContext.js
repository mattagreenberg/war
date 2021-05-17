import * as React from 'react';
import * as balanceClient from '../utils/balanceClient';

const BalanceContext = React.createContext({});

function BalanceProvider(props) {
  const [balance, setBalance] = React.useState(0);
  const [tableBalance, setTableBalance] = React.useState(0);

  const updateBalance = (type, amount) => {
    if (type === 'add') {
      setBalance(balance + amount)
    } else if (type === 'subtract') {
      setBalance(balance - amount);
    }
  };

  const updateTableBalance = (type, amount) => {
    if (type === 'add') {
      setTableBalance(tableBalance + amount);
    } else if (type === 'subtract') {
      setTableBalance(tableBalance - amount);
    }
  };

  const updateBalanceInDb = async (balance, username) => {
    console.log('in balance db update', balance, username);
    await balanceClient.updateBalance(balance, username);
  };

  const playerWin = (amount) => {
    setTableBalance(tableBalance + (amount * 2));
  };

  const dealerWin = (amount) => {
    
  };

  const war = () => {

  };

  const setUserBalance = async (username) => {
    const response = await balanceClient.getBalance(username);
    const userBalance = await response.json();
    setBalance(userBalance);
  };

  const balanceContextValues = {
    balance,
    tableBalance,
    updateBalance,
    updateBalanceInDb,
    updateTableBalance,
    playerWin,
    dealerWin,
    war,
    setUserBalance
  };

  return <BalanceContext.Provider value={balanceContextValues} {...props} />
};

function useBalance() {
  return React.useContext(BalanceContext)
}

export { BalanceProvider, useBalance };