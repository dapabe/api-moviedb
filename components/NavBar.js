import Link from "next/link";
import {
  FilmIcon,
  HomeIcon,
  InformationCircleIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/solid";
export default function NavBar() {
  const iconSize = "h-8 sm:h-6";
  return (
    <header>
      <nav className="flex items-center justify-center sm:justify-start">
        <ol className="flex space-x-4">
          <li>
            <Link href={"/"}>
              <a>
                <HomeIcon className={iconSize} />
                <h2>Inicio</h2>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <a>
                <InformationCircleIcon className={iconSize} />
                <h2>acerca</h2>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/movies"}>
              <a>
                <FilmIcon className={iconSize} />
                <h2>Películas</h2>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/shows"}>
              <a>
                <PresentationChartLineIcon className={iconSize} />
                <h2>Series</h2>
              </a>
            </Link>
          </li>
        </ol>
      </nav>
    </header>
  );
}
