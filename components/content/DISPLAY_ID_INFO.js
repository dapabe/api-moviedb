import Image from "next/image";
import Meta from "../../components/Meta";
import { useState } from "react";
import { IMAGE_URL } from "../../config/server";
import {
  GenreList,
  ModalVideo,
  ShareButton,
  VidPreviewButton,
} from "../../components/content/MicroComponents";
import { numberToHours } from "../../components/utils";
import ReactPlayer from "react-player";
import { ExternalLinkIcon } from "@heroicons/react/solid";

export default function DISPLAY_ID_INFO({ data }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const hasVideo = data.videos.results.length > 0;
  const trailerIndex = data.videos.results.findIndex((item) => {
    if (item.type === "Trailer") return item;
    else if (item.type === "Teaser") return item;
  });
  const AltNames =
    data.title || data.original_title || data.name || data.original_name;
  const Info = () => {
    return (
      <div className="absolute bottom-0 max-h-full min-h-max w-full space-y-4 bg-black/70 p-4 ">
        <h1 className="text-3xl font-bold sm:text-4xl">{AltNames}</h1>
        <div className="flex items-center space-x-3 md:space-x-5">
          <VidPreviewButton text={"Ver"} />
          <VidPreviewButton
            type
            text={"Trailer"}
            onClick={() => setShowPlayer(true)}
          />
          <ShareButton />
        </div>
        <div className="flex justify-between sm:items-center">
          <ul className="sm:flex sm:space-x-2">
            <li>
              <time dateTime={data.release_date}>
                <p className="mr-1 text-lg font-semibold sm:inline">Estreno:</p>
                {data.release_date || data.first_air_date}
              </time>
            </li>
            <li>
              <p className="mr-1 text-lg font-semibold sm:inline">
                {data.runtime ? "Duracion: " : "En Emisión"}
              </p>
              {data.runtime ? numberToHours(data.runtime) : ""}
            </li>
          </ul>
          <div>
            <h1 className="text-lg font-semibold ">Genero(s): </h1>
            <ul className="sm:flex sm:space-x-2">{GenreList(data.genres)}</ul>
          </div>
        </div>
        <p className="max-h-40 overflow-auto text-lg md:max-h-max">
          {data.overview}
        </p>
      </div>
    );
  };
  return (
    <>
      <Meta title={"TakeALook - " + AltNames} />
      <section className="relative">
        <figure className="relative min-h-screen">
          <Image
            src={`${IMAGE_URL}${data.backdrop_path || data.poster_path}`}
            priority={false}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </figure>
        <Info />
        <ModalVideo
          condition={showPlayer}
          setFunction={() => setShowPlayer(false)}
        >
          {hasVideo ? (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${data.videos?.results[trailerIndex]?.key}`}
              width="100%"
              height="100%"
              controls={true}
              playing={showPlayer}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center border-4 border-t-0 border-slate-900 bg-black">
              <div>
                <h1>Lo sentimos, no se encontró ningún video.</h1>
                <a
                  href={`https://www.youtube.com/results?search_query=${AltNames}+trailer`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center font-semibold"
                >
                  <h1 className="w-max">¿Quieres ver nuestra recomendación?</h1>
                  <ExternalLinkIcon className="inline h-10" />
                </a>
              </div>
            </div>
          )}
        </ModalVideo>
      </section>
    </>
  );
}
