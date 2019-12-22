import React from 'react';

import Question from './Question';
import ProgressBar from './ProgressBar';

const Game = ({game, gameDispatch}) => {

  const answerHandler = answer => gameDispatch({
    type: 'answer question',
    answer
  })

  return (
    <>
      <ProgressBar />
      <Question question={game.activeQuestion} answerHandler={answerHandler} />
    </>
  )
}

export default Game;  
