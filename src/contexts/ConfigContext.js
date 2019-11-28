import { createContext } from 'react';

export const configStartingContext = {
  difficulty: "medium",
  amount: 20,
}

export default createContext(configStartingContext);
