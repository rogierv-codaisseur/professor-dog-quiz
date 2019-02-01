import React, { Component } from "react";
import { connect } from "react-redux";
import { addStreak, resetStreak } from "../actions/currentStreak";
import { addHighestStreak } from "../actions/highestStreak";
import { addCorrect, addWrong } from "../actions/successRate";
import KeyHandler from "react-key-handler";
import "./Answer.css";

class Answer extends Component {
  state = {
    classNameAnswer: this.props.className,
    classNameSolution: "hide-answer",
    buttonId: "",
    keyOne: "1",
    keyTwo: "2",
    keyThree: "3"
  };

  componentDidMount = () => {
    const timer = setTimeout(() => {
      if (this.props.answer !== "") {
        this.setState({
          buttonId: "buttonId"
        });
      }
    }, 2000);
  };

  componentWillUnmount = () => {
    clearTimeout(this.timer);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.successRate !== prevProps.successRate) {
      this.setState({
        buttonId: ""
      });
    }
    setTimeout(() => {
      if (this.state.buttonId === prevState.buttonId) {
        this.setState({
          buttonId: "buttonId"
        });
      }
    }, 2000);
  };

  correctAnswered = () => {
    return this.props.answer === this.props.correctAnswer;
  };

  onClickCheckAnswer = () => {
    // Show green or red:
    this.setState({ classNameAnswer: this.props.classNameAnswer });

    // If the user selects the wrong answer, show the correct answer for 2 seconds.
    if (!this.correctAnswered()) {
        this.green.play();
      this.setState({ classNameSolution: "show-answer" });
      setTimeout(() => {
        this.setState({ classNameSolution: "hide-answer" });
        this.setState({ classNameAnswer: "answer" });
        if (this.props.currentStreak >= this.props.highestStreak) {
          this.props.addHighestStreak(this.props.currentStreak);
        }
        this.props.addWrong();
        this.props.resetStreak();
      }, 1000);
        //this.green.play();
    }


    // If the user selects the correct answer, wait for 0.5 second.
    if (this.correctAnswered()) {
        this.green.play();
      setTimeout(() => {
        this.setState({ classNameSolution: "hide-answer" });
        this.setState({ classNameAnswer: "answer" });
        this.props.addStreak();
        this.props.addCorrect();
      }, 500);
    }
  };

  render() {
    if (this.props.questionType === "pick name") {
      return (
        <div>
            <audio id={"sound"}
                   src={"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"}
                   type={"audio/mpeg"}
                   ref={(green) => { this.green = green; }}
                   preload={"auto"}
                    >
            </audio>
          <button
            className={this.state.classNameAnswer}
            onClick={this.onClickCheckAnswer}
            title={"Shortkey: " + this.props.shortKey}
            id={this.state.buttonId}
          >
            {this.props.answer}
          </button>
          <div className={this.state.classNameSolution}>
            Correct answer: {this.props.correctAnswer}
          </div>
          <React.Fragment>
            {this.props.shortKey === this.state.keyOne && (
              <KeyHandler keyValue="1" onKeyHandle={this.onClickCheckAnswer} />
            )}
            {this.props.shortKey === this.state.keyTwo && (
              <KeyHandler keyValue="2" onKeyHandle={this.onClickCheckAnswer} />
            )}
            {this.props.shortKey === this.state.keyThree && (
              <KeyHandler keyValue="3" onKeyHandle={this.onClickCheckAnswer} />
            )}
          </React.Fragment>
        </div>
      );
    }
    if (this.props.questionType === "pick image") {
      return (
        <div id={this.props.hardmode && "hard-mode"}>
          <input
            className={"answer-picture"}
            onClick={this.onClickCheckAnswer}
            title={"Shortkey: " + this.props.shortKey}
            id={this.state.buttonId}
            type="image"
            src={this.props.image}
            alt={"maybe this one?"}
          />
          <div className={this.state.classNameSolution}>WRONG!</div>
          <React.Fragment>
            {this.props.shortKey === this.state.keyOne && (
              <KeyHandler keyValue="1" onKeyHandle={this.onClickCheckAnswer} />
            )}
            {this.props.shortKey === this.state.keyTwo && (
              <KeyHandler keyValue="2" onKeyHandle={this.onClickCheckAnswer} />
            )}
            {this.props.shortKey === this.state.keyThree && (
              <KeyHandler keyValue="3" onKeyHandle={this.onClickCheckAnswer} />
            )}
          </React.Fragment>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  currentStreak: state.currentStreak,
  highestStreak: state.highestStreak,
  successRate: state.successRate,
  hardmode: state.hardmode
});

export default connect(
  mapStateToProps,
  { addStreak, resetStreak, addHighestStreak, addCorrect, addWrong }
)(Answer);
/**<source src={"https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"} type={"audio/mpeg"} >
 </source>*/
