import Slider from "./RailwayUI/Slider";

export default function ThumbnailRailway({ fetchArr }) {
  const {
    nowPlayingMovies,
    trendingMovies,
    trendingTVs,
    popularMovies,
    popularTVs,
    topMovies,
  } = fetchArr;

  const sliders = [
    { title: "Películas en cartelera", list: nowPlayingMovies.value },
    {
      title: "Películas en tendencia hoy",
      list: trendingMovies.value,
    },
    { title: "Películas populares", list: popularMovies.value },
    { title: "Películas mejor calificadas", list: topMovies.value },
    { title: "Series en tendencia hoy", list: trendingTVs.value, isShow: true },
    { title: "Series populares", list: popularTVs.value, isShow: true },
  ];
  return (
    <section>
      {sliders.map((item) => (
        <Slider key={item.title} {...item} />
      ))}
    </section>
  );
}
