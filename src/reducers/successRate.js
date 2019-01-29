const initialState = { CORRECT: 0, WRONG: 0 };

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_CORRECT':
      return { ...state, ...(state.CORRECT += 1) };
    case 'ADD_WRONG':
      return { ...state, ...(state.WRONG += 1) };
    default:
      return state;
  }
};

export default reducer;
