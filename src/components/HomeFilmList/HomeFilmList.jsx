import { NavLink } from 'react-router-dom';

const HomeFilmList = ({ trendingFilms }) => {
  return (
    <ul>
      {trendingFilms.map(({ original_title, id }) => (
        <li key={id} style={{ fontSize: '20px' }}>
          <NavLink to={`/movies/${id}`}>{original_title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default HomeFilmList;
