import Image from "next/image";
import { IMAGEw_URL } from "../../../config/server";
import {
  Description,
  DisplaySeasons,
  GenreList,
  HeadingLink,
  ReleasedDate,
  RunningTime,
  ShareButton,
  VidPreviewButton,
} from "../MicroComponents";

export function DISPLAY_ID_DETAILS({
  title,
  openModal,
  hasGenres,
  hasSeasons,
  ...data
}) {
  console.log(hasSeasons);
  return (
    <div className="id-details">
      <div className="flex items-center">
        <HeadingLink homepage={data.homepage}>{title}</HeadingLink>
        {data.status && (
          <i
            className="ml-auto rounded-lg bg-teal-600 px-2 text-center"
            title="Status"
          >
            {data.status}
          </i>
        )}
      </div>
      <div className="flex items-center space-x-3 md:space-x-5">
        <VidPreviewButton text="Ver" />
        <VidPreviewButton type text="Trailer" onClick={openModal} />
        <ShareButton />
      </div>
      <div className="flex flex-wrap justify-between">
        <ul>
          <li>
            <ReleasedDate
              typeToggler={data.first_air_date}
              fulldate={data.release_date || data.first_air_date}
            />
          </li>
          <li>
            {/* Check if it has a certain keyword related to TV shows */}
            <RunningTime
              typeToggler={data.first_air_date}
              runningTime={data.runtime || data.episode_run_time}
            />
          </li>
        </ul>
        <GenreList isPlural={hasGenres} list={data.genres} />
      </div>
      <Description paragraph={data.overview} />
      {data.seasons && (
        <DisplaySeasons
          title={hasSeasons ? "Ver temporadas y capitulos" : "Ver capitulos"}
          list={data.seasons}
        />
      )}
    </div>
  );
}
