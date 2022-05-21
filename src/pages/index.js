import {
  fetchPlaying,
  fetchPopularMovies,
  fetchPopularTVs,
  fetchTop,
  fetchTrendingMovies,
  fetchTrendingTVs,
  fetchUpcoming,
} from "@services/fetcherOptions";
// import Hero from "@components/UI/sections/home/Hero";
import ThumbnailRailway from "@components/UI/sections/home/ThumbnailRailway";

export default function Home({ collections }) {
  return (
    <>
      {/* <Hero fetchArr={collections} /> */}
      <ThumbnailRailway fetchArr={collections} />
    </>
  );
}

export async function getServerSideProps() {
  const [
    upcomingMovies,
    topMovies,
    nowPlayingMovies,
    trendingMovies,
    popularMovies,
    trendingTVs,
    popularTVs,
  ] = await Promise.allSettled([
    fetchUpcoming(),
    fetchTop(),
    fetchPlaying(),
    fetchTrendingMovies(),
    fetchPopularMovies(),
    fetchTrendingTVs(),
    fetchPopularTVs(),
  ]);
  return {
    props: {
      collections: {
        upcomingMovies,
        topMovies,
        nowPlayingMovies,
        trendingMovies,
        popularMovies,
        trendingTVs,
        popularTVs,
      },
    },
  };
}
