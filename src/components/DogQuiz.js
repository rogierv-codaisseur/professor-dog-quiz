import React, { Component } from 'react';
import QuestionContainer from './QuestionContainer';
import AnswerContainer from './AnswersContainer';
import StatsContainer from './StatsContainer';
import './DogQuiz.css';
import logo from './../images/dog-api-logo.svg';

export default function(props) {
  return (
    <div className='dog-quiz'>
      <div className='dog-quiz-title'>
        <img className='dog-quiz-logo' src={logo} alt='logo' />
        <h1>Professor Dog Quiz</h1>
      </div>

      <img className='dog-question-image' src={props.image} alt='DogBreed' />
      <div className='answers'>
        <AnswerContainer />
        <StatsContainer />
      </div>
    </div>
  );
}
