import {
  fetchPlaying,
  fetchPopular,
  fetchTop,
  fetchTrending,
  fetchUpcoming,
} from "../config/server";
import Collection from "../components/content/TrainUI/Collection";

export default function Home({
  topMovies,
  nowPlayingMovies,
  trendingMovies,
  popularMovies,
  upcomingMovies,
}) {
  return (
    <section className="py-4">
      <Collection movies={popularMovies} title="Películas populares" />
      <Collection movies={topMovies} title="Películas mejor calificadas" />
    </section>
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
