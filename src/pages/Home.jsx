import { useEffect, useState } from 'react';
import { getTrendingFilms } from '../API/index';
import Heder1 from '../components/Heder1';
import HomeFilmList from '../components/HomeFilmList';

const Home = () => {
  const [trendingFilm, setTrendingFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const trendingFilms = await getTrendingFilms();

        if (!trendingFilms) {
          throw new Error('No matches found');
        }

        setTrendingFilms(trendingFilms);
      } catch (errors) {
        setError(errors.message);
      }
    };

    fetchFilms();
  }, []);

  console.log(error);

  return (
    <>
      <Heder1>Trending today</Heder1>
      <HomeFilmList trendingFilms={trendingFilm} />
    </>
  );
};

export default Home;
