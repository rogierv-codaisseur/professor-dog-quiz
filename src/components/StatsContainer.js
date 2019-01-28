import React, { Component } from 'react';
import StatsPercentage from './StatsPercentage';
import StatsStreak from './StatsStreak';
import StatsStreakHighest from './StatsStreakHighest';
import './StatsContainer.css';

export default class StatsContainer extends Component {
  render() {
    return (
      <div className='stats-container'>
        <StatsStreak />
        <StatsStreakHighest />
        <StatsPercentage />
      </div>
    );
  }
}
