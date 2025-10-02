import { useState, useDeferredValue, Suspense } from "react";
import SearchResults from "./SearchResults";

const SearchInputWithResults = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery ? 0.5 : 1;

  return (
    <>
      <label>
        Search results:
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading ...</h2>}>
        <div style={{ opacity: isStale }}>
          <SearchResults query={deferredQuery} />
        </div>
      </Suspense>
    </>
  );
};

export default SearchInputWithResults;
