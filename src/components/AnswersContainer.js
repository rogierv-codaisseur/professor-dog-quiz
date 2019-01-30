import React from 'react';
import Answer from './Answer';

import './Answer.css';

export default function AnswerContainer(props) {
  const mixedArray = mixArray([props.name, props.badDog1, props.badDog2]);

  return (
    //   <div className='answer-container'>
    //   <button className='answer'>{mixedArray[0]}</button>
    //   <button className='answer'>{mixedArray[1]}</button>
    //   <button className='answer'>{mixedArray[2]}</button>
    // </div>

    <div className='answer-container'>
      <Answer
        className='answer'
        correctAnswer={props.name}
        answer={mixedArray[0]}
      />
      <Answer
        className='answer'
        correctAnswer={props.name}
        answer={mixedArray[1]}
      />
      <Answer
        className='answer'
        correctAnswer={props.name}
        answer={mixedArray[2]}
      />
    </div>
  );
}

function mixArray(array) {
  if (array.length === 1) {
    return array;
  } else {
    const index = Math.floor(Math.random() * array.length);
    const newArray = [...array];
    newArray.splice(index, 1);
    return [array[index], ...mixArray(newArray)];
  }
}
