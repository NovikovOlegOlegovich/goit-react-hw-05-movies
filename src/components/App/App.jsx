import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../Layout/Layout';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Reviews = lazy(() => import('../Cast'));
const Cast = lazy(() => import('../Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:filmId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Route>
    </Routes>
  );
};
