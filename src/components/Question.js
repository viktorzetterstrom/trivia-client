import React from 'react';
import { Button, Box, Typography } from '@material-ui/core';

const QuestionButton = ({ text }) => (
  <Button m={1} variant="contained" size="large" color="primary">
    {text}
  </Button>
);

const Question = ({ question }) => (
  <>
    <Box p={2}>
      <Typography variant="body1">{question.category} - {question.difficulty}</Typography>
      <Typography variant="h5" component="h2">{question.question}</Typography>
    </Box>
    <Box p={2} display="flex" flexDirection="column">
      {
        question.alternatives.map((alternative, i) => (
          <QuestionButton text={ `${i + 1} - ${alternative}` } />
        ))
      }
    </Box>
  </>
);

export default Question;