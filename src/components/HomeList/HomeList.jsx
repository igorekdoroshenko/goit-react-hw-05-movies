import { useLocation } from 'react-router-dom';
import { FilmList, FilmItem, FilmLink } from './HomeList.styled';
import PropTypes from 'prop-types';


const HomeList = ({ films }) => {
  const location = useLocation();

  return (
    <FilmList>
      {films.map(film => (
        <FilmItem key={film.id}>
          <FilmLink to={`/movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </FilmLink>
        </FilmItem>
      ))}
    </FilmList>
  );
};

HomeList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default HomeList;
