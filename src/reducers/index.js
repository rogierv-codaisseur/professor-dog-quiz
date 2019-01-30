import { combineReducers } from "redux";
import dogs from "./dogs";
import images from "./images";
import currentStreak from "./currentStreak";
import highestStreak from "./highestStreak";
import successRate from "./successRate";
import availableDogs from "./availableDogs";

export default combineReducers({
  dogs,
  currentStreak,
  highestStreak,
  successRate,
  images,
  availableDogs
});
