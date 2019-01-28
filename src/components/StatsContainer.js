import React, { Component } from "react";
import StatsPercentage from "./StatsPercentage";
import StatsStreak from "./StatsStreak";
import StatsStreakHighest from "./StatsStreakHighest";

export default class StatsContainer extends Component {
  render() {
    return (
      <div>
        <StatsStreak />
        <StatsStreakHighest />
        <StatsPercentage />
      </div>
    );
  }
}
