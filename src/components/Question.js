import React from 'react';
import { Button, Box, Typography } from '@material-ui/core';


const QuestionButton = ({ text }) => (
  <Button variant="contained" size="large" color="primary">
    {text}
  </Button>
);

const Question = ({ question }) => (
  <Box>
    <Typography variant="h4">
      {question.question}
    </Typography>
    {
      question.alternatives.map((alternative, i) => (
        <Box key={i} m={1}>
          <QuestionButton text={ alternative } />
        </Box>
      ))
     }
  </Box>
);

export default Question;