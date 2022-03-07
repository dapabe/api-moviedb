import Image from "next/image";
import Meta from "../../Meta";
import ReactPlayer from "react-player";
import { useState } from "react";
import { IMAGE_URL } from "../../../config/server";
import { ModalVideo } from "../MicroComponents";
import { DISPLAY_ID_DETAILS } from "./DISPLAY_ID_DETAILS";
import { cutYear } from "../../utilityFuncs";

export default function DISPLAY_ID({ data }) {
  // console.log(data);
  const [showPlayer, setShowPlayer] = useState(false);
  const handleButton = () => {
    setShowPlayer(!showPlayer);
  };
  //  checks if exists
  const manyGenres = data.genres.length > 1;
  const hasVideo = data.videos.results.length > 0;
  const hasSeasons = data.seasons ? data.seasons.length > 1 : false;
  const trailerIndex = data.videos.results.findIndex((item) => {
    if (item.type === "Trailer") return item;
    else if (item.type === "Teaser") return item;
  });
  const AltNames =
    data.title || data.original_title || data.name || data.original_name;

  return (
    <>
      <Meta
        title={`TakeALook - ${data.seasons ? "TVs" : "Movie"} - ${AltNames}`}
      />
      <section className="relative ">
        <figure className="relative min-h-screen">
          <Image
            src={
              `${IMAGE_URL}${data.backdrop_path || data.poster_path}` ||
              "/images/placeholder.jpg"
            }
            priority={false}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </figure>
        <div className="fixed inset-0 flex items-end justify-center">
          <DISPLAY_ID_DETAILS
            title={AltNames}
            openModal={handleButton}
            hasGenres={manyGenres}
            hasSeasons={hasSeasons}
            {...data}
          />
        </div>
        <ModalVideo
          title={!hasVideo ? "Error al cargar video" : this}
          condition={showPlayer}
          closeModal={handleButton}
          fallbackSearch={AltNames}
          fallbackDate={cutYear(data.release_date || data.first_air_date)}
        >
          {hasVideo && (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${data.videos?.results[trailerIndex]?.key}`}
              width="100%"
              height="100%"
              controls={true}
              playing={showPlayer}
            />
          )}
        </ModalVideo>
      </section>
    </>
  );
}
