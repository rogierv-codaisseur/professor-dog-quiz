import * as request from "superagent";

export function getDogs() {
  return function(dispatch) {
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => response.body.message)
      .then(
        breeds =>
          Object.keys(breeds)[
            Math.floor(Math.random() * Object.keys(breeds).length)
          ]
      )
      .then(breedName => dispatch(getBreedPhoto(breedName)));
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

const SHOW_PHOTO = "SHOW_PHOTO";

export function getBreedPhoto(breedName) {
  return function(dispatch) {
    request
      .get(`https://dog.ceo/api/breed/${breedName}/images/random`)
      .then(response => dispatch(showBreedPhoto(breedName, response.body.message)));
  };
}

export function showBreedPhoto(breedName, url) {
  console.log(breedName);
  return {
    type: SHOW_PHOTO,
    payload: {
      name: breedName,
      imageUrl: url
    }
  };
}
