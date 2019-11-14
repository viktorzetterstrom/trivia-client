import { createContext } from 'react';

export const configStartingValues = {
  difficulty: "easy",
  numberOfQuestions: 10,
}

export default createContext(configStartingValues);
