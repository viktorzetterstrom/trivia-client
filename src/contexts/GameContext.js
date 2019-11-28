import { createContext } from 'react';

export const gameStartingContext = {
  mode: undefined,
  score: 0,
  questionIndex: 0,
  questions: undefined,
};

export default createContext(gameStartingContext);
