import { SetStateAction, Dispatch } from 'react';

export interface counterState {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}
