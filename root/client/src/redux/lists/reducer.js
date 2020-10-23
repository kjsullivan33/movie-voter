import { FETCH_LISTS } from "./types";

const INITIAL_STATE = { lists: [] };

const reducer = (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_LISTS:
      return {
        ...state,
        lists: ["October 25", "November 1", "November 8", "November 15"]
      };
    default:
      return state;
  }
};

export default reducer;
