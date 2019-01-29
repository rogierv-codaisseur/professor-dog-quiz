const ADD_STREAK = 'ADD_STREAK';
const RESET_STREAK = 'RESET_STREAK';

export function addStreak() {
  return {
    type: ADD_STREAK
  };
}

export function resetStreak() {
  return {
    type: RESET_STREAK
  };
}
