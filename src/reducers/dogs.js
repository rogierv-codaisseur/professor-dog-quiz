const reducer = (state = [], action = {}) => {
	switch (action.type) {
		case 'SHOW_DOGS':
			return action.payload.dogs;
		default:
			return state;
	}
};

export default reducer;


