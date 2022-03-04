import {
  fetchPlaying,
  fetchPopular,
  fetchTop,
  fetchTrending,
  fetchUpcoming,
} from "../config/server";
import Collection from "../components/content/TrainUI/Collection";
import Footer from "../components/Footer";

export default function Home({
  topMovies,
  nowPlayingMovies,
  trendingMovies,
  popularMovies,
  upcomingMovies,
}) {
  return (
    <>
      <section className="py-4">
        <Collection
          title="Películas en tendencia esta semana"
          movies={trendingMovies}
        />
        <Collection title="Películas populares" movies={popularMovies} />
        <Collection title="Series populares" />
        <Collection title="Películas mejor calificadas" movies={topMovies} />
      </section>
      {/* <Footer /> */}
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
