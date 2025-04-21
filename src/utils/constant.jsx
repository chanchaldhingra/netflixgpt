
export const NOW_PLAYING = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
export const TOP_MOV = 'https://api.themoviedb.org/3/movie/top_rated?page=1';
export const POP_MOV = 'https://api.themoviedb.org/3/movie/popular?page=1';
export const UP_COMING_MOV = 'https://api.themoviedb.org/3/movie/upcoming?page=1';
export const SEARCH_MOVIE = 'https://api.themoviedb.org/3/search/movie?query=';
export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w780';
export const OPENAI_KEY = `${import.meta.env.VITE_OPENAI_API_KEY}`;
export const TMDB_KEY = `${import.meta.env.VITE_TMDB_API_KEY}`;

export const API_OPTIONS ={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TMDB_KEY}`,
  }
};
