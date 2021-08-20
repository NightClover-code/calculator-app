import { useState, createContext, useEffect } from 'react';
import { counterState } from '../types';

export const CounterContext = createContext<counterState>({
  counter: 0,
  setCounter: () => '',
});

export const CounterProvider: React.FC = ({ children }) => {
  const [counter, setCounter] = useState<number | null>(0);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
