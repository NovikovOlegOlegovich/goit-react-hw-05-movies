import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import MoviCardList from '../components/MoviCardList';
import SearchForm from '../components/SearchForm';
// import { Link } from 'react-router-dom';
import { getFilmByQuery } from '../API/index';

const Movies = () => {
  const [films, setFilms] = useState([]);

  const handleSubmit = async query => {
    const films = await getFilmByQuery(query);
    setFilms(films);
  };

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      <MoviCardList>
        {films.map(film => (
          <MovieCard film={film} key={film.id} />
        ))}
      </MoviCardList>
    </>
  );
};

export default Movies;
