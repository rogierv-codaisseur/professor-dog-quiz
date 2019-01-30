import React from 'react';
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
      <img
        className='dog-question-image'
        src={props.image.imageUrl}
        id={props.hardmode && 'hard-mode'}
        alt='DogBreed'
      />

      <div className='answers'>
        <AnswerContainer
          name={props.image.goodDog}
          badDog1={props.image.badDog1}
          badDog2={props.image.badDog2}
        />
        <StatsContainer />
      </div>
    </div>
  );
}
