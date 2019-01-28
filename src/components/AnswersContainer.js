import React, { Component } from 'react';
import Answer from './Answer';

export default class AnswerContainer extends Component {
  render() {
    return (
      <div className='answer-container'>
        <Answer />
        <Answer />
        <Answer />
      </div>
    );
  }
}
