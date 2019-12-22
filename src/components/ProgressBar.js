import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const calculateProgress = (game) => game.activeQuestion !== undefined
  ? ((game.config.amount - game.questions.length) / game.config.amount) * 100
  : 0;

export default ({ game }) => (
  <LinearProgress variant="determinate" value={calculateProgress(game)} />
);
