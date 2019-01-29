const ADD_STREAK = 'ADD_STREAK';
const RESET_STREAK = 'RESET_STREAK';

export function addStreak() {
  return {
    type: ADD_STREAK,
    payload: 1
  };
}

export function resetStreak() {
  return {
    type: RESET_STREAK
  };
}
