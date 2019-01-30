const initialState = {available: [], unused: []}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "INCREASE_DOGS":
      return action.payload;
    default:
      return state;
  }
};

export default reducer
