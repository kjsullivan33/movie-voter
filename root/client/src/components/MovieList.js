import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { urlPath } from "../helpers/globalVariables";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const MovieBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: lavender;
  margin: 2rem;
  width: 15rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const MovieList = ({ movieList, getMovie }) => {
  console.log(movieList);
  return (
    <Container>
      {movieList &&
        movieList.map(movie => (
          <MovieBox key={movie.id}>
            <Image src={`${urlPath}/${movie.poster_path}`} />
            <Link to={`/details/${movie.id}`} onClick={getMovie}>
              {movie.title}
            </Link>
          </MovieBox>
        ))}
    </Container>
  );
};

export default MovieList;
