import React, { useReducer } from 'react';
import { CssBaseline, Container, Paper, Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../theme';
import MainMenu from './MainMenu';
import ScoreBoard from './ScoreBoard';
import Game from './Game';

import gameState from '../states/gameState';
import configState from '../states/configState';

const App = () => {
  const [game, gameDispatch] = useReducer(gameState.reducer, gameState.initial);
  const [config, configDispatch] = useReducer(configState.reducer, configState.initial);

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box mt={4}>
      <Container maxWidth="sm">
        <Paper>
          <Box p={2}>

            {
              game.questions.length > 0
                ? <Game game={game} gameDispatch={gameDispatch} />
                : <MainMenu config={config} configDispatch={configDispatch} gameDispatch={gameDispatch} />
            }

          </Box>
        </Paper>

        <ScoreBoard score={game.score} />

      </Container>
    </Box>
    </ThemeProvider>
  );
};


export default App;
