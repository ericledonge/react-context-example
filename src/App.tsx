import './App.css';

import React from 'react';

import CounterButton from './components/CounterButton';
import CounterDisplay from './components/CounterDisplay';
import { CounterContextProvider } from './contexts/CounterContext';

function App(): JSX.Element {
  return (
    <div>
      <CounterContextProvider>
        <CounterDisplay />
        <CounterButton />
      </CounterContextProvider>
    </div>
  );
}

export default App;
