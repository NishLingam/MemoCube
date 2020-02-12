const patternGenerator = (pattern) => ({
  type: 'PATTERN_GENERATOR',
  pattern,
});

const correctSelected = (id) => ({
  type: 'CORRECT_SELECTED',
  id,
});

const incorrectSelected = (id) => ({
  type: 'INCORRECT_SELECTED',
  id,
});

const gameOver = () => ({
  type: 'GAME_OVER',
});

const resetAll = () => ({
  type: 'RESET_ALL',
});

const hideSquares = (emptyPattern) => ({
  type: 'HIDE_SQUARES',
  emptyPattern,
});

const nextRound = () => ({
  type: 'NEXT_ROUND',
});

const startButtonHandler = () => ({
  type: 'START_BUTTON_HANDLER',
});

const levelUp = () => ({
  type: 'LEVEL_UP',
});

export {
  hideSquares, patternGenerator, correctSelected, incorrectSelected, gameOver, resetAll, nextRound, startButtonHandler, levelUp,
};
