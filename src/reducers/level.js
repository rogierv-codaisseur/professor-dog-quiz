const reducer = (state = 1, action = {}) => {
  switch (action.type) {
    case "INCREASE_LEVEL":
      return state + 1;
    default:
      return state;
  }
};

export default reducer;
