const BASE_URLS = {
  PROD: 'https://api.themoviedb.org/3/movie',
};

const BASE_URL = BASE_URLS.PROD;

const ENDPOINTS = {
  MOVIE: {
    MOVIE_RESOURCE: '/now_playing',
    API_RESOURCE: '?api_key=fd3a598def8aaabe0b9800208edb0197',
    MOVIE_PREF: '&language=en-US&page=1',
    MOVIE_LANG: '&language=en-US',
    MOVIE_REVIEW: '/reviews',
    MOVIE_CREDIT: '/credits',
    MOVIE_SIMILAR: '/similar',
  },
};

export {ENDPOINTS, BASE_URL};
