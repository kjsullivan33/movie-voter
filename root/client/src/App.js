import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

import Home from "./Views/Home";
import MovieDetails from "./Views/MovieDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <MovieDetails path="/details/:movieId" />
      </Router>
    </div>
  );
}

export default App;
