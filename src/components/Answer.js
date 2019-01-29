import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Answer.css';
import { addStreak, resetStreak } from '../actions/currentStreak';
import { addHighestStreak } from '../actions/highestStreak';
import { addCorrect, addWrong } from '../actions/successRate';

class Answer extends Component {
  onClickCheckAnswer = correct => {
    if (this.props.answer === this.props.correctAnswer) {
      this.props.addStreak();
      this.props.addCorrect();
    } else {
      if (this.props.currentStreak >= this.props.highestStreak) {
        this.props.addHighestStreak(this.props.currentStreak);
      }
      this.props.addWrong();
      this.props.resetStreak();
    }
  };

  render() {
    return (
      <div className='answer' onClick={this.onClickCheckAnswer}>
        {this.props.answer}
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
