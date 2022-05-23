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
  const altNames = title || original_title || name || original_name;
  return (
    <Link href={`/${isShow ? "shows" : "movies"}/${id}`}>
      <a>
        <figure className="thumbnail">
          <Image
            src={
              `https://image.tmdb.org/t/p/w500/${
                backdrop_path || poster_path
              }` || "/images/placeholder.jpg"
            }
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            blurDataURL="./images/placeholder.jpg"
            alt={altNames}
          />
          <figcaption className="absolute bottom-1 w-full px-1">
            <h2
              title="Título de la película"
              className="inline-block max-w-full whitespace-pre-wrap rounded-md bg-slate-900/80 px-2 text-center leading-snug"
            >
              {altNames}
            </h2>
          </figcaption>
          <time
            title="Fecha de emisión"
            dateTime={release_date || first_air_date}
            className="absolute top-0 left-0 rounded-br-md bg-slate-900/80 px-2"
          >
            {cutYear(release_date || first_air_date)}
          </time>
          {adult && (
            <span
              title="Película para adultos"
              className="absolute right-0 top-0 rounded-bl-md bg-red-600/90 px-1"
            >
              +18
            </span>
          )}
        </figure>
      </a>
    </Link>
  );
}
