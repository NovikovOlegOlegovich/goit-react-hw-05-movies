import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import { getFilmByQuery } from '../API/index';
import HomeFilmList from '../components/HomeFilmList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setFilms] = useState();
  const searchQuery = searchParams.get('query') ?? '';

  const handleSubmit = query => {
    query ? setSearchParams({ query }) : setSearchParams({});
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await getFilmByQuery(searchQuery);
      setFilms(response);
    };
    fetch();
  }, [searchQuery]);

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      <HomeFilmList trendingFilms={films} />
    </>
  );
};

export default Movies;
