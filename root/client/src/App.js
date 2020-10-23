import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import styled from "styled-components";

import Layout from "./Views/Layout";
import Home from "./Views/Home";
import MovieDetails from "./Views/MovieDetails";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <Layout>
        <Router>
          <Home className="home" path="/" />
          <MovieDetails path="/details/:movieId" />
        </Router>
      </Layout>
    </Container>
  );
}

export default App;
