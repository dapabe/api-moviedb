import { ClockIcon } from "@heroicons/react/solid";
import { numberToHours, parsedLangDate } from "../../utilityFuncs";
import {
  GenreList,
  HeadingLink,
  ShareButton,
  VidPreviewButton,
} from "../MicroComponents";

export function DISPLAY_ID_DETAILS({ title, callback, hasGenres, ...data }) {
  return (
    <div className="absolute inset-y-28 inset-x-4 space-y-4 rounded-lg bg-black/70 p-4 md:inset-x-12 md:inset-y-auto md:bottom-10 ">
      <div className="flex items-center">
        <HeadingLink homepage={data.homepage}>{title}</HeadingLink>
        {data.status && (
          <i className="ml-auto rounded-full bg-teal-600 px-2" title="Status">
            {data.status}
          </i>
        )}
      </div>
      <div className="flex items-center space-x-3 md:space-x-5">
        <VidPreviewButton text="Ver" />
        <VidPreviewButton type text="Trailer" onClick={callback} />
        <ShareButton />
      </div>
      <div className="flex justify-between ">
        <ul className="">
          <li>
            <time
              dateTime={parsedLangDate(
                data.release_date || data.first_air_date
              )}
            >
              {/* Check if it has a certain keyword related to TV shows */}
              <h1 className="mr-1 sm:inline">
                {data.first_air_date
                  ? "Se emitió por primera vez el"
                  : "Estreno:"}
                <span className="ml-1 font-semibold  lowercase">
                  {parsedLangDate(data.release_date || data.first_air_date)}
                </span>
              </h1>
            </time>
          </li>
          <li>
            {/* Check if it has a certain keyword related to TV shows */}
            <h1 className="mr-1 flex items-center text-sm font-semibold">
              {data.first_air_date ? (
                <>
                  <ClockIcon className="h-6" />
                  <sup>x cap</sup>
                </>
              ) : (
                <ClockIcon className="h-6" />
              )}
              <span className="ml-1 text-base lowercase">
                {numberToHours(data.runtime || data.episode_run_time)}
              </span>
            </h1>
          </li>
        </ul>
        <div>
          <h1 className="text-lg font-semibold ">
            {hasGenres ? "Generos: " : "Genero: "}
          </h1>
          <ul className="justify-end text-sm sm:flex sm:space-x-2">
            {GenreList(data.genres)}
          </ul>
        </div>
      </div>
      <p className="max-h-80 overflow-y-auto text-lg md:max-h-max">
        {!data.overview
          ? "No hay suficiente información disponible."
          : data.overview}
      </p>
    </div>
  );
}
