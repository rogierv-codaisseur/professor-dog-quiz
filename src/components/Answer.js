import React, { Component } from "react";
import { connect } from "react-redux";
import "./Answer.css";
import { addStreak, resetStreak } from "../actions/currentStreak";
import { addHighestStreak } from "../actions/highestStreak";
import { addCorrect, addWrong } from "../actions/successRate";

class Answer extends Component {
  state = {
    classNameAnswer: this.props.className,
    classNameSolution: "hide-answer"
  };

  correctAnswered = () => {
    return this.props.answer === this.props.correctAnswer;
  };

  onClickCheckAnswer = () => {
    // Show green or red:
    this.setState({ classNameAnswer: this.props.classNameAnswer });

    // If the user selects the wrong answer, show the correct answer
    if (!this.correctAnswered()) {
      this.setState({ classNameSolution: "show-answer" });
    }

    // After 2 seconds, go to the next question.
    setTimeout(() => {
      this.setState({ classNameSolution: "hide-answer" });
      if (this.correctAnswered()) {
        this.props.addStreak();
        this.props.addCorrect();
        this.setState({ classNameAnswer: this.props.className });
      } else {
        if (this.props.currentStreak >= this.props.highestStreak) {
          this.props.addHighestStreak(this.props.currentStreak);
        }
        this.props.addWrong();
        this.props.resetStreak();
        this.setState({ classNameAnswer: this.props.className });
      }
    }, 2000);
  };

  render() {
    return (
      <div>
        <button
          className={this.state.classNameAnswer}
          onClick={this.onClickCheckAnswer}
        >
          {this.props.answer}
        </button>
        <div className={this.state.classNameSolution}>
          Correct answer: {this.props.correctAnswer}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentStreak: state.currentStreak,
  highestStreak: state.highestStreak,
  successRate: state.successRate
});

export default connect(
  mapStateToProps,
  { addStreak, resetStreak, addHighestStreak, addCorrect, addWrong }
)(Answer);
