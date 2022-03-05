import Image from "next/image";
import Meta from "../../Meta";
import ReactPlayer from "react-player";
import { useState } from "react";
import { IMAGE_URL } from "../../../config/server";
import { ModalVideo } from "../MicroComponents";
import { DISPLAY_ID_DETAILS } from "./DISPLAY_ID_DETAILS";
import { cutYear } from "../../utilityFuncs";

export default function DISPLAY_ID_INFO({ data }) {
  console.log(data);
  const [showPlayer, setShowPlayer] = useState(false);
  const handleButton = () => {
    setShowPlayer(!showPlayer);
  };
  const hasVideo = data.videos.results.length > 0;
  const manyGenres = data.genres.length > 1;
  const trailerIndex = data.videos.results.findIndex((item) => {
    if (item.type === "Trailer") return item;
    else if (item.type === "Teaser") return item;
  });
  const AltNames =
    data.title || data.original_title || data.name || data.original_name;

  return (
    <>
      <Meta title={"TakeALook - " + AltNames} />
      <section className="relative overflow-hidden  ">
        <figure className="relative min-h-screen">
          <Image
            src={
              `${IMAGE_URL}${data.backdrop_path || data.poster_path}` ||
              "/images/placeholder.jpg"
            }
            priority={false}
            layout="fill"
            objectFit="cover"
            // objectPosition="top"
          />
        </figure>
        <DISPLAY_ID_DETAILS
          title={AltNames}
          callback={handleButton}
          hasGenres={manyGenres}
          {...data}
        />
        <ModalVideo
          title={!hasVideo ? "Error al cargar video" : this}
          condition={showPlayer}
          setFunction={handleButton}
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
