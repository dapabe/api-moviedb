import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function TrendingMovies({ movies }) {
  console.log(movies);
  return (
    <section>
      <Carousel autoPlay infiniteLoop showStatus={false} interval={2000}>
        {movies.map(
          (movie) =>
            // <img src={} height={300} key={movie.id} />
            aa
        )}
      </Carousel>
    </section>
  );
}
