import React, { createContext } from 'react';

import useCounter from '../hooks/useCounter';

export const CounterContext = createContext(null);

export const CounterContextProvider = ({ children }) => {
  const { counter, setCounter } = useCounter();

  const counterValue = { counter, setCounter };

  return (
    <CounterContext.Provider value={counterValue}>{children}</CounterContext.Provider>
  );
};
