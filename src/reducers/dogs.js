const reducer = (state = [], action = {}) => {
	switch (action.type) {
		case 'SHOW_DOGS':
			return [...state, action.payload];
		default:
			return state;
	}
};

export default reducer;
