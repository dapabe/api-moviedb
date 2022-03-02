import Image from "next/image";
import Meta from "../../components/Meta";
import { useState } from "react";
import { IMAGE_URL, MOVIE_DETAILS, singleFetcher } from "../../config/server";
import { PlayIcon, ShareIcon } from "@heroicons/react/solid";

export default function Movie({ result }) {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <>
      <Meta title={"TakeALook - " + result.title || result.original_title} />
      <section className="relative">
        <figure className="relative min-h-[calc(100vh-40px)]">
          <Image
            src={
              `${IMAGE_URL}${result.poster_path || result.backdrop_path}` ||
              `${IMAGE_URL}${result.backdrop_path}`
            }
            priority
            layout="fill"
            objectFit="cover"
          />
        </figure>
        <div className="absolute inset-y-28 inset-x-4 space-y-6 rounded-md bg-slate-600/60 md:inset-y-auto md:inset-x-12 md:bottom-10">
          <h1 className="text-3xl font-bold sm:text-4xl">
            {result.title || result.original_title}
          </h1>
          <div className="flex items-center space-x-3 md:space-x-5">
            <button className="flex items-center space-x-1 rounded-lg bg-white px-2 text-black">
              <PlayIcon className="h-10" />
              <span className="text-xs font-medium uppercase tracking-wide md:text-base">
                Ver
              </span>
            </button>
            <button
              onClick={() => setShowPlayer(true)}
              className="flex items-center space-x-1 rounded-lg border-[1px] px-2"
            >
              <PlayIcon className="h-10" />
              <span className="text-xs font-medium uppercase tracking-wide md:text-base">
                Trailer
              </span>
            </button>
            <button className="rounded-full border-2 p-2">
              <ShareIcon className="h-6" />
            </button>
            <button></button>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const data = await singleFetcher(
    `${MOVIE_DETAILS(id)}&append_to_response=videos`
  );

  return {
    props: {
      result: data,
    },
  };
}
