import React from 'react';
import { connect } from 'react-redux';
import TotalSquare from './TotalSquare';
import StartButton from './StartButton';
import ScoreCounter from './ScoreCounter';
import GameOver from './GameOver';


const MemoryApp = (props) => (

  <div>
    {!props.gameOver
            && (
            <div className="game-container">
              <h1 className="title"> MemoCube </h1>
              <TotalSquare />
              <StartButton />
              <ScoreCounter score={props.score} />
            </div>
            )}
    {props.gameOver && <GameOver />}
  </div>


);

const mapStatetoProps = (state) => ({
  showButton: state.showStartButton,
  score: state.score,
  correctSquares: state.correctSquares,
  correctCounter: state.correctCounter,
  gameOver: state.gameOver,
  levelCounter: state.levelCounter,
  dimension: state.dimension,
});


export default connect(mapStatetoProps)(MemoryApp);
