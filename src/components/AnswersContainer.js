import React from 'react';
import Answer from './Answer';

export default function AnswerContainer(props) {
  const mixedArray = mixArray([props.name, props.badDog1, props.badDog2]);

  const shortKeys = '123';

  return (
    <div className='answer-container'>
      {[0, 1, 2].map(choice => (
        <Answer
          key={choice}
          className='answer'
          correctAnswer={props.name}
          answer={mixedArray[choice]}
          classNameAnswer={
            props.name === mixedArray[choice]
              ? 'answer-correct'
              : 'answer-wrong'
          }
          shortKey={shortKeys[choice]}
        />
      ))}
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
