import { createContext } from 'react';

export const configStartingValues = {
  difficulty: "medium",
  numberOfQuestions: 20,
}

export default createContext(configStartingValues);
