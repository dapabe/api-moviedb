//  =====================================================================================================================
//  URLS
const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_URL = "https://image.tmdb.org/t/p/original/";
const M_NowPlaying_URL = `${BASE_URL}/movie/now_playing?api_key=${process.env.API_KEY}&language=es-ES&page=1`;
const M_Top_URL = `${BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}&language=es-ES&page=1`;
const M_Upcoming_URL = `${BASE_URL}/movie/upcoming?api_key=${process.env.API_KEY}&language=es-ES&page=1`;
const TV_Popular_URL = `${BASE_URL}/tv/popular?api_key=${process.env.API_KEY}&language=es-ES&page=1`;
//  =====
const Image_URL = (movie_id) => {
  `${BASE_URL}/movie/${movie_id}/images?api_key=${process.env.API_KEY}&language=es-ES`;
};
function POPULAR_URL(isShow) {
  return `${BASE_URL}/discover/${
    !isShow ? "movie" : "tv"
  }?sort_by=popularity.desc&api_key=${process.env.API_KEY}`;
}
function TRENDING_URL(isShow) {
  return `${BASE_URL}/trending/${!isShow ? "movie" : "tv"}/week?api_key=${
    process.env.API_KEY
  }`;
}
export function GET_DETAILS(id, isShow) {
  return `${BASE_URL}/${!isShow ? "movie" : "tv"}/${id}?api_key=${
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
export async function fetchUpcoming() {
  return await singleFetcher(M_Upcoming_URL);
}
export async function fetchTop() {
  return await pluralFetcher(M_Top_URL);
}
export async function fetchPlaying() {
  return await singleFetcher(M_NowPlaying_URL);
}
export async function fetchPopularMovies() {
  return await pluralFetcher(POPULAR_URL());
}
export async function fetchPopularTVs() {
  return await pluralFetcher(POPULAR_URL(true));
}

export async function fetchTrendingMovies() {
  return await pluralFetcher(TRENDING_URL());
}
export async function fetchTrendingTVs() {
  return await pluralFetcher(TRENDING_URL(true));
}
//  =====================================================================================================================
//  Specific data

export async function fetchImage(movie_id) {
  return await singleFetcher(Image_URL);
}
