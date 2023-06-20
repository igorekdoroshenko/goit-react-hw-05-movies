import React, { useEffect, useState } from 'react';
import List from 'components/List/List';
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
    <main>
      <h1>Trending today</h1>
      <List films={films} />
    </main>
  );
};

export default Home;
