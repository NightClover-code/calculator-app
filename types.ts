import { SetStateAction, Dispatch } from 'react';

export interface CounterState {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}

export interface ResultState {
  result: string;
  setResult: Dispatch<SetStateAction<string>>;
}
