import { fetchPopular } from "../config/server";
import PopularMovies from "../components/content/PopularMovies";

export default function Home({ movies }) {
  console.log(process.env.API_KEY);
  return <PopularMovies movies={movies} />;
}

export async function getServerSideProps() {
  const result = await fetchPopular(1);
  return { props: { movies: result } };
}
