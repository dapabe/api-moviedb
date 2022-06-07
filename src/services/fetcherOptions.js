//  =====================================================================================================================
//  URLS
const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;
export const IMAGE_URL = "https://image.tmdb.org/t/p/original/";
export const IMAGEw_URL = "https://image.tmdb.org/t/p/w500/";
//  =====
const POPULAR_URL = (type = "movie") =>
  `${BASE_URL}/discover/${type}?sort_by=popularity.desc&api_key=${API_KEY}`;

const TRENDING_URL = (type = "movie") =>
  `${BASE_URL}/trending/${type}/day?api_key=${API_KEY}`;

export const GET_DETAILS = (id, type = "movie") =>
  `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=es-ES`;

const getMovieNow = (listType = "upcoming") =>
  `${BASE_URL}/movie/${listType}?api_key=${API_KEY}&language=es-ES&page=1`;
//  =====================================================================================================================
//  Fetcher types
export const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data?.results ?? data;
};
//  =====================================================================================================================
//  Fetcher functions
export const fetchUpcoming = async () => await fetcher(getMovieNow());

export const fetchTop = async () => await fetcher(getMovieNow("top_rated"));

export const fetchPlaying = async () =>
  await fetcher(getMovieNow("now_playing"));

export const fetchPopularMovies = async () => await fetcher(POPULAR_URL());

export const fetchTrendingMovies = async () => await fetcher(TRENDING_URL());

export const fetchPopularTVs = async () => await fetcher(POPULAR_URL("tv"));

export const fetchTrendingTVs = async () => await fetcher(TRENDING_URL("tv"));

//  =====================================================================================================================
//  Specific data
