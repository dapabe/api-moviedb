import Train from "./Train";

export default function Railways({ fetchArr }) {
  return (
    <section>
      <Train
        title="Películas en cartelera"
        movies={fetchArr.nowPlayingMovies.value}
      />
      <Train
        title="Películas en tendencia hoy"
        movies={fetchArr.trendingMovies.value}
      />
      <Train
        title="Series en tendencia hoy"
        shows={fetchArr.trendingTVs.value}
      />
      <Train
        title="Películas populares"
        movies={fetchArr.popularMovies.value}
      />
      <Train title="Series populares" shows={fetchArr.popularTVs.value} />
      <Train
        title="Películas mejor calificadas"
        movies={fetchArr.topMovies.value}
      />
    </section>
  );
}
