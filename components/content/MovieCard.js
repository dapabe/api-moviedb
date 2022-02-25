import Image from "next/image";

export default function MovieCard({ movie }) {
  return (
    <figure className="relative ">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width={300}
        height={400}
      />
      <figurecaption className="">
        <h1 className="">{movie.title}</h1>
        <p className="">{movie.overview}</p>
      </figurecaption>
    </figure>
  );
}
