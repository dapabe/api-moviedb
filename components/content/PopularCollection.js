import MovieCard from "./MovieCard";

export default function PopularCollection({ movies }) {
  return (
    <div className=" grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 md:grid-cols-3">
      {movies.map((movie, index) => (
        <MovieCard movie={movie} index={index} key={movie.id} />
      ))}
    </div>
  );
}
