
export const API_OPTIONS ={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGI2NTg3NWFjNTg3MWUyZTE0NmViNGYyNWJlYTcxMiIsIm5iZiI6MTc0NDk3NDExMC43Mjk5OTk4LCJzdWIiOiI2ODAyMzExZWU1MDZhOGUzYTBhZDMyOTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FJRrdeyeIujWKw765eIXiR9jVP3xsFhRFkN9qHNHsxU'
    }
};

export const NOW_PLAYING = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

export const TOP_MOV = 'https://api.themoviedb.org/3/movie/top_rated?page=1';
export const POP_MOV = 'https://api.themoviedb.org/3/movie/popular?page=1';
export const UP_COMING_MOV = 'https://api.themoviedb.org/3/movie/upcoming?page=1';

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w780';