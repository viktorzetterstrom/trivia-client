import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import NavBar from './components/NavBar';
import Question from './components/Question';

const testQuestion = {
  "category": "Science: Computers",
  "type": "multiple",
  "difficulty": "easy",
  "question": "What does CPU stand for?",
  "correct": "Central Processing Unit",
  "alternatives": [
      "Central Processor Unit",
      "Computer Personal Unit",
      "Central Processing Unit",
      "Central Process Unit"
  ]
};


const App = () => (
  <Container>
    <CssBaseline />
    <NavBar />
    <Question question={testQuestion} />
  </Container>
);




export default App;
