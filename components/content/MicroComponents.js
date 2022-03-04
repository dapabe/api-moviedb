import { PlayIcon, ShareIcon, XIcon } from "@heroicons/react/solid";

export function VidPreviewButton({ type, text, onClick }) {
  const defaultStyle =
    "flex items-center space-x-1 rounded-lg bg-white px-2 text-slate-900 hover:bg-slate-900 hover:text-white cursor-not-allowed";
  const trailerStyle =
    "flex items-center space-x-1 rounded-lg border-[1px] px-2 hover:text-slate-900 hover:border-slate-900";
  return (
    <button className={!type ? defaultStyle : trailerStyle} onClick={onClick}>
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
      <ShareIcon className="h-6" />
    </button>
  );
}
function CloseButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-8 w-8 rounded-lg bg-slate-800 transition-colors hover:bg-slate-800/50 hover:text-white/50"
    >
      <XIcon className="m-auto h-5" />
    </button>
  );
}
export function GenreList(array) {
  return array.map((item) => <li key={item.id}>{item.name}</li>);
}

export function ModalVideo({ condition, setFunction, children }) {
  return (
    <>
      {condition && (
        <div className="absolute inset-0 h-full w-full bg-black/90" />
      )}
      <div
        className={`absolute inset-x-[7%] top-3 overflow-hidden rounded transition duration-1000 md:inset-x-[13%] ${
          !condition ? "-z-50 opacity-0" : "z-40 opacity-100"
        }`}
      >
        <div className="flex items-center justify-between bg-slate-900 p-3.5 text-white">
          <span className="font-semibold">Reproduciendo Trailer</span>
          <CloseButton onClick={setFunction} />
        </div>
        <div className="relative h-[calc(100vh-30vh)]">{children}</div>
      </div>
    </>
  );
}
