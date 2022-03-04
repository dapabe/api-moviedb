//  =====================================================================================================================
//  URLS
export const IMAGE_URL = "https://image.tmdb.org/t/p/original/";
const BASE_URL = "https://api.themoviedb.org/3";
const M_NowPlaying_URL = `${BASE_URL}/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`;
const M_Popular_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${process.env.API_KEY}`;
const M_Top_URL = `${BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}&language=es-ES&page=1`;
const M_Upcoming_URL = `${BASE_URL}/movie/upcoming?api_key=${process.env.API_KEY}&language=es-ES&page=1`;
// const TV_Popular_URL
//  =====
const Image_URL = (movie_id) => {
  `${BASE_URL}/movie/${movie_id}/images?api_key=${process.env.API_KEY}&language=es-ES`;
};
function TRENDING_URL(isShow) {
  return `${BASE_URL}/trending/${!isShow ? "movie" : "tv"}/day?api_key=${
    process.env.API_KEY
  }`;
}
export function GET_DETAILS(film_id, isShow) {
  return `${BASE_URL}/${!isShow ? "movie" : "tv"}/${film_id}?api_key=${
    process.env.API_KEY
  }&language=es-ES`;
}
//  =====================================================================================================================
//  Fetcher types
export async function singleFetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
export async function pluralFetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
//  =====================================================================================================================
//  Fetcher functions
export async function fetchPlaying() {
  return await singleFetcher(M_NowPlaying_URL);
}
export async function fetchPopular() {
  return await pluralFetcher(M_Popular_URL);
}
export async function fetchTrending(isShow = false) {
  return await pluralFetcher(TRENDING_URL(isShow));
}
export async function fetchTop() {
  return await pluralFetcher(M_Top_URL);
}
export async function fetchUpcoming() {
  return await singleFetcher(M_Upcoming_URL);
}
//  =====================================================================================================================
//  Specific data

export async function fetchImage(movie_id) {
  return await singleFetcher(Image_URL);
}
