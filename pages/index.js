import {
  fetchPlaying,
  fetchPopularMovies,
  fetchPopularTVs,
  fetchTop,
  fetchTrendingMovies,
  fetchTrendingTVs,
  fetchUpcoming,
} from "../config/server";
import Collection from "../components/content/TrainUI/Collection";
import Footer from "../components/Footer";

export default function Home({
  upcomingMovies,
  topMovies,
  nowPlayingMovies,
  trendingMovies,
  trendingTVs,
  popularMovies,
  popularTVs,
}) {
  return (
    <>
      <section>
        <Collection title="Películas en cartelera" movies={nowPlayingMovies} />
        <Collection
          title="Películas en tendencia esta semana"
          movies={trendingMovies}
        />
        <Collection
          title="Series en tendencia esta semana"
          shows={trendingTVs}
        />
        <Collection title="Películas populares" movies={popularMovies} />
        <Collection title="Series populares" shows={popularTVs} />
        <Collection title="Películas mejor calificadas" movies={topMovies} />
      </section>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const [
    upcomingMovies,
    topMovies,
    nowPlayingMovies,
    trendingMovies,
    trendingTVs,
    popularMovies,
    popularTVs,
  ] = await Promise.all([
    fetchUpcoming(),
    fetchTop(),
    fetchPlaying(),
    fetchTrendingMovies(),
    fetchTrendingTVs(),
    fetchPopularMovies(),
    fetchPopularTVs(),
  ]);
  return {
    props: {
      upcomingMovies,
      topMovies,
      nowPlayingMovies,
      trendingMovies,
      trendingTVs,
      popularMovies,
      popularTVs,
    },
  };
}
