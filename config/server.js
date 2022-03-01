import { returnLimit } from "../components/utils";

//  =====================================================================================================================
//  URLS
export const IMAGE_URL = "https://image.tmdb.org/t/p/original/";
const BASE_URL = "https://api.themoviedb.org/3";
const NowPlaying_URL = `${BASE_URL}/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`;
const Popular_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${process.env.API_KEY}`;
const Trending_URL = `${BASE_URL}/trending/movie/day?api_key=${process.env.API_KEY}`;
const Top_URL = `${BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}&language=es-ES&page=1`;
const Upcoming_URL = `${BASE_URL}/movie/upcoming?api_key=${process.env.API_KEY}&language=es-ES&page=1`;
//  =====
const Image_URL = (movie_id) => {
  `${BASE_URL}/movie/${movie_id}/images?api_key=${process.env.API_KEY}&language=es-ES`;
};
//  =====================================================================================================================
//  Fetcher types
async function singleFetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
async function pluralFetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
//  =====================================================================================================================
//  Fetcher functions
export async function fetchDetails(movie_id) {
  const data = await singleFetcher(MOVIE_DETAILS(movie_id));
  return data;
}
export async function fetchPlaying() {
  const data = await singleFetcher(NowPlaying_URL);
  return data;
}
export async function fetchPopular(numberLimit) {
  const data = await pluralFetcher(Popular_URL);
  return returnLimit(data, numberLimit);
}
export async function fetchTrending() {
  const data = await pluralFetcher(Trending_URL);
  return data;
}
export async function fetchTop() {
  const data = await pluralFetcher(Top_URL);
  return data;
}
export async function fetchUpcoming() {
  const data = await singleFetcher(Upcoming_URL);
  return data;
}
//  =====================================================================================================================
//  Specific data
export const MOVIE_DETAILS = (movie_id) => {
  return `${BASE_URL}/movie/${movie_id}?api_key=${process.env.API_KEY}&language=es-ES`;
};
export async function fetchImage(movie_id) {
  const data = await singleFetcher(Image_URL);
  return data;
}
