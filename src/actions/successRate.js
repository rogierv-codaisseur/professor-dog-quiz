const ADD_CORRECT = 'ADD_CORRECT';
const ADD_WRONG = 'ADD_WRONG';

export function addCorrect() {
  return {
    type: ADD_CORRECT
  };
}

export function addWrong() {
  return {
    type: ADD_WRONG
  };
}
