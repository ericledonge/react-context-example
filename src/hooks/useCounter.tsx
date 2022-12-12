import { useState } from 'react';

const useCounter = () => {
  const [counter, setCounter] = useState(7);

  return { counter, setCounter };
};

export default useCounter;
