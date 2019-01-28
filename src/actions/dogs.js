import * as request from 'superagent';

export function getDogs() {
	return function(dispatch) {
		request.get('https://dog.ceo/api/breeds/list/all').then(response => console.log(response.body));
	};
}

const SHOW_DOGS = 'SHOW_DOGS';

export function showDogsList(dogs) {
	return {
		type: SHOW_DOGS,
		payload: {
			dogs: dogs,
		},
	};
}

//dispatch(showDogsList(response.body))
