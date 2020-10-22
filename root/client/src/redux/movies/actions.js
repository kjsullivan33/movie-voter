import { FETCH_MOVIE } from "./types";

export const getMovie = () => {
  console.log("movie fetched");
  return {
    type: FETCH_MOVIE
  };
};
