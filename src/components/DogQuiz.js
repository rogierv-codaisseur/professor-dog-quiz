import React, { Component } from 'react';
import QuestionContainer from './QuestionContainer';
import AnswerContainer from './AnswersContainer';
import StatsContainer from './StatsContainer';
import './DogQuiz.css';
import logo from './../images/dog-api-logo.svg';

export default function(props) {
	console.log(props.image.name)
	return (
		<div className="dog-quiz">
			<img src={logo} alt="logo" />
			<h1>Professor Dog Quiz</h1>
			<h1>Dogs list</h1>
			<img src={props.image.imageUrl} alt="DogBreed" />
			<QuestionContainer  />
			<AnswerContainer name={props.image.name} />
			<StatsContainer />
		</div>
	);
}
