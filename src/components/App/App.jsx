import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import MovieDetails from '../../pages/MovieDetails';
import Reviews from '../Reviews';
import Cast from '../Cast';
import Layout from '../Layout/Layout';
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
