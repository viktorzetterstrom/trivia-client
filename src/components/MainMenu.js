import React, { useContext } from 'react';
import { Box, Typography, Button, ButtonGroup } from '@material-ui/core';

import ConfigContext from '../contexts/ConfigContext';
import GameContext from '../contexts/GameContext';
import triviaService from '../trivia-service';

const difficulties = ['easy', 'medium', 'hard'];
const numberOfQuestions = [10, 20, 30];


const MainMenu = () => {
  const configContext = useContext(ConfigContext);
  const gameContext = useContext(GameContext);

  const changeDifficulty = (d) => configContext.setConfig({...configContext.config, difficulty: d});
  const changeNumberOfQuestions = (q) => configContext.setConfig({...configContext.config, numberOfQuestions: q});
  const startGame = async () => gameContext.setGame({
    ...gameContext.config, 
    running: true,
    questions: await triviaService.questions(configContext.config),
  });

  return (
    <>
      <Box m={2}>
        <Typography variant="h4" component="h1">Zetterström Trivia</Typography>
      </Box>
      <Box m={2}>
        <Typography variant="h5" component="p">Difficulty</Typography>
        <ButtonGroup 
          fullWidth
          variant="contained"
          size="large"
          aria-label="full width contained primary button group">
            {
              difficulties.map((d, i) => <Button
                onClick={() => changeDifficulty(d)}
                key={i}
                color={d === configContext.config.difficulty ? 'primary' : ''}>
                  {d}
              </Button>)
            }
        </ButtonGroup>
      </Box>

      <Box m={2}>
        <Typography variant="h5" component="p">Questions</Typography>
        <ButtonGroup 
          fullWidth
          variant="contained"
          size="large"
          aria-label="full width contained primary button group">
            {
              numberOfQuestions.map((q, i) => <Button 
              onClick={() => changeNumberOfQuestions(q)}
                key={i}
                color={q === configContext.config.numberOfQuestions ? 'primary' : ''}>
                  {q}
              </Button>)
            }
        </ButtonGroup>
      </Box>

      <Box m={2}>
        <Button
          fullWidth
          onClick={() => startGame()}
          variant="contained"
          color="secondary"
          size="large">
            Start
          </Button>
      </Box>
    </>
  )
};

export default MainMenu;
