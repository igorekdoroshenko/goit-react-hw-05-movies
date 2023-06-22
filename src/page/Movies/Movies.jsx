import { useState } from 'react';
import Lists from 'components/List/List';
import Form from 'components/Form/Form';
import { moviesSearch } from 'service/tmdbApi';
import { useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchText, setSearchText] = useState(false);
  const location = useLocation();

  const searchMovies = queryMovie => {
    moviesSearch(queryMovie)
      .then(searchResults => {
        setSearchFilms(searchResults);
        setSearchText(searchResults.length === 0);
      })
      .catch(error => {
        console.log(error);
      }) 
    console.log(location);
  }
  return (
    <main>
      <Form searchMovies={searchMovies} location={location} />
      {searchText && (
        <p>There is no movies with this request. Please, try again</p>
      )}
      {searchFilms && <Lists films={searchFilms} location={location} />}
    </main>

  );
};

export default Movies;
