import React from 'react';
import { connect } from 'react-redux';
import { gameOver, correctSelected, incorrectSelected } from '../actions/actions';


const MiniSquare = (props) => {
  let classStatus;
  let disabledHandler = false;

  if (props.correctMatches.indexOf(props.id) !== -1) {
    classStatus = 'mini-square-correct';
    disabledHandler = true;
  } else if (props.incorrectMatches.indexOf(props.id) !== -1) {
    classStatus = 'mini-square-incorrect';
  } else if (props.generatedPattern[props.id] === 0) {
    classStatus = 'mini-square-inactive';
  } else if (props.generatedPattern[props.id] === 1) {
    classStatus = 'mini-square-active';
    disabledHandler = true;
  } else {
    classStatus = 'mini-square-inactive';
  }

  const correctSquareChecker = () => {
    if (props.correctPattern[props.id] === 1) {
      props.dispatch(correctSelected(props.id));
    } else if (props.correctPattern[props.id] === 0) {
      props.dispatch(incorrectSelected(props.id));
      setTimeout(() => {
        props.dispatch(gameOver());
      }, 400);
    }
  };


  return (
    <div className="mini-square">
      <button
        className={classStatus}
        onClick={correctSquareChecker}
        disabled={disabledHandler}
      />
    </div>
  );
};


const mapStateToProps = (state) => ({
  generatedPattern: state.generatedPattern,
  correctPattern: state.correctPatternStore,
  correctCounter: state.correctCounter,
  correctMatches: state.correctMatches,
  incorrectMatches: state.incorrectMatches,
  gameOver: state.gameOver,
  dimension: state.dimension,
  levelCounter: state.levelCounter,
});


export default connect(mapStateToProps)(MiniSquare);
