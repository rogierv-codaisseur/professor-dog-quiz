import React, { Component } from 'react';
import Answer from './Answer';

export default class AnswerContainer extends Component {
	render() {
		return (
			<div className="answer-container">
				<p>{this.props.name}</p>
				<p>{this.props.badDog1}</p>
				<p>{this.props.badDog2}</p>
			</div>
		);
	}
}
