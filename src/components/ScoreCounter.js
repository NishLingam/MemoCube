import React from 'react';

const ScoreCounter = (props) => (

  <div className="score-counter">
    Score:
    {' '}
    {props.score}
  </div>
);

export default ScoreCounter;
