import Link from "next/link";

import navRoutes from "@assets/navRoutes.json";
import {
  FilmIcon,
  HomeIcon,
  SearchIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/solid";

const iconSize = { className: "h-10 transition-transform hover:scale-110" };

export default function NavLinks() {
  return navRoutes.map(({ href, innerText, altText }) => (
    <li key={innerText} className="inline md:list-item">
      {href.includes("#") ? (
        <button type="button" title={altText} className="block">
          {matchingIcon(href)}
        </button>
      ) : (
        <Link href={href}>
          <a title={altText} className="block">
            {matchingIcon(href)}
          </a>
        </Link>
      )}
    </li>
  ));
}
const matchingIcon = (text) => {
  switch (text) {
    case "/":
      return <HomeIcon {...iconSize} />;
    case "#search":
      return <SearchIcon {...iconSize} />;
    case "/movies":
      return <FilmIcon {...iconSize} />;
    case "/shows":
      return <PresentationChartLineIcon {...iconSize} />;
    default:
      break;
  }
};
