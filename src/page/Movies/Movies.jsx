import SearchForm from 'components/SearchForm/SearchForm';
import SearchResults from 'components/SearchResults/SearchResults';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { moviesSearch } from 'service/tmdbApi';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);

  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';

  const location = useLocation();

  const handleFormSubmit = searchQueryFromForm => {
    setSearchQuery(
      searchQueryFromForm !== '' ? { query: searchQueryFromForm } : {}
    );
  };

  useEffect(() => {
    if (query) {
      try {
        moviesSearch(query).then(res => {
          setSearchResults([...res.results]);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [query]);

  return (
    <>
      <div>
        <SearchForm onSubmit={handleFormSubmit} />
        <SearchResults
          searchResults={searchResults}
          query={query}
          location={location}
        />
      </div>
    </>
  );
};

export default Movies;
