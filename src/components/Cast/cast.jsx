import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { movieActors } from 'service/tmdbApi';
import { List, Text } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const actorsFilms = () => {
      movieActors(movieId)
        .then(actors => {
          setActors(actors);
        })
        .catch(error => {
          console.log(error);
        });
    };

    actorsFilms();
  }, [movieId]);

  return (
    <div>
      <List>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
              }
              alt={original_name}
              width="200px"
            />
            <Text>{name}</Text>
            <p>Character: {character}</p>
          </li>
        ))}
      </List>
    </div>
  );
};
export default Cast;
