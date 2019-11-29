import React from 'react';
import { Button, Box, Typography } from '@material-ui/core';

const QuestionButton = (props) => (
  <Button variant="contained" size="large" color="primary" {...props}>
    {props.text}
  </Button>
);

const Question = ({ question, answerHandler }) => (
  <>
    <Box p={2}>
      <Typography variant="body1">{question.category} - {question.difficulty}</Typography>
      <Typography variant="h5" component="h2">{question.question}</Typography>
    </Box>
    <Box p={2} display="flex" flexDirection="column">
      {
        question.alternatives.map((alternative, i) => (
          <QuestionButton key={i} text={`${i+ 1} - ${alternative}`} onClick={() => answerHandler(alternative)} />
        ))
      }
    </Box>
  </>
);

export default Question;