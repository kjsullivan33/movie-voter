var express = require("express");
var router = express.Router();
var axios = require("axios");
require("dotenv").config();

const key = process.env.MOVIEDB_KEY;

router.get("/api/popular", (req, res) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.results);
      res.json(response.data.results);
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.get("/api/search", (req, res) => {
  const { title } = req.query;
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${title}&language=en-US&page=1&include_adult=false`
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.results);
      res.json(response.data.results);
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.get("/movie/", (req, res) => {
  const { id } = req.query;
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.get("/video", (req, res) => {
  const { id } = req.query;
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
  };

  axios
    .request(options)
    .then(function (response) {
      const videos = response.data.results.filter(
        video => video.type === "Trailer"
      );
      console.log(videos);
      res.json(videos[0]);
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.get("/", (req, res) => {
  res.json("Home");
});

module.exports = router;
