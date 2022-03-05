import {
  ExternalLinkIcon,
  PlayIcon,
  ShareIcon,
  XIcon,
} from "@heroicons/react/solid";

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
    <button className="rounded-full border-2 p-2 hover:border-slate-900 hover:text-slate-900">
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
        {children}
        <ExternalLinkIcon className={iconSize} />
      </h1>
    </a>
  );
}
export function GenreList(array) {
  return array.map((item) => (
    <li key={item.id} className="w-min">
      {item.name}
    </li>
  ));
}

export function ModalVideo({
  title = "Reproduciendo",
  condition,
  setFunction,
  fallbackSearch,
  fallbackDate,
  children,
}) {
  return (
    <>
      {condition && (
        <div
          className="absolute inset-0 h-full w-full bg-black/95"
          onClick={setFunction}
        />
      )}
      <div
        className={`absolute inset-x-[7%] top-1/2 -translate-y-1/2 overflow-hidden rounded transition-opacity duration-1000 md:inset-x-[13%] ${
          !condition ? "-z-50 opacity-0" : "z-40 opacity-100"
        }`}
      >
        <div className="flex items-center justify-between bg-slate-900 p-3.5 text-white">
          <h1 className="font-semibold">{title}</h1>
          <CloseButton onClick={setFunction} />
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
