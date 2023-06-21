import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FilmList,
  FilmListItem,
  NavigationLink,
  MovieTitle,
} from './HomeFilmList.styled';

const HomeFilmList = ({ trendingFilms }) => {
  const location = useLocation();
  return (
    <FilmList>
      {trendingFilms.map(({ original_title, id, poster_path }) => (
        <NavigationLink to={`/movies/${id}`} state={{ from: location }}>
          <FilmListItem key={id}>
            <img
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              width="200"
              alt="poster"
            ></img>
            <MovieTitle> {original_title}</MovieTitle>
          </FilmListItem>
        </NavigationLink>
      ))}
    </FilmList>
  );
};

HomeFilmList.propTypes = {
  trendingFilms: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }),
};

export default HomeFilmList;
