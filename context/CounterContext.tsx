import { useState, createContext } from 'react';
import { CounterState } from '../types';

export const CounterContext = createContext<CounterState>({
  counter: 0,
  setCounter: () => '',
});

export const CounterProvider: React.FC = ({ children }) => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
