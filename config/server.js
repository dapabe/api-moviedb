const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=38053e73cf2f86bb4220a5bd383997c4";

const POPULAR_URL =
  BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

export async function fetchPopular(fetchLimit) {
  const res = await fetch(POPULAR_URL);
  const data = await res.json();
  const result = data.results;
  fetchLimit ? (result.length = fetchLimit) : result;
  return result;
}
