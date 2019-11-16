import React, { useContext } from 'react';

import Question from './Question';

import GameContext from '../contexts/GameContext';

const Game = () => {
  const gameContext = useContext(GameContext);
  const game = gameContext.game;

  return <Question question={game.questions[0]} />
}

export default Game;  
