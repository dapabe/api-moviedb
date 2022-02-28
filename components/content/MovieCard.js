import Image from "next/image";
import useWindowSize from "../hooks/useWindowSize";
import { cutYear, rateScore } from "../utils";

export default function MovieCard({ movie }) {
  const windowSize = useWindowSize();
  const imgSizes = {
    width: 300,
    height: 400,
  };
  return (
    <figure className={`group relative min-h-max min-w-max `}>
      <div className="relative">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={imgSizes.width}
          height={imgSizes.height}
          layout="responsive"
          priority
          className="overflow-hidden rounded-2xl"
        />
        <span className="absolute bottom-2 right-2 rounded-xl bg-teal-600 px-2">
          {cutYear(movie.release_date)}
        </span>
        {/* <figcaption className="absolute left-1/2 top-0 h-2/3 w-[110%] origin-left translate-y-1/2 scale-0 rounded-md bg-slate-700 p-2 transition group-hover:scale-100">
          <div className="flex justify-between">
            <h1 className="inline">{movie.title}</h1>
            <span className={rateScore(movie.vote_average)}>
              {movie.vote_average}
            </span>
          </div>
          <p className="truncate">{movie.overview}</p>
        </figcaption> */}
      </div>
      {/* {size.width > 640 && <p className="">{movie.overview}</p>} */}
      <h1 className="mt-2 text-center">{movie.title}</h1>
    </figure>
  );
}
