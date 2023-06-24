import PropTypes from 'prop-types';
import { SearchList, SearchItem, SearchLink } from './SearchResults.styled';

const SearchResults = ({ searchResults, query, location }) => {
  const renderSearchMessage = () => {
    if (searchResults.length === 0 && query !== '') {
      return <p>There is no movies with this request. Please, try again</p>;
    }
    if (searchResults.length > 0) {
      return;
    }
    return null;
  };

  return (
    <>
      {renderSearchMessage()}

      <SearchList>
        {searchResults.map(film => (
          <SearchItem key={film.id}>
            <SearchLink to={`${film.id}`} state={{ from: location }}>
              {film.title}
            </SearchLink>
          </SearchItem>
        ))}
      </SearchList>
    </>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  query: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

export default SearchResults;
