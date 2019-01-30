const reducer = (state = false, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_HARD_MODE':
      return !state;
    default:
      return state;
  }
};

export default reducer;
