import { fetchPopular, fetchTrending } from "../config/server";
import PopularMovies from "../components/content/PopularMovies";
import TrendingMovies from "../components/content/TrendingMovies";

export default function Home({ trends }) {
  return (
    <>
      {/* <PopularMovies movies={movies} /> */}
      <TrendingMovies movies={trends} />
    </>
  );
}

export async function getServerSideProps() {
  const [
    topMovies,
    nowPlayingMovies,
    trendingMovies,
    popularMovies,
    upcomingMovies,
  ] = Promise.all();
  // const trends = await fetchTrending();
  return {
    props: {
      topMovies,
      nowPlayingMovies,
      trendingMovies,
      popularMovies,
      upcomingMovies,
    },
  };
}
