import { returnLimit } from "../components/utils";

//  =====================================================================================================================
//  Specific data
export const MOVIE_DETAILS = (movie_id) => {
  return `${process.env.BASE_URL}/movie/${movie_id}?api_key=${process.env.API_KEY}&language=es-ES`;
};
export const MOVIE_IMAGE = (movie_id) => {
  return `${process.env.BASE_URL}/movie/${movie_id}/images?api_key=${process.env.API_KEY}&language=en-ES`;
};
//  =====================================================================================================================
//  URLS
const NowPlaying_URL = `${process.env.BASE_URL}/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`;
const Popular_URL = `${process.env.BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${process.env.API_KEY}`;
const Trending_URL = `${process.env.BASE_URL}/trending/movie/day?api_key=${process.env.API_KEY}`;
const Top_URL = `${process.env.BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}&language=es-ES&page=1`;
const Upcoming_URL = `${process.env.BASE_URL}/movie/upcoming?api_key=${process.env.API_KEY}&language=es-ES&page=1`;
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
  const result = await singleFetcher(MOVIE_DETAILS(movie_id));
  return result;
}
export async function fetchPlaying() {
  const result = await singleFetcher(NowPlaying_URL);
  return result;
}
export async function fetchPopular(fetchLimit) {
  const result = await singleFetcher(Popular_URL);
  return returnLimit(result, fetchLimit);
}
export async function fetchTrending() {
  const result = await pluralFetcher(Trending_URL);
  return result;
}
export async function fetchTop() {
  const result = await pluralFetcher(Top_URL);
  return result;
}
export async function fetchUpcoming() {
  const result = await singleFetcher(Upcoming_URL);
  return result;
}
