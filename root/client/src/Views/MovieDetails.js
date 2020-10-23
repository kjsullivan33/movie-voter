import React, { useEffect, useState } from "react";
import { useParams } from "@reach/router";
import axios from "axios";
import styled from "styled-components";
import Moment from "moment";
import ReactPlayer from "react-player";

import { urlPath } from "../helpers/globalVariables";

import AddDropdown from "../components/AddDropdown";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    margin-bottom: 1rem;
  }
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subheader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  margin-right: 1rem;
`;

const Date = styled.div``;

const Genres = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Genre = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Break = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Media = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 15rem;
  height: auto;
  margin-bottom: 1.6rem;
`;

const Details = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const MovieDetails = props => {
  console.log(props.movieId);

  const [movieDetails, setMovieDetails] = useState({});
  const [video, setVideo] = useState({});

  const params = { id: props.movieId };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/movie/", { params });
      const video = await axios.get("/video", { params });
      setVideo(video.data);
      setMovieDetails(result.data);
    };

    fetchData();
  }, []);

  console.log(movieDetails);

  const {
    original_title: title,
    genres,
    overview,
    poster_path: poster,
    imdb_id: imdbId,
    release_date
  } = movieDetails;

  const releaseDate = Moment(release_date).format("MMMM Do YYYY");

  return (
    <Container>
      <Header>
        <Subheader>
          <Title>{title}</Title>
          <Date>{releaseDate}</Date>
        </Subheader>
        <Genres>
          {genres &&
            genres.map((genre, i) => (
              <Genre>
                <div>{genre.name} </div>
                {i < genres.length - 1 && <Break>|</Break>}
              </Genre>
            ))}
        </Genres>
      </Header>
      <Content>
        <Media>
          <Image src={`${urlPath}/${poster}`} />
          {video && (
            <ReactPlayer url={`https://www.youtube.com/watch?v=${video.key}`} />
          )}
        </Media>
        <Details>
          <a href={`https://www.imdb.com/title/${imdbId}`} target="_blank">
            Go to IMDB Page
          </a>
          <div>{overview}</div>
        </Details>
        <AddDropdown />
      </Content>
    </Container>
  );
};

export default MovieDetails;
