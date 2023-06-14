import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmById } from '../API/index';

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

  console.log(searchFilm);
  const { poster_path, original_title, vote_average, overview } = searchFilm;

  return (
    <>
      <img src={`https://image.tmdb.org/t/p/original${poster_path}`}></img>
      <h1>{original_title}</h1>
      <p>User Score {vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
    </>
  );
};

export default MovieDetails;
