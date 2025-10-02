import { use } from "react";
import type { Album } from "./data";
import { fetchData } from "./data";

const SearchResults = ({ query = "" }) => {
  if (query === "") return null;

  const albums: Array<Album> = use(fetchData(`/search?q=${query}`));

  if (albums.length === 0) {
    return (
      <p>
        No match for <i>"{query}"</i>
      </p>
    );
  }
  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>
          {album.title} {album.year}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
