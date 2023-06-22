// import { useParams } from 'react-router-dom';

// const MovieDetails = () => {
//     const { movieId } = useParams();
//     return <>MovieDetails:{movieId}</>
// }

// export default MovieDetails;

import { Link, Outlet, useLocation, useParams, NavLink } from 'react-router-dom';
import { movieDetailsApi } from 'service/tmdbApi';
import { Suspense, useEffect, useRef, useState } from 'react';
import { isEmpty } from 'lodash';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [filmInfo, setFilmInfo] = useState({});

  const location = useLocation();
  const goBackHref = useRef(location.state?.from || '/');
  console.log(goBackHref);

  useEffect(() => {
    try {
      movieDetailsApi(movieId).then(res => setFilmInfo(res));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  let source = '';
  if (!filmInfo.poster_path) {
    source =
      'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
  } else source = `https://image.tmdb.org/t/p/w500/${filmInfo.poster_path}`;

  return (
    <div>
      <Link to={goBackHref.current}>Go back ←</Link>
      {!isEmpty(filmInfo) && (
        <>
          <div>
            <img src={source} alt="poster" width="300px" />
            <div>
              <h1>
                {filmInfo.title}

                {filmInfo.release_date && (
                  <span
                    style={{
                      padding: '0px 10px',
                      color: '#a01d1d',
                    }}
                  >
                    ({filmInfo.release_date.slice(0, 4)})
                  </span>
                )}
              </h1>

              <p>User score: {Math.round(filmInfo.vote_average * 10) + '%'}</p>
              <b>Overview</b>
              <p>{filmInfo.overview}</p>
              <b>Genres</b>
              <p>
                {filmInfo.genres.length > 0
                  ? filmInfo.genres.map(genre => genre.name).join(', ')
                  : 'No information about genres'}
              </p>
            </div>
          </div>
          <div>
            <h2>Additional information</h2>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>

            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;