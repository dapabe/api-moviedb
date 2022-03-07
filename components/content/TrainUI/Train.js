import Thumbnail from "./Thumbnail";

export default function Train({ title, movies, shows }) {
  return (
    <section className="mx-auto max-w-5xl space-y-1 px-3">
      <h1>{!title ? "Colección" : title}</h1>
      <div className="-m-9 flex space-x-6  overflow-y-scroll px-9 pt-5 pb-16 scrollbar-hide">
        {/* Check if that attr is not set */}
        {movies &&
          !shows &&
          movies.map((movie) => <Thumbnail obj={movie} key={movie.id} />)}
        {shows &&
          !movies &&
          shows.map((show) => <Thumbnail obj={show} key={show.id} isShow />)}
      </div>
    </section>
  );
}
