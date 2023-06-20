import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import { getFilmByQuery } from '../API/index';
import HomeFilmList from '../components/HomeFilmList';

const Movies = () => {
  const [films, setFilms] = useState([]);

  const handleSubmit = async query => {
    const films = await getFilmByQuery(query);
    setFilms(films);
  };

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      <HomeFilmList trendingFilms={films} />
    </>
  );
};

export default Movies;
