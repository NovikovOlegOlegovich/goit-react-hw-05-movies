import { useLocation } from 'react-router-dom';
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

export default HomeFilmList;
