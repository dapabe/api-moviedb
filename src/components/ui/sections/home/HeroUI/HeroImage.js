import Image from "next/image";
import Link from "next/link";
export default function HeroImage({ obj }) {
  return (
    <Link href={`/movies/${obj.id}`}>
      <figure className="h-96">
        <Image
          src={
            `https://image.tmdb.org/t/p/original/${
              obj.poster_path || obj.backdrop_path
            }` || "/images/placeholder.jpg"
          }
          layout="fill"
          objectFit="cover"
          priority={false}
          alt=""
        />
        <figcaption className="absolute bottom-0 justify-between">
          <h2
            title="Titulo de la pelicula"
            className="  rounded-tr-xl bg-slate-900 px-2"
          >
            {obj.title || obj.original_title || obj.name || obj.original_name}
          </h2>
        </figcaption>
      </figure>
    </Link>
  );
}
