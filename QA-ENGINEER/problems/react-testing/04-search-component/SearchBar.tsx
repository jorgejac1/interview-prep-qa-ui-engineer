import React, { useState, useEffect } from 'react';
import { useDebounce } from '../01-custom-hooks/useDebounce';

interface Props {
  onSearch: (query: string) => void;
  minChars?: number;
  debounceMs?: number;
}

export const SearchBar: React.FC<Props> = ({
  onSearch, minChars = 2, debounceMs = 300
}) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, debounceMs);

  useEffect(() => {
    if (debouncedQuery.length >= minChars) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <div role="search">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {query && <button onClick={() => setQuery('')}>×</button>}
    </div>
  );
};
