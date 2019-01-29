import React, { Component } from 'react';
import Answer from './Answer';

export default class AnswerContainer extends Component {
  render() {
    return (
      <div className='answer-container'>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
