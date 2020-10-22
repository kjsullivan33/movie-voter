import { FETCH_MOVIE } from "./types";

const INITIAL_STATE = {
  title: "Initial Title"
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_MOVIE:
      return {
        ...state,
        title: "Test Title"
      };
    default:
      return state;
  }
};

export default reducer;
