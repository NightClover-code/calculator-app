import { SetStateAction, Dispatch } from 'react';

export interface counterState {
  counter: number | null;
  setCounter: Dispatch<SetStateAction<number | null>>;
}
