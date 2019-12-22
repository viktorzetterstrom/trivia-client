import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const calculateProgress = (game) => game.questions.length > 0
  ? ((game.config.amount - game.questions.length - 1) / game.config.amount) * 100
  : 0;

export default ({ game }) => (
  <LinearProgress variant="determinate" value={calculateProgress(game)} />
);
