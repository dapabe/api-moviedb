import {
  fetchPlaying,
  fetchPopularMovies,
  fetchPopularTVs,
  fetchTop,
  fetchTrendingMovies,
  fetchTrendingTVs,
  fetchUpcoming,
} from "../config/server";
import Footer from "../components/Footer";
import Railways from "../components/content/TrainUI/Railways";
import Hero from "../components/content/HeroUI/Hero";

export default function Home({ collections }) {
  return (
    <>
      <section>
        <Hero fetchArr={collections} />
        <Railways fetchArr={collections} />
      </section>
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
  ] = await Promise.allSettled([
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
      collections: {
        upcomingMovies,
        topMovies,
        nowPlayingMovies,
        trendingMovies,
        trendingTVs,
        popularMovies,
        popularTVs,
      },
    },
  };
}
