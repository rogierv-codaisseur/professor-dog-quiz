import React, { Component } from 'react';
import DogQuiz from './DogQuiz.js';

import { getDogs, getRandomDogsAndPhoto, sendAvailableDogs, increaseLevel } from '../actions/dogs';
import { connect } from 'react-redux';

class DogQuizContainer extends Component {
	_isMounted = false;
	state = { loading: true };

	pickQuestionType() {
		const number = Math.floor(Math.random() * 3);
		number === 0 ? this.setState({ questionType: 'pick image' }) : this.setState({ questionType: 'pick name' });
	}

	mixArray = array => {
		if (array.length === 1) {
			return array;
		} else {
			const index = Math.floor(Math.random() * array.length);
			const newArray = [...array];
			newArray.splice(index, 1);
			return [array[index], ...this.mixArray(newArray)];
		}
	};

	componentDidMount = () => {
		this._isMounted = true;
		this.props.getDogs();

		this.pickQuestionType();
		this.setState({ mixedArray: this.mixArray([0, 1, 2]) });
	};

	componentWillUnmount = () => {
		this._isMounted = false;
	};

	componentDidUpdate = prevProps => {
		if (this.props.turn === 0 && this.props.dogs !== prevProps.dogs) {
			this.increaseAvailable([], Object.keys(this.props.dogs), 3);
		}
		if (this.props.turn !== prevProps.turn && this.props.currentStreak > 0 && this.props.currentStreak % 10 === 0) {
			this.increaseAvailable(this.props.availableDogs.available, this.props.availableDogs.unused, 3);
			this.props.increaseLevel();
		}
		if (this.props.turn !== prevProps.turn || this.props.availableDogs !== prevProps.availableDogs) {
			this.props.getRandomDogsAndPhoto({
				...this.props.availableDogs.available,
			});
		}
		if (this.props.turn !== prevProps.turn) {
			this.pickQuestionType();
			const mixedArray = this.mixArray([0, 1, 2]);
			this.setState({ mixedArray: mixedArray });
		}
	};

	increaseAvailable(available, unused, n) {
		if (n === 0) {
			this.props.sendAvailableDogs({
				available: available,
				unused: unused,
			});
		} else {
			const index = Math.floor(Math.random() * unused.length);
			const element = unused[index];
			const availableCopy = [...available];
			const unusedCopy = [...unused];
			availableCopy.push(element);
			unusedCopy.splice(index, 1);
			this.increaseAvailable(availableCopy, unusedCopy, n - 1);
		}
	}

	render() {
		if (!this.props.image) return 'Loading photos...';
		return (
			<DogQuiz
				mixedArray={this.state.mixedArray}
				questionType={this.state.questionType}
				image={this.props.image}
				dogs={this.props.dogs}
				hardmode={this.props.hardmode}
			/>
		);

	}
}

const mapStateToProps = state => ({
	dogs: state.dogs,
	image: state.images,

	turn: state.successRate.CORRECT + state.successRate.WRONG,
	currentStreak: state.currentStreak,
	availableDogs: state.availableDogs,
	level: state.level,
	hardmode: state.hardmode,

});

export default connect(
	mapStateToProps,
	{ getDogs, getRandomDogsAndPhoto, sendAvailableDogs, increaseLevel }

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
