import {IHttpResponse} from '../types/http';
import {http} from './../utils';
import {ENDPOINTS} from './endpoints';
import {IMovie, ICredit} from './../types/movie';
const {MOVIE} = ENDPOINTS;

export const getPopularMovie = (): Promise<IHttpResponse<IMovie>> => {
  return http(
    `${MOVIE.MOVIE_RESOURCE}${MOVIE.API_RESOURCE}${MOVIE.MOVIE_PREF}`,
    {
      method: 'get',
    },
  );
};

export const getMovieDetails = (
  paramId: number,
): Promise<IHttpResponse<IMovie>> => {
  return http(`/${paramId}${MOVIE.API_RESOURCE}${MOVIE.MOVIE_LANG}`, {
    method: 'get',
  });
};

export const getMovieReviews = (
  paramId: number,
): Promise<IHttpResponse<IMovie>> => {
  return http(
    `/${paramId}${MOVIE.MOVIE_REVIEW}${MOVIE.API_RESOURCE}${MOVIE.MOVIE_PREF}`,
    {
      method: 'get',
    },
  );
};

export const getMovieCredits = (
  paramId: number,
): Promise<IHttpResponse<ICredit>> => {
  return http(
    `/${paramId}${MOVIE.MOVIE_CREDIT}${MOVIE.API_RESOURCE}${MOVIE.MOVIE_PREF}`,
    {
      method: 'get',
    },
  );
};

export const getSimilarMovies = (
  paramId: number,
): Promise<IHttpResponse<IMovie>> => {
  return http(
    `/${paramId}${MOVIE.MOVIE_SIMILAR}${MOVIE.API_RESOURCE}${MOVIE.MOVIE_PREF}`,
    {
      method: 'get',
    },
  );
};
