const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case "SHOW_PHOTO":
      return [...state, action.payload.imageUrl];
    default:
      return state;
  }
};

export default reducer;
