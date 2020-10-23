import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import { urlPath } from "../../helpers/globalVariables";

import AddDropdown from "../../components/AddDropdown";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
  width: 15rem;
`;

const Image = styled.img`
  border-radius: 3px;
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const MovieBox = ({ poster, movieId, title, getMovie }) => (
  <Container>
    <Link
      to={`/details/${movieId}`}
      onClick={getMovie}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Image src={`${urlPath}/${poster}`} />
    </Link>
    <AddDropdown movie={movieId} />
  </Container>
);

export default MovieBox;
