import React from 'react';
import { connect } from 'react-redux';
import { startButtonHandler, hideSquares, patternGenerator } from '../actions/actions';


const StartButton = (props) => {
  const roundStarter = () => {
    const dim = props.dimension;
    const dimSquared = dim * dim;

    let pattern = [];
    let patternTotal = 0;

    const patternSelector = (dimSquared) => {
      pattern = [];


      for (let i = 0; i < dimSquared; i++) {
        const rand = Math.round(Math.random());
        pattern.push(rand);
      }

      return pattern;
    };

    const patternTotaler = (pattern) => patternTotal = pattern.reduce((total, curr) => total + curr);


    patternSelector(dimSquared);
    patternTotaler(pattern);

    const patternAdjuster = () => {
      while (patternTotal != dim) {
        patternSelector(dimSquared);
        patternTotaler(pattern);
      }

      return pattern;
    };

    patternAdjuster();

    props.dispatch(patternGenerator(pattern));
    props.dispatch(startButtonHandler());

    const emptyPattern = new Array(dimSquared).fill(0);

    setTimeout(() => props.dispatch(hideSquares(emptyPattern)), 1000);
  };

  return (
    <div className="start-button-container">
      <button
        onClick={roundStarter}
        disabled={!props.show}
        className="start-button"
      >
        START
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dimension: state.dimension,
  show: state.showStartButton,
});

export default connect(mapStateToProps)(StartButton);
