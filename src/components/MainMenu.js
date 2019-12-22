import React from 'react';
import { Box, Typography, Button, ButtonGroup } from '@material-ui/core';

import triviaService from '../trivia-service';

const difficulties = ['easy', 'medium', 'hard'];
const numberOfQuestions = [10, 20, 30];

const MainMenu = ({ config, configDispatch, gameDispatch }) => {

  const changeDifficulty = (d) => configDispatch({
    type: `difficulty`,
    difficulty: d,
  });
  const changeNumberOfQuestions = (q) => configDispatch({
    type: `amount`,
    amount: q,
  });
  const startGame = async () => gameDispatch({
    type: 'set questions',
    questions: await triviaService.questions(config),
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
                color={d === config.difficulty ? 'primary' : ''}>
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
                color={q === config.amount ? 'primary' : ''}>
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
