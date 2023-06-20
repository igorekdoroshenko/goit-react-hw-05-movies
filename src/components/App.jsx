import {Route, Routes } from 'react-router-dom';
import Home from 'page/Home/Home';
import Movies from 'page/Movies/Movies';
import MovieDetails from 'page/Movies/MovieDetails/MovieDetails';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
};
