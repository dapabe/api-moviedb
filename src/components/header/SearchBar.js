import React from "react";

export default function SearchBar() {
  return (
    <div className="absolute top-full left-0 flex h-screen w-screen items-start justify-center bg-black/90 md:left-full md:top-0 md:justify-start">
      <form className="max-w-md grow rounded-b-md bg-slate-800 px-2 pb-4 md:rounded-none md:rounded-br-md md:pt-4">
        <label
          htmlFor="searchBar"
          className="mx-auto block h-max w-11/12 text-center"
        >
          Buscar
          <input
            id="searchBar"
            type="search"
            name="searchBar"
            title="Buscar una pelécula o serie."
            className="mx-auto mt-2 block w-full max-w-md rounded-sm px-2 py-1 text-black"
            placeholder="Wall-E"
          />
        </label>
      </form>
    </div>
  );
}
