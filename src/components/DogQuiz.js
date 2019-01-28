import React, { Component } from 'react';
import QuestionContainer from './QuestionContainer';
import AnswerContainer from './AnswersContainer';
import StatsContainer from './StatsContainer';

export default class DogQuiz extends Component {
  render() {
    return (
      <div>
        <QuestionContainer />
        <AnswerContainer />
        <StatsContainer />
      </div>
    );
  }
}
