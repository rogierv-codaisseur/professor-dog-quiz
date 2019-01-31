import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Answer.css';
import { addStreak, resetStreak } from '../actions/currentStreak';
import { addHighestStreak } from '../actions/highestStreak';
import { addCorrect, addWrong } from '../actions/successRate';
import KeyHandler from 'react-key-handler';

class Answer extends Component {
  state = {
    classNameAnswer: this.props.className,
    classNameSolution: 'hide-answer'
  };

  correctAnswered = () => {
    return this.props.answer === this.props.correctAnswer;
  };

  onClickCheckAnswer = () => {
    // console.log(this.props.shortKey);
    // Show green or red:
    this.setState({ classNameAnswer: this.props.classNameAnswer });

    // If the user selects the wrong answer, show the correct answer for 2 seconds.
    if (!this.correctAnswered()) {
      this.setState({ classNameSolution: 'show-answer' });
      setTimeout(() => {
        this.setState({ classNameSolution: 'hide-answer' });
        this.setState({ classNameAnswer: this.props.className });
        if (this.props.currentStreak >= this.props.highestStreak) {
          this.props.addHighestStreak(this.props.currentStreak);
        }
        this.props.addWrong();
        this.props.resetStreak();
      }, 2000);
    }

    // If the user selects the correct answer, wait for 0.5 second.
    if (this.correctAnswered()) {
      setTimeout(() => {
        this.setState({ classNameSolution: 'hide-answer' });
        this.setState({ classNameAnswer: this.props.className });
        this.props.addStreak();
        this.props.addCorrect();
      }, 500);
    }
  };

  render() {
    return (
      <div>
        <button
          className={this.state.classNameAnswer}
          onClick={this.onClickCheckAnswer}
          title={'Shortkey: ' + this.props.shortKey}>
          {this.props.answer}
        </button>
        <div className={this.state.classNameSolution}>
          Correct answer: {this.props.correctAnswer}
        </div>

        <React.Fragment>
          {this.props.shortKey === '1' && (
            <KeyHandler keyValue='1' onKeyHandle={this.onClickCheckAnswer} />
          )}
          {this.props.shortKey === '2' && (
            <KeyHandler keyValue='2' onKeyHandle={this.onClickCheckAnswer} />
          )}
          {this.props.shortKey === '3' && (
            <KeyHandler keyValue='3' onKeyHandle={this.onClickCheckAnswer} />
          )}
        </React.Fragment>
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
