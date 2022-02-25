import { POPULAR_URL } from "../config/server";
import PopularMovies from "../components/content/PopularMovies";

export async function getStaticProps() {
  const res = await fetch(POPULAR_URL);
  const data = await res.json();
  return { props: { movies: data } };
}
export default function Home({ movies }) {
  console.log(movies.results);
  return <PopularMovies movies={movies.results} />;
}
