import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getFilmById } from '../API/index';
import MovieCard from '../components/MovieCard';
import FilmDeteilsLinks from '../components/FilmDeteilsLinks';

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

  console.log(error);

  return (
    <>
      <MovieCard film={searchFilm} />
      <FilmDeteilsLinks />
      <Outlet />
    </>
  );
};

export default MovieDetails;
