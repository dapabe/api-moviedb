import MovieCard from "./MovieCard";

export default function PopularMovies({ movies }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3">
      {movies.map((movie, index) => (
        <li key={movie.id}>
          <MovieCard movie={movie} index={index} />
        </li>
      ))}
    </ul>
  );
}
