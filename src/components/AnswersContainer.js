
import React from 'react';
import Answer from './Answer';
import './Answer.css';


export default function AnswerContainer(props) {
  const dogs = [props.name, props.badDog1, props.badDog2];
  const images = [
    props.image.goodDogUrl,
    props.image.badDog1Url,
    props.image.badDog2Url
  ];
  const questionType = props.questionType;
  const shortKeys = '123';
  const mixedArray = props.mixedArray;

  if (questionType === 'pick name') {

    return (
      <div className='answer-container'>
        {mixedArray.map((choice, index) => (
          <Answer
            questionType={props.questionType}
            key={choice}
            className='answer'
            correctAnswer={props.name}
            answer={dogs[choice]}
            classNameAnswer={
              props.name === dogs[choice] ? 'answer-correct' : 'answer-wrong'
            }
            shortKey={shortKeys[index]}
          />
        ))}
      </div>
    );
  }
  if (questionType === 'pick image') {
    return (
      <div className='answer-container-breed'>
        {mixedArray.map((choice, index) => (
          <Answer
            questionType={props.questionType}
            key={choice}
            images={images}
            className='answer-picture'
            correctAnswer={props.name}
            image={images[choice]}
            answer={dogs[choice]}
            classNameAnswer={
              props.name === dogs[choice]
                ? 'answer-correct-picture'
                : 'answer-wrong-picture'
            }
            shortKey={shortKeys[index]}
          />
        ))}
      </div>
    );
  }
}
