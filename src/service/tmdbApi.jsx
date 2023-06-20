import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b2e60f539e48de4827e6e0d51f4baa7c';

export const getTrending = async () => {
    const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
    const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
    return response.data.results;
};

export const searchMovies = async query => {
    const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
    const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`);
    return response.data.results;
}

export const movieDetails = async movieId => {
    const BASE_URL = 'https://api.themoviedb.org/3/movie/'
  const response = await axios.get(`${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US`);
  return response.data;
};

export const movieActors = async movieId => {
    const BASE_URL = 'https://api.themoviedb.org/3/movie/'
    const response = await axios.get(`${BASE_URL}/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data.cast;
}

export const movieReviews = async movieId => {
    const BASE_URL = 'https://api.themoviedb.org/3/movie/'
    const response = await axios.get(`${BASE_URL}/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data.results;
}