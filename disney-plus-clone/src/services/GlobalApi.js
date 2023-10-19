import axios from "axios";

const movieBaseUrl = "http://api.themoviedb.org/3";
const imageBaseUrl = "http://image.tmdb.org/t/p/original";
const api_key = "4b619fcf4cc92534950354465cfe552a";

// Endpoints
const trendingMovies = "/trending/all/day";
const recommendedMovies = "/movie/now_playing";
const moviesByGenre = "/discover/movie";

const getTrending = () => {
  return axios.get(`${movieBaseUrl}${trendingMovies}?api_key=${api_key}`);
};

const getRecommendations = () => {
  return axios.get(`${movieBaseUrl}${recommendedMovies}?api_key=${api_key}`);
};

const getMovieByGenreId = (id) => {
  return axios.get(
    `${movieBaseUrl}${moviesByGenre}?api_key=${api_key}&with_genres=${id}`
  );
};

export default {
  getTrending,
  getRecommendations,
  getMovieByGenreId,
  imageBaseUrl,
};
