import { createContext } from 'react';

export const configStartingValues = {
  difficulty: "medium",
  amount: 20,
}

export default createContext(configStartingValues);
