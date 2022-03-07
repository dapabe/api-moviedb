import Image from "next/image";
import Link from "next/link";
import { cutYear } from "../../utilityFuncs";

export default function Thumbnail({ obj, isShow }) {
  return (
    <Link href={`/${!isShow ? "movies" : "shows"}/${obj.id}`}>
      <figure className="thumbnail">
        <Image
          src={
            `https://image.tmdb.org/t/p/w500/${
              obj.poster_path || obj.backdrop_path
            }` || "/images/placeholder.jpg"
          }
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          placeholder="blur"
          blurDataURL="./images/placeholder.jpg"
          // className="rounded-xl"
        />
        <figcaption className="absolute bottom-1 flex w-full justify-between px-1">
          <h2
            title="Titulo de la pelicula"
            className=" rounded-xl bg-slate-900/80 px-2"
          >
            {obj.title || obj.original_title || obj.name || obj.original_name}
          </h2>
          <span className="rounded-xl bg-slate-900/80 px-2">
            {cutYear(obj.release_date || obj.first_air_date)}
          </span>
        </figcaption>
        {obj.adult && (
          <span
            title="Para adultos"
            className="absolute right-2 top-2 rounded-xl bg-red-600/90 px-2"
          >
            A
          </span>
        )}
      </figure>
    </Link>
  );
}
