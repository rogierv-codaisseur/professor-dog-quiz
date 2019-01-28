import React, { Component } from 'react';
import QuestionContainer from './QuestionContainer';
import AnswerContainer from './AnswersContainer';
import StatsContainer from './StatsContainer';

export default function(props) {
	const dogs = props.dogs;
	return (
		<div>
			<h1>Dogs list</h1>
			<p>{props.dogs}</p>
		</div>
	);
}
