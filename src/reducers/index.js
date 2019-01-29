import { combineReducers } from 'redux';
import dogs from './dogs';
import currentStreak from './currentStreak';
import highestStreak from './highestStreak';

export default combineReducers({
  dogs,
  currentStreak,
  highestStreak
});
