import React, { Component } from 'react';
import QuestionContainer from './QuestionContainer';
import AnswerContainer from './AnswersContainer';
import StatsContainer from './StatsContainer';
import './DogQuiz.css';

export default class DogQuiz extends Component {
  render() {
    return (
      <div className='dog-quiz'>
        <h1>Professor Dog Quiz</h1>
        <QuestionContainer />
        <AnswerContainer />
        <StatsContainer />
      </div>
    );
  }
}
