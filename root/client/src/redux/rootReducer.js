import { combineReducers } from "redux";

import movieReducer from "./movies/reducer";
import listReducer from "./lists/reducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  lists: listReducer
});

export default rootReducer;
