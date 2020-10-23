import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import styled from "styled-components";
import { Input, Button, InputLabel } from "@material-ui/core";

import { getMovie } from "../../redux/movies/actions";
import MovieList from "./MovieList";
import Searchbar from "../../components/Searchbar";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  width: 100%;
`;

const Home = props => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("/api/popular");
  const [params, setParams] = useState({});

  const { title, getMovie } = props;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url, { params });
      setMovies(result.data);
    };

    fetchData();
  }, [params]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    setParams({ title: search });
    setUrl("api/search");
  };

  const handleKeypress = e => {
    //it triggers by pressing the enter key
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const movieProps = {
    movieList: movies,
    getMovie
  };

  const searchProps = {
    search,
    handleChange,
    handleKeypress,
    handleSubmit
  };
  return (
    <Container>
      <Searchbar {...searchProps} />
      <Content>
        <MovieList {...movieProps} />
      </Content>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    title: state.movie.title
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovie: () => dispatch(getMovie())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
