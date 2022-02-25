import MovieCard from "./MovieCard";

export default function PopularMovies({ movies }) {
  return (
    <ul className="grid grid-cols-3">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}
