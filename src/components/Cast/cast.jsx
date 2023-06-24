import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { CastWrapper } from './Cast.styled';
import { movieActors } from 'service/tmdbApi';

const Cast = () => {
  const { movieId } = useParams();

  const [filmCast, setFilmCast] = useState([]);

  useEffect(() => {
    try {
      movieActors(movieId).then(res => setFilmCast(res.cast.splice(0, 8)));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <>
      {isEmpty(filmCast) ? (
        <p>We don't have any information about cast for this movie</p>
      ) : (
        <>
          <CastWrapper>
            {filmCast.map(actor => {
              let source = '';
              if (!actor.profile_path) {
                source =
                  'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';
              } else
                source = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
              return (
                <li key={actor.id}>
                  <img src={source} alt={`${actor.name}`} />
                  <p>{actor.name}</p>
                  <em>{actor.character}</em>
                </li>
              );
            })}
          </CastWrapper>
        </>
      )}
    </>
  );
};

export default Cast;
