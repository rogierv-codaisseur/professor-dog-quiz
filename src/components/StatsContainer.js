import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatsPercentage from './StatsPercentage';
import StatsStreak from './StatsStreak';
import StatsStreakHighest from './StatsStreakHighest';
import { addStreak, resetStreak } from '../actions/currentStreak';
import { addHighestStreak } from '../actions/highestStreak';
import './StatsContainer.css';

class StatsContainer extends Component {
  onClickHandlerCorrect = () => {
    this.props.addStreak();
    console.log('CURRENT STREAK:', this.props.currentStreak);
  };

  onClickHandlerWrong = () => {
    if (this.props.currentStreak >= this.props.highestStreak) {
      this.props.addHighestStreak(this.props.currentStreak);
    }
    this.props.resetStreak();
    console.log('HIGHEST STREAK:', this.props.highestStreak);
  };

  render() {
    return (
      <div className='stats-container'>
        <div onClick={this.onClickHandlerCorrect}>[CORRECT]</div>
        <div onClick={this.onClickHandlerWrong}>[WRONG]</div>
        <StatsStreak />
        <StatsStreakHighest />
        <StatsPercentage />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentStreak: state.currentStreak,
  highestStreak: state.highestStreak
});

export default connect(
  mapStateToProps,
  { addStreak, resetStreak, addHighestStreak }
)(StatsContainer);
