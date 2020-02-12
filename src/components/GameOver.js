import React from 'react';
import { connect } from 'react-redux';
import { resetAll } from '../actions/actions';


const GameOver = (props) => {
  const reset = () => {
    props.dispatch(resetAll());
  };


  return (
    <div className="game-over-container">
      <h1 className="game-over"> GAME OVER </h1>

      <button onClick={reset} className="start-button" type="button"> Try again </button>
      <h1 className="final-score">
        {' '}
        Final Score:
        {' '}
        {props.score}
        {' '}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  score: state.score,
});

export default connect(mapStateToProps)(GameOver);
