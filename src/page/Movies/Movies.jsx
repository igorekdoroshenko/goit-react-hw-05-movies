import { useState } from 'react';
import Lists from 'components/List/List';
import Form from 'components/Form/Form';
import { moviesSearch } from 'service/tmdbApi';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchText, setSearchText] = useState(false);

  const searchMovies = queryMovie => {
    moviesSearch(queryMovie)
      .then(searchResults => {
        setSearchFilms(searchResults);
        setSearchText(searchResults.length === 0);
      })
      .catch(error => {
        console.log(error);
      }) 
  }
  return (
    <main>
      <Form searchMovies={searchMovies} />
      {searchText&&(
        <p>There is no movies with this request. Please, try again</p>
      )}
      {searchFilms&&<Lists films={searchFilms}/>}
    </main>

  );
};

export default Movies;
