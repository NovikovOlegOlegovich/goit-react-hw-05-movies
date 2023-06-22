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
  const defaultPoster =
    'https://placehold.co/500x750?text=Poster+not+available';

  return (
    <FilmList>
      {trendingFilms?.map(({ original_title, id, poster_path }) => (
        <FilmListItem key={id}>
          <NavigationLink to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original${poster_path}`
                  : defaultPoster
              }
              width="200"
              alt="poster"
            ></img>
            <MovieTitle> {original_title}</MovieTitle>
          </NavigationLink>
        </FilmListItem>
      ))}
    </FilmList>
  );
};

HomeFilmList.propTypes = {
  trendingFilm: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }),
};

export default HomeFilmList;
// PropTypes.shape({
//     original_title: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     poster_path: PropTypes.string,
