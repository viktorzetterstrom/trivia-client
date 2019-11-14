import React, { useContext, createContext } from 'react';
import { CssBaseline, Container, Paper, Box, createMuiTheme } from '@material-ui/core';

import MainMenu from './components/MainMenu';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const GameContext = createContext({
  mode: null,
  score: 0,
  currentQuestion: 0,
  questions: null,
});

const ConfigContext = createContext({
  difficulty: "easy",
  numberOfQuestions: 10,
});


const App = () => (
  <ConfigContext.Provider>
  <GameContext.Provider>
  <ThemeProvider theme={theme}>
  <Box m={2}>
    <Container mt={2}maxWidth="md">
      <CssBaseline />
      <Paper>
        <Box p={2}>
          <MainMenu />
        </Box>
      </Paper>
    </Container>
  </Box>
  </ThemeProvider>
  </GameContext.Provider>
  </ConfigContext.Provider>
);




export default App;
