import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import MovieBox from "./MovieBox";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-left: 4rem;
`;

const MovieList = ({ movieList, getMovie }) => {
  console.log(movieList);
  return (
    <Container>
      {movieList &&
        movieList.map(movie => {
          const movieProps = {
            poster: movie.poster_path,
            title: movie.title,
            movieId: movie.id,
            getMovie
          };
          return <MovieBox key={movie.id} {...movieProps}></MovieBox>;
        })}
    </Container>
  );
};

export default MovieList;
