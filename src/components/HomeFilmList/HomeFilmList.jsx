import {
  FilmList,
  FilmListItem,
  NavigationLink,
  MovieTitle,
} from './HomeFilmList.styled';

const HomeFilmList = ({ trendingFilms }) => {
  return (
    <FilmList>
      {trendingFilms.map(({ original_title, id, poster_path }) => (
        <NavigationLink to={`/movies/${id}`}>
          <FilmListItem key={id}>
            <img
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              width="200"
            ></img>
            <MovieTitle> {original_title}</MovieTitle>
          </FilmListItem>
        </NavigationLink>
      ))}
    </FilmList>
  );
};

export default HomeFilmList;
