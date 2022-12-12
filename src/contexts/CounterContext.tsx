import React, { createContext } from 'react';

import useCounter from '../hooks/useCounter';

export const CounterContext = createContext(null);

export const CounterContextProvider = ({ children }) => {
  const counterValue = useCounter();

  return (
    <CounterContext.Provider value={counterValue}>{children}</CounterContext.Provider>
  );
};
