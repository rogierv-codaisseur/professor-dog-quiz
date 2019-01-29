const reducer = (state = {}, action = {}) => {
	switch (action.type) {
		case 'SHOW_DOGS':
			return {dog: action.payload};
		default:
			return state;
	}
};

export default reducer;
