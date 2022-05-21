import Image from "next/image";
import {
  ClockIcon,
  ExternalLinkIcon,
  PlayIcon,
  ShareIcon,
  XIcon,
} from "@heroicons/react/solid";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { numberToHours, parsedLangDate } from "../../utilities/reusable";
import { IMAGEw_URL } from "../../utilities/fetcherOptions";

const iconSize = "h-5";

export function VidPreviewButton({ type, text, ...props }) {
  const defaultStyle =
    "flex items-center space-x-1 rounded-lg bg-white px-2 text-slate-900  cursor-not-allowed";
  const trailerStyle =
    "flex items-center space-x-1 rounded-lg border-[1px] px-2 hover:text-slate-900 hover:border-slate-900";
  return (
    <button className={!type ? defaultStyle : trailerStyle} {...props}>
      <PlayIcon className="h-10" />
      <span className="text-xs font-medium uppercase tracking-wide md:text-base">
        {text}
      </span>
    </button>
  );
}
export function ShareButton() {
  return (
    <button
      className="rounded-full border-2 p-2 hover:border-slate-900 hover:text-slate-900"
      title="Compartir"
    >
      <ShareIcon className={iconSize} />
    </button>
  );
}
function CloseButton({ ...props }) {
  return (
    <button
      className="h-8 w-8 rounded-lg bg-slate-800 transition-colors hover:bg-slate-800/50 hover:text-white/50"
      {...props}
    >
      <XIcon className={`m-auto ${iconSize}`} />
    </button>
  );
}
export function HeadingLink({ homepage, children }) {
  return (
    <a
      href={homepage || "/"}
      target={homepage.length === 0 ? "_self" : "_blank"}
      rel="noopener noreferrer"
      title="Ir a su sitio oficial."
    >
      <h1 className="flex text-3xl font-bold sm:text-4xl">
        <span>{children}</span>
        <ExternalLinkIcon className={iconSize} />
      </h1>
    </a>
  );
}
function GenreItem(array) {
  return array.map((item) => (
    <li key={item.id} className="w-min">
      {item.name}
    </li>
  ));
}
export function GenreList({ isPlural, list }) {
  return (
    <div>
      <h1 className="text-lg font-semibold ">
        {isPlural ? "Generos: " : "Genero: "}
      </h1>
      <ul className="justify-end text-sm sm:flex sm:space-x-2">
        {GenreItem(list)}
      </ul>
    </div>
  );
}
export function RunningTime({ typeToggler, runningTime }) {
  return (
    <h1 className="mr-1 flex items-center text-sm ">
      {typeToggler ? (
        <>
          <ClockIcon className="h-6" />
          <p>promedio x cap</p>
        </>
      ) : (
        <ClockIcon className="h-6" />
      )}
      <span className="ml-1 text-base lowercase">
        {numberToHours(runningTime)}
      </span>
    </h1>
  );
}
export function DisplaySeasons({ title, list }) {
  return (
    <section className="max-h-[300px] overflow-x-hidden rounded border">
      <details className="group relative">
        <summary className="sticky ml-2 flex cursor-pointer items-center">
          <ChevronDownIcon className="mr-2 h-4 rotate-0 transition-transform group-open:-rotate-180" />
          {title}
        </summary>
        <div className=" flex  flex-wrap justify-center gap-1 overflow-y-auto">
          {list.map((item) => (
            <figure
              className="relative min-h-[300px] min-w-[200px] border"
              key={item.poster_path}
            >
              {item.poster_path && (
                <Image
                  src={
                    `${IMAGEw_URL}${item.poster_path}` ||
                    "./images/placeholder.jpg"
                  }
                  layout="fill"
                  priority={false}
                  objectFit="cover"
                />
              )}
              <figcaption className="absolute bottom-0 z-10 w-full bg-gray-900/80 text-center">
                <h1>{item.name}</h1>
                <p>{item.episode_count} capitulos</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </details>
    </section>
  );
}
export function ReleasedDate({ typeToggler, fulldate }) {
  return (
    <time dateTime={parsedLangDate(fulldate)}>
      <h1 className="mr-1 sm:inline">
        {typeToggler ? "Se emitió por primera vez el" : "Estreno:"}
        <span className="ml-1 font-semibold  lowercase">
          {parsedLangDate(fulldate)}
        </span>
      </h1>
    </time>
  );
}
export function Description({ paragraph }) {
  return (
    <p className="max-h-80 overflow-y-auto indent-4 text-lg md:max-h-max">
      {!paragraph ? "No hay suficiente información disponible." : paragraph}
    </p>
  );
}
export function ModalVideo({
  title = "Reproduciendo",
  condition,
  closeModal,
  fallbackSearch,
  fallbackDate,
  children,
}) {
  return (
    <>
      {condition && (
        <div
          className="absolute inset-0 h-full w-full bg-black/95"
          onClick={closeModal}
        />
      )}
      <div
        className={`absolute inset-x-[7%] top-1/2 -translate-y-1/2 overflow-hidden rounded transition-opacity duration-1000 md:inset-x-[13%] ${
          !condition ? "-z-50 opacity-0" : "z-40 opacity-100"
        }`}
      >
        <div className="flex items-center justify-between bg-slate-900 p-3.5 text-white">
          <h1 className="font-semibold">{title}</h1>
          <CloseButton onClick={closeModal} />
        </div>
        <div className="relative h-[calc(100vh-30vh)]">
          {!children ? (
            <div className="flex h-full w-full items-center justify-center border-4 border-t-0 border-slate-900 bg-black">
              <div>
                <h1>Lo sentimos, no se encontró ningún video.</h1>
                <a
                  href={`https://www.youtube.com/results?search_query=${fallbackSearch}+${fallbackDate}+trailer`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center font-semibold"
                >
                  <h1 className="w-max">¿Quieres ver nuestra recomendación?</h1>
                  <ExternalLinkIcon className="inline h-10" />
                </a>
              </div>
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </>
  );
}
