import React, { Component } from 'react';
import DogQuiz from './DogQuiz.js';
import { getDogs, getBreedPhoto } from '../actions/dogs';
import { connect } from 'react-redux';

class DogQuizContainer extends Component {
	state = {};

	componentDidMount = () => {
		this.props.getDogs();
	};

	render() {
		if (!this.props.image) return 'Loading photos...';
		return <DogQuiz image={this.props.image} dogs={this.props.dogs} />;
	}
}

const mapStateToProps = state => ({
	dogs: state.dogs,
	image: state.images,
});

export default connect(
	mapStateToProps,
	{ getDogs, getBreedPhoto }
)(DogQuizContainer);

/**
 * 
function getRandomName(dogs) {
	const dog = dogs[Math.floor(Math.random() * dogs.length)];
	const newDogs = dogs.filter(dog => dog !== dog);
	const randomDogName = newDogs[Math.floor(Math.random() * newDogs.length)];
	const newNewDogs = newDogs.filter(dog => dog !== randomDogName);
	const otherRandomDogName = newNewDogs[Math.floor(Math.random() * newNewDogs.length)];
  return [dog, randomDogName, otherRandomDogName];
}
	componentWillReceiveProps = () => {
		this.getRandomName(Object.keys(this.props.dogs.dogs), this.props.image.name);
  };
  
  //this.getRandomName(Object.keys(this.props.dogs.dogs), this.props.image.name);
 */
