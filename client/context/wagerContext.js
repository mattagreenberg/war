import * as React from 'react';

const WagerContext = React.createContext({});

function WagerProvider(props) {
  const [wager, setWager] = React.useState([]);

  const resetWager = () => {
    setWager([]);
  };

  const addWager = (value) => {
    setWager([...wager, value]);
  };

  const removeLast = () => {
    if (wager.length) {
      setWager(wager.slice(0, wager.length - 1))
    }
  }

  const wagerContextValues = {
    wager,
    resetWager,
    addWager,
    removeLast
  };

  return <WagerContext.Provider value={wagerContextValues} {...props} />
};

function useWager() {
  return React.useContext(WagerContext);
};

export { WagerProvider, useWager };