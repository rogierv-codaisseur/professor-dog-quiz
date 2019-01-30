import React, { Component } from "react";
import DogQuiz from "./DogQuiz.js";
import {
  getDogs,
  getRandomDogsAndPhoto,
  sendAvailableDogs,
  increaseLevel
} from "../actions/dogs";
import { connect } from "react-redux";

class DogQuizContainer extends Component {
  state = { loading: true };

  componentDidMount = () => {
    this.props.getDogs();
  };

  componentDidUpdate = prevProps => {
    if (this.props.turn === 0 && this.props.dogs !== prevProps.dogs) {
      this.increaseAvailable([], Object.keys(this.props.dogs), 3);
    }
    if (
      this.props.turn !== prevProps.turn &&
      this.props.currentStreak > 0 &&
      this.props.currentStreak % 1 === 0
    ) {
      this.increaseAvailable(
        this.props.availableDogs.available,
        this.props.availableDogs.unused,
        3
      );
      this.props.increaseLevel();
    }
    if (
      this.props.availableDogs !== prevProps.availableDogs &&
      this.props.level === prevProps.level &&
      this.props.image === prevProps.image &&
      this.props.currentStreak === prevProps.currentStreak &&
      this.props.turn === prevProps.turn
    ) {
      console.log(1);
      this.props.getRandomDogsAndPhoto({
        ...this.props.availableDogs.available
      });
    }
    if (
      this.props.availableDogs === prevProps.availableDogs &&
      this.props.level === prevProps.level &&
      this.props.image === prevProps.image &&
      this.props.currentStreak === prevProps.currentStreak &&
      (this.props.turn === 0 || this.props.turn !== prevProps.turn)
    ) {
      console.log(2);
      this.props.getRandomDogsAndPhoto({
        ...this.props.availableDogs.available
      });
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
    if (!this.props.image) return "Loading photos...";
    return <DogQuiz image={this.props.image} dogs={this.props.dogs} />;
  }
}

const mapStateToProps = state => ({
  dogs: state.dogs,
  image: state.images,
  turn: state.successRate.CORRECT + state.successRate.WRONG,
  currentStreak: state.currentStreak,
  availableDogs: state.availableDogs,
  level: state.level
});

export default connect(
  mapStateToProps,
  { getDogs, getRandomDogsAndPhoto, sendAvailableDogs, increaseLevel }
)(DogQuizContainer);
