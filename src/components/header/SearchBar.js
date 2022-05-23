import React from "react";

export default function SearchBar() {
  return (
    <form className="absolute top-full left-0 h-screen w-full bg-black/90 ">
      <label
        htmlFor="searchBar"
        className="mx-auto mt-6 block w-11/12 text-center"
      >
        Buscar
        <input
          id="searchBar"
          type="search"
          name="searchBar"
          title="Buscar una pelécula o serie."
          className="mt-2 block w-full rounded-sm px-2 py-1 text-black"
          placeholder="Wall-E"
        />
      </label>
    </form>
  );
}
