import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <nav className="md:h-60">
        <ol className="mx-auto flex h-full gap-x-4 md:w-max md:flex-col md:gap-y-4">
          <NavLinks />
        </ol>
        <SearchBar />
      </nav>
    </header>
  );
}
