import { Carousel } from "react-responsive-carousel";
import { fetchImage } from "../../config/server";
import Thumbnail from "./Thumbnail";

export default function Collection({ title, movies, shows }) {
  console.log(movies);
  return (
    <section className=" mx-auto max-w-5xl space-y-1 px-8">
      <h1>{!title ? "Colección" : title}</h1>
      <div className="-m-9 flex space-x-6 overflow-y-hidden overflow-x-scroll p-9 pb-16 scrollbar-hide">
        {movies.map((movie) => (
          <Thumbnail title={movie.title} obj={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
}
