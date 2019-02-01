import React, { Component } from 'react';
import DogQuiz from './DogQuiz.js';
import {
  getDogs,
  getRandomDogsAndPhoto,
  sendAvailableDogs,
  increaseLevel,
  updateSeenDogs
} from '../actions/dogs';
import { connect } from 'react-redux';

class DogQuizContainer extends Component {
  _isMounted = false;
  state = { loading: true };

  pickQuestionType() {
    const number = Math.floor(Math.random() * 3);
    number === 0
      ? this.setState({ questionType: 'pick image' })
      : this.setState({ questionType: 'pick name' });
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
    if (
      this.props.turn !== prevProps.turn &&
      this.props.currentStreak > 0 &&
      this.props.currentStreak % 10 === 0
    ) {
      this.increaseAvailable(
        this.props.availableDogs.available,
        this.props.availableDogs.unused,
        3
      );
      this.props.increaseLevel();
    }
    if (
      this.props.turn !== prevProps.turn ||
      this.props.availableDogs !== prevProps.availableDogs
    ) {
      this.props.getRandomDogsAndPhoto({
        ...this.props.availableDogs.available
      });
    }
    if (this.props.turn !== prevProps.turn) {
      this.pickQuestionType();
      const mixedArray = this.mixArray([0, 1, 2]);
      this.setState({ mixedArray: mixedArray });
    }
    if (this.props.currentStreak > prevProps.currentStreak) {
      if (this.props.seenDogs.indexOf(this.props.image.goodDog) === -1) {
        this.props.updateSeenDogs(this.props.image.goodDog);
      }
    }
  };

  increaseAvailable(available, unused, n) {
    if (n === 0) {
      this.props.sendAvailableDogs({
        available: available,
        unused: unused
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
        seenDogs={this.props.seenDogs}
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
  seenDogs: state.seenDogs
});

export default connect(
  mapStateToProps,
  {
    getDogs,
    getRandomDogsAndPhoto,
    sendAvailableDogs,
    increaseLevel,
    updateSeenDogs
  }
)(DogQuizContainer);
