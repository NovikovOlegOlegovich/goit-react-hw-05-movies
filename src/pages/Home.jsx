import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getTrendingFilms } from '../API/index';

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

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingFilms.map(({ original_title, id }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`}>{original_title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
