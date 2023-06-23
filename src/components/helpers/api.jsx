import axios from "axios";

const API_KEY = 'ace05e7e513bb2dcaf00821262e8ca69';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY
};

export const getTrandingMovies = async () => {
  const response = await axios.get(`/trending/movie/day`);
  return response.data.results;
}

export const getMovieById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
}

export const getMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data.cast;
}

export const getMovieReviews = async(movieId) =>{
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data.results;
}

export const getMoviesByQuery = async (values) => {
  const response = await axios.get(`search//movie?query=${values}`);
  return response.data.results;
}