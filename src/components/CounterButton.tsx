import React, { useContext } from 'react';

import { CounterContext } from '../contexts/CounterContext';

const CounterButton = () => {
  const { setCounter } = useContext(CounterContext);

  const handleClick = () => setCounter((prev) => prev + 1);

  return <button onClick={handleClick}>Increment</button>;
};

export default CounterButton;
