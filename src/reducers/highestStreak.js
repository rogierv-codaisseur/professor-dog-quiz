const initialState = 0;

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_HIGHEST_STREAK':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
