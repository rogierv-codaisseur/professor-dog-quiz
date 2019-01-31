export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case "DOG_SEEN":
      return [...state, action.payload];
    default:
      return state;
  }
}
