const ADD_HIGHEST_STREAK = 'ADD_HIGHEST_STREAK';

export function addHighestStreak(currentStreak) {
  return {
    type: ADD_HIGHEST_STREAK,
    payload: currentStreak
  };
}
