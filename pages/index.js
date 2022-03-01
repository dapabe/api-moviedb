import {
  fetchPlaying,
  fetchPopular,
  fetchTop,
  fetchTrending,
  fetchUpcoming,
} from "../config/server";
import Collection from "../components/content/Collection";

export default function Home({
  topMovies,
  nowPlayingMovies,
  trendingMovies,
  popularMovies,
  upcomingMovies,
}) {
  return (
    <>
      <Collection movies={popularMovies} />
      {/* <Collection /> */}
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
  ] = await Promise.all([
    fetchTop(),
    fetchPlaying(),
    fetchTrending(),
    fetchPopular(),
    fetchUpcoming(),
  ]);
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
