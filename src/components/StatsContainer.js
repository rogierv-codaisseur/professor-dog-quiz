import React, { Component } from "react";
import { connect } from "react-redux";
import StatsPercentage from "./StatsPercentage";
import StatsStreak from "./StatsStreak";
import StatsStreakHighest from "./StatsStreakHighest";
import StatsTurn from "./StatsTurn";
import { addStreak, resetStreak } from "../actions/currentStreak";
import { addHighestStreak } from "../actions/highestStreak";
import { addCorrect, addWrong } from "../actions/successRate";
import "./StatsContainer.css";
import StatsLevel from "./StatsLevel";

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
      <div className="stats-container">
        <StatsTurn successRate={this.props.successRate} />
        <StatsStreak currentStreak={this.props.currentStreak} />
        <StatsStreakHighest highestStreak={this.props.highestStreak} />
        <StatsLevel level={this.props.level} />
        <StatsPercentage successRate={this.props.successRate} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentStreak: state.currentStreak,
  highestStreak: state.highestStreak,
  successRate: state.successRate,
  level: state.level
});

export default connect(
  mapStateToProps,
  { addStreak, resetStreak, addHighestStreak, addCorrect, addWrong }
)(StatsContainer);
