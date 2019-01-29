import { combineReducers } from 'redux';
import dogs from './dogs';
import images from "./images";
import currentStreak from './currentStreak';
import highestStreak from './highestStreak';

export default combineReducers({
  dogs,
  currentStreak,
  highestStreak,
  images
});
