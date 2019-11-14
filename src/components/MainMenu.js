import React from 'react';
import { Box, Typography, Button, ButtonGroup } from '@material-ui/core';


const MainMenu = () => (
  <>
    <Box m={2}>
      <Typography variant="h5" component="p">Difficulty</Typography>
      <ButtonGroup 
        fullWidth
        variant="contained"
        size="large"
        aria-label="full width contained primary button group">
          <Button>Easy</Button>
          <Button>Medium</Button>
          <Button color="primary">Hard</Button>
      </ButtonGroup>
    </Box>

    <Box m={2}>
      <Typography variant="h5" component="p">Questions</Typography>
      <ButtonGroup 
        fullWidth
        variant="contained"
        size="large"
        aria-label="full width contained primary button group">
          <Button color="primary">10</Button>
          <Button>20</Button>
          <Button>30</Button>
      </ButtonGroup>
    </Box>

    <Box m={2}>
      <Button
        fullWidth
        variant="contained"
        color="Secondary"
        size="large">
          Start
        </Button>
    </Box>
  </>
)

export default MainMenu;
