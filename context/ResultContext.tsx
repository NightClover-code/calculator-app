import { createContext, useState } from 'react';
import { ResultState } from '../types';

export const ResultContext = createContext<ResultState>({
  result: '',
  setResult: () => 0,
});

export const ResultProvider: React.FC = ({ children }) => {
  const [result, setResult] = useState<string>('  ');

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};
