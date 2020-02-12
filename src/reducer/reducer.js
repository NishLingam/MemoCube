
const defaultState = {
  generatedPattern: [],
  correctPatternStore: [],
  correctMatches: [],
  incorrectMatches: [],
  showStartButton: true,
  score: 0,
  correctCounter: 0,
  gameOver: false,
  dimension: 2,
  dimensionArray: [0, 1],
  levelCounter: 0,
};


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PATTERN_GENERATOR':
      return {
        ...state,
        generatedPattern: action.pattern,
        correctPatternStore: action.pattern,
      };
    case 'CORRECT_SELECTED':
      return {
        ...state,
        correctCounter: state.correctCounter + 1,
        correctMatches: [...state.correctMatches, action.id],
      };
    case 'INCORRECT_SELECTED':
      return {
        ...state,
        incorrectMatches: [action.id],
      };
    case 'GAME_OVER':
      return {
        ...state,
        gameOver: true,
      };
    case 'RESET_ALL':
      return {
        ...defaultState,
      };
    case 'HIDE_SQUARES':
      return {
        ...state,
        generatedPattern: action.emptyPattern,
      };
    case 'LEVEL_UP':
      return {
        ...defaultState,
        dimension: state.dimension + 1,
        dimensionArray: [...state.dimensionArray, state.dimension],
        levelCounter: 0,
        score: state.score + 1,
        showStartButton: false,
      };
    case 'NEXT_ROUND':
      return {
        ...defaultState,
        dimension: state.dimension,
        dimensionArray: state.dimensionArray,
        score: state.score + 1,
        levelCounter: state.levelCounter + 1,
        showStartButton: false,
      };
    case 'START_BUTTON_HANDLER':
      return {
        ...state,
        showStartButton: false,
      };
    default:
      return state;
  }
};

export default reducer;
