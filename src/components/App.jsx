import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
// import Home from 'page/Home/Home';
// import Movies from 'page/Movies/Movies';
// import MovieDetails from 'page/Movies/MovieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
const Casts = lazy(() => import('components/Casts/Casts'));
const Home = lazy(() => import('page/Home/Home'));
const Movies = lazy(() => import('page/Movies/Movies'));
const MovieDetails = lazy(() => import('page/Movies/MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/movies/" element={<Movies />} />

        
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          {/* <Route path="/movies/:movieId/cast" element={<Cast />}/> */}
          <Route path="/movies/:movieId/casts" element={<Casts />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />}/>
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
