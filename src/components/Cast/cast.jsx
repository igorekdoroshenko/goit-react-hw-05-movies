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
              width="200px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
              }
              alt={original_name}
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
