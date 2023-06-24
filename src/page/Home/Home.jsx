import React, { useEffect, useState } from 'react';
import HomeList from 'components/HomeList/HomeList';
import { getTrending } from 'service/tmdbApi';


const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getTrendingFilms = () => {
      getTrending()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getTrendingFilms();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <HomeList films={films} />
    </div>
  );
};

export default Home;
