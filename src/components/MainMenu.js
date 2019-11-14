import React, { useContext } from 'react';
import { Box, Typography, Button, ButtonGroup } from '@material-ui/core';

import ConfigContext from '../contexts/ConfigContext';

const difficulties = ['easy', 'medium', 'hard'];
const numberOfQuestions = [10, 20, 30];


const MainMenu = () => {
  const configContext = useContext(ConfigContext);

  return (
    <>
      <Box m={2}>
        <Typography variant="h5" component="p">Difficulty</Typography>
        <ButtonGroup 
          fullWidth
          variant="contained"
          size="large"
          aria-label="full width contained primary button group">
            {
              difficulties.map((d, i) => <Button 
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
              numberOfQuestions.map((d, i) => <Button 
                key={i}
                color={d === configContext.config.numberOfQuestions ? 'primary' : ''}>
                  {d}
              </Button>)
            }
        </ButtonGroup>
      </Box>

      <Box m={2}>
        <Button
          fullWidth
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
