import { createContext } from 'react';

export const gameStartingValues = {
  mode: undefined,
  score: 0,
  currentQuestion: 0,
  questions: undefined,
};

export default createContext(gameStartingValues);
