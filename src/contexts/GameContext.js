import { createContext } from 'react';

export const gameStartingValues = {
  mode: null,
  score: 0,
  currentQuestion: 0,
  questions: null,
};

export default createContext(gameStartingValues);
