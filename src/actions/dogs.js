import * as request from 'superagent';

export function getDogs() {
  return function(dispatch) {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => response.body.message)
      .then(dogs => {
        dispatch(showDogsList(dogs));
      });
  };
}

const SHOW_DOGS = 'SHOW_DOGS';

export function showDogsList(dogs) {
  return {
    type: SHOW_DOGS,
    payload: {
      dogs: dogs
    }
  };
}

function pickRandomDogs(dogs) {
  const randomDog = dogs[Math.floor(Math.random() * dogs.length)];
  const newDogs = dogs.filter(dog => dog !== randomDog);
  const randomDogName = newDogs[Math.floor(Math.random() * newDogs.length)];
  const newNewDogs = newDogs.filter(dog => dog !== randomDogName);
  const otherRandomDogName =
    newNewDogs[Math.floor(Math.random() * newNewDogs.length)];
  return [randomDog, randomDogName, otherRandomDogName];
}

export function getRandomDogsAndPhoto(availableDogs) {
  const threeRandomIndices = pickRandomDogs(Object.keys(availableDogs));
  return function(dispatch) {
    const goodDogPhoto = request.get(
      `https://dog.ceo/api/breed/${
        availableDogs[threeRandomIndices[0]]
      }/images/random`
    );
    const badDog1Photo = request.get(
      `https://dog.ceo/api/breed/${
        availableDogs[threeRandomIndices[1]]
      }/images/random`
    );
    const badDog2Photo = request.get(
      `https://dog.ceo/api/breed/${
        availableDogs[threeRandomIndices[2]]
      }/images/random`
    );
    Promise.all([goodDogPhoto, badDog1Photo, badDog2Photo]).then(responses =>
      dispatch(
        sendRandomDogsWithPhoto(
          [
            availableDogs[threeRandomIndices[0]],
            availableDogs[threeRandomIndices[1]],
            availableDogs[threeRandomIndices[2]]
          ],
          [
            responses[0].body.message,
            responses[1].body.message,
            responses[2].body.message
          ]
        )
      )
    );
  };
}

export function sendRandomDogsWithPhoto(randomDogs, urls) {
  return {
    type: 'SHOW_PHOTO',
    payload: {
      goodDog: randomDogs[0],
      badDog1: randomDogs[1],
      badDog2: randomDogs[2],
      goodDogUrl: urls[0],
      badDog1Url: urls[1],
      badDog2Url: urls[2]
    }
  };
}

export function sendAvailableDogs(availableDogs) {
  return {
    type: 'INCREASE_DOGS',
    payload: availableDogs
  };
}

export function increaseLevel() {
  return {
    type: 'INCREASE_LEVEL',
    payload: {}
  };
}

export function updateSeenDogs(dog) {
  return {
    type: "DOG_SEEN",
    payload: dog
  };
}
