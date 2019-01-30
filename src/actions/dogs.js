import * as request from 'superagent';

function randomDogs(dogs) {
	const randomDog = dogs[Math.floor(Math.random() * dogs.length)];
	const newDogs = dogs.filter(dog => dog !== randomDog);
	const randomDogName = newDogs[Math.floor(Math.random() * newDogs.length)];
	const newNewDogs = newDogs.filter(dog => dog !== randomDogName);
	const otherRandomDogName = newNewDogs[Math.floor(Math.random() * newNewDogs.length)];
	return [randomDog, randomDogName, otherRandomDogName];
}

export function getDogs() {
	return function(dispatch) {
		request
			.get('https://dog.ceo/api/breeds/list/all')
			.then(response => response.body.message)
			.then(dogs => {
				dispatch(showDogsList(dogs));
				return dogs;
			})
			.then(randomNewDog => randomDogs(Object.keys(randomNewDog)))
			.then(breedName => dispatch(getBreedPhoto(breedName)));
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

const SHOW_PHOTO = 'SHOW_PHOTO';

export function getBreedPhoto(breedName) {
	return function(dispatch) {
		request
			.get(`https://dog.ceo/api/breed/${breedName[0]}/images/random`)
			.then(response => dispatch(showBreedPhoto(breedName, response.body.message)));
	};
}

export function showBreedPhoto(breedName, url) {
	//console.log(breedName);
	return {
		type: SHOW_PHOTO,
		payload: {
			goodDog: breedName[0],
			badDog1: breedName[1],
			badDog2: breedName[2],
			imageUrl: url,
		},
	};
}
