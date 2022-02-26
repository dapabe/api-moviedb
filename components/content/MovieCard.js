import Image from "next/image";
import useWindowSize from "../hooks/useWindowSize";

export default function MovieCard({ movie, index }) {
  const size = useWindowSize();
  return (
    <figure className="relative ">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width={300}
        height={400}
        layout="responsive"
        priority={true}
        decoding="sync"
      />
      <figurecaption className="absolute bottom-0 z-10 w-full bg-white px-2 ">
        <div className="flex justify-between">
          <h1 className="inline">{movie.title}</h1>
          <span className="">{movie.vote_average}</span>
        </div>
        {size.width > 300 && <p className="">{movie.overview}</p>}
      </figurecaption>
    </figure>
  );
}
