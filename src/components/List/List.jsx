import { useLocation } from 'react-router-dom';
import { FilmList, FilmItem, FilmLink } from './List.styled';


const Lists = ({ films }) => {
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

export default Lists;
