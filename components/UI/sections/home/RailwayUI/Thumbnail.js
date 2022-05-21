import Image from "next/image";
import Link from "next/link";
import { cutYear } from "@utilities/reusable";

export default function Thumbnail({ obj, isShow }) {
  const {
    id,
    poster_path,
    backdrop_path,
    title,
    original_title,
    name,
    original_name,
    release_date,
    first_air_date,
    adult,
  } = obj;

  return (
    <Link href={`/${isShow ? "shows" : "movies"}/${id}`}>
      <figure className="thumbnail">
        <Image
          src={
            `https://image.tmdb.org/t/p/w500/${poster_path || backdrop_path}` ||
            "/images/placeholder.jpg"
          }
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          placeholder="blur"
          blurDataURL="./images/placeholder.jpg"
          alt=""
        />
        <figcaption className="absolute bottom-1 flex w-full justify-between px-1">
          <h2
            title="Titulo de la pelicula"
            className=" rounded-xl bg-slate-900/80 px-2"
          >
            {title || original_title || name || original_name}
          </h2>
          <span className="rounded-xl bg-slate-900/80 px-2">
            {cutYear(release_date || first_air_date)}
          </span>
        </figcaption>
        {adult && (
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
