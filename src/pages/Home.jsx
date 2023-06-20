import { useEffect, useState } from 'react';
import { getTrendingFilms } from '../API/index';
import Heder1 from '../components/Heder1';
import HomeFilmList from '../components/HomeFilmList';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
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

  console.log(trendingFilms);

  return (
    <>
      <Heder1>Trending today</Heder1>
      <HomeFilmList trendingFilms={trendingFilms} />
    </>
  );
};

export default Home;
