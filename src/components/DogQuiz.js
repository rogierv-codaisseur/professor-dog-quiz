import React, { Component } from 'react';
import QuestionContainer from './QuestionContainer';
import AnswerContainer from './AnswersContainer';
import StatsContainer from './StatsContainer';
import './DogQuiz.css';
import logo from './../images/dog-api-logo.svg';

export default class DogQuiz extends Component {
  render() {
    return (
      <div className='dog-quiz'>
        <img src={logo} alt='logo' />
        <h1>Professor Dog Quiz</h1>
        <QuestionContainer />
        <AnswerContainer />
        <StatsContainer />
      </div>
    );
  }
}
