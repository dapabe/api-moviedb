import Image from "next/image";
import Link from "next/link";
import {
  HomeIcon,
  InformationCircleIcon,
  PlusIcon,
} from "@heroicons/react/solid";
export default function NavBar() {
  return (
    <header>
      <nav className="flex items-center">
        <ol className=" flex space-x-4">
          <li>
            <Link href={"/"}>
              <a>
                <HomeIcon className="h-4" />
                <h2>Home</h2>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/info"}>
              <a>
                <InformationCircleIcon className="h-4" />
                <h2>Info</h2>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/info"}>
              <a>
                <PlusIcon className="h-4" />
                <h2>Info</h2>
              </a>
            </Link>
          </li>
        </ol>
      </nav>
    </header>
  );
}
