import {
  Link,
  Outlet,
  useLocation,
  useParams,
  
} from 'react-router-dom';
import { movieDetailsApi } from 'service/tmdbApi';
import { Suspense, useEffect, useRef, useState } from 'react';
import { isEmpty } from 'lodash';
import { MovieWrapper, MovieText, MovieList, MovieLink, MovieItem } from './MovieDetails.styled';
import Loader from 'components/Loader/Loader';


const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState({});

  const location = useLocation();
  const goBack = useRef(location.state?.from || '/');
  

  useEffect(() => {
    try {
      movieDetailsApi(movieId).then(res => setMovieInfo(res));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  let source = '';
  if (!movieInfo.poster_path) {
    source =
      'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
  } else source = `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`;

  return (
    <div>
      <Link to={goBack.current}>Go back ←</Link>
      {!isEmpty(movieInfo) && (
        <>
          <MovieWrapper>
            <img src={source} alt="poster" width="300px" />
            <MovieText>
              <h1>
                {movieInfo.title} ({movieInfo.release_date.slice(0, 4)})
              </h1>

              <p>User score: {Math.round(movieInfo.vote_average * 10) + '%'}</p>
              <h2>Overview</h2>
              <p>{movieInfo.overview}</p>
              <h2>Genres</h2>
              <p>
                {movieInfo.genres.length > 0
                  ? movieInfo.genres.map(genre => genre.name).join(', ')
                  : 'No information about genres'}
              </p>
            </MovieText>
          </MovieWrapper>
          <div>
            <h3>Additional information</h3>
            <MovieList>
              <MovieItem>
                <MovieLink to="casts">Casts</MovieLink>
              </MovieItem>
              <MovieItem>
                <MovieLink to="reviews">Reviews</MovieLink>
              </MovieItem>
            </MovieList>

            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
};



export default MovieDetails;
