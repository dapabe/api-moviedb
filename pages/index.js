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
  trendingMovies,
  trendingTVs,
  popularMovies,
  popularTVs,
}) {
  console.log(trendingTVs);
  return (
    <>
      <section className="py-4">
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
      {/* <Footer /> */}
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
