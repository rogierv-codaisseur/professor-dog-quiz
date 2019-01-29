import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatsPercentage from './StatsPercentage';
import StatsStreak from './StatsStreak';
import StatsStreakHighest from './StatsStreakHighest';
import { addStreak, resetStreak } from '../actions/currentStreak';
import { addHighestStreak } from '../actions/highestStreak';
import { addCorrect, addWrong } from '../actions/successRate';
import './StatsContainer.css';

class StatsContainer extends Component {
  onClickHandlerCorrect = () => {
    this.props.addStreak();
    this.props.addCorrect();
  };

  onClickHandlerWrong = () => {
    if (this.props.currentStreak >= this.props.highestStreak) {
      this.props.addHighestStreak(this.props.currentStreak);
    }
    this.props.addWrong();
    this.props.resetStreak();
  };

  render() {
    return (
      <div className='stats-container'>
        <div onClick={this.onClickHandlerCorrect}>[CORRECT]</div>
        <div onClick={this.onClickHandlerWrong}>[WRONG]</div>
        <StatsStreak currentStreak={this.props.currentStreak} />
        <StatsStreakHighest highestStreak={this.props.highestStreak} />
        <StatsPercentage successRate={this.props.successRate} />
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
)(StatsContainer);
