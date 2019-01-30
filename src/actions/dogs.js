import * as request from "superagent";

export function getDogs() {
  return function(dispatch) {
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => response.body.message)
      .then(dogs => {
        dispatch(showDogsList(dogs));
      });
  };
}

const SHOW_DOGS = "SHOW_DOGS";

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

export function getRandomDogsAndPhoto(allDogs) {
  const threeRandomDogs = pickRandomDogs(Object.keys(allDogs));
  return function(dispatch) {
    request
      .get(`https://dog.ceo/api/breed/${threeRandomDogs[0]}/images/random`)
      .then(response =>
        dispatch(
          sendRandomDogsWithPhoto(threeRandomDogs, response.body.message)
        )
      );
  };
}

export function sendRandomDogsWithPhoto(randomDogs, url) {
  return {
    type: "SHOW_PHOTO",
    payload: {
      goodDog: randomDogs[0],
      badDog1: randomDogs[1],
      badDog2: randomDogs[2],
      imageUrl: url
    }
  };
}
