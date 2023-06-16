import { useEffect, useState } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import { getFilmById } from '../API/index';
import MovieCard from '../components/MovieCard';

const MovieDetails = () => {
  const [searchFilm, setSearchFilm] = useState('');
  const [error, setError] = useState(null);
  const film = useParams();
  const query = film.filmId;

  useEffect(() => {
    const fetchFilmsById = async () => {
      try {
        const filmById = await getFilmById(query);

        if (!filmById) {
          throw new Error('No matches found');
        }

        setSearchFilm(filmById);
      } catch (errors) {
        setError(errors.message);
      }
    };
    fetchFilmsById();
  }, [query]);

  return (
    <>
      <MovieCard film={searchFilm} />
      <Link to="cast">cast</Link>
      <Link to="reviews">reviews</Link>
      <Outlet />
    </>
  );
};

export default MovieDetails;
