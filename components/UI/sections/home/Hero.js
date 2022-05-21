import HeroImage from "./HeroUI/HeroImage";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export default function Hero({ fetchArr }) {
  return (
    <Carousel autoPlay infiniteLoop interval={9000} showStatus={false}>
      {fetchArr.upcomingMovies.value.map((movie) => (
        <HeroImage obj={movie} key={movie.id} />
      ))}
    </Carousel>
  );
}
