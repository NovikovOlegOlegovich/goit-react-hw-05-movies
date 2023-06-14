import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route path="cast" element={<Movies />} />
          <Route path="reviews" element={<Movies />} />
        </Route>
        <Route path="/movies/:filmId" element={<MovieDetails />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </div>
  );
};
