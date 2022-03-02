import Image from "next/image";
import Link from "next/link";
import { IMAGE_URL } from "../../../config/server";
import { cutYear } from "../../utils";

export default function Thumbnail({ title, obj }) {
  return (
    <Link href={`/movie/${obj.id}`}>
      <figure className="thumbnail">
        <Image
          src={
            `${IMAGE_URL}${obj.backdrop_path || obj.poster_path}` ||
            `${IMAGE_URL}${obj.poster_path}`
          }
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL="/images/placeholder.jpg"
          // className="rounded-xl"
        />
        <figcaption className="absolute bottom-1 flex w-full justify-between px-1">
          <h2
            title="Titulo de la pelicula"
            className=" rounded-xl bg-slate-900/50 px-2"
          >
            {title}
          </h2>
          <span className="rounded-xl bg-slate-900/50 px-2">
            {cutYear(obj.release_date)}
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
