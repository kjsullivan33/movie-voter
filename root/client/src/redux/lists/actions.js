import { FETCH_LISTS } from "./types";

export const getLists = () => {
  console.log("lists fetched");
  return {
    type: FETCH_LISTS
  };
};
