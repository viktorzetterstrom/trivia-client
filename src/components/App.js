import React, { useState } from 'react';
import { CssBaseline, Container, Paper, Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../theme';
import MainMenu from './MainMenu';
import GameContext, { gameStartingValues } from '../contexts/GameContext';
import ConfigContext, { configStartingValues } from '../contexts/ConfigContext';
import Game from './Game';

const App = () => {
  const [game, setGame] = useState(gameStartingValues);
  const [config, setConfig] = useState(configStartingValues);

  return (
    <ConfigContext.Provider value={{config, setConfig}}>
    <GameContext.Provider value={{game, setGame}}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box m={4}>
      <Container maxWidth="sm">
        <Paper>
          <Box p={2}>

            {
              game.running
                ? <Game />
                : <MainMenu />
            }

          </Box>
        </Paper>
      </Container>
    </Box>
    </ThemeProvider>
    </GameContext.Provider>
    </ConfigContext.Provider>
  );
};


export default App;
