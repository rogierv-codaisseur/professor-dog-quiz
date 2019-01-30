import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Answer.css';
import { addStreak, resetStreak } from '../actions/currentStreak';
import { addHighestStreak } from '../actions/highestStreak';
import { addCorrect, addWrong } from '../actions/successRate';

class Answer extends Component {
  state = {
    className: 'answer'
  };

  onClickCheckAnswer = () => {
    if (this.props.answer === this.props.correctAnswer) {
      this.setState({ className: 'answer-correct' });
    } else {
      this.setState({ className: 'answer-wrong' });
    }
    setTimeout(() => {
      if (this.props.answer === this.props.correctAnswer) {
        this.props.addStreak();
        this.props.addCorrect();
        this.setState({ className: 'answer' });
      } else {
        if (this.props.currentStreak >= this.props.highestStreak) {
          this.props.addHighestStreak(this.props.currentStreak);
        }
        this.props.addWrong();
        this.props.resetStreak();
        this.setState({ className: 'answer' });
      }
    }, 1000);
  };

  render() {
    return (
      <button
        className={this.state.className}
        onClick={this.onClickCheckAnswer}>
        {this.props.answer}
      </button>
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
