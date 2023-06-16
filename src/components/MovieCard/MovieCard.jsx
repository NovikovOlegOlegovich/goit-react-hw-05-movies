import { SearchFilmItem } from './MovieCard.styled';
import Heder1 from '../Heder1';

const MovieCard = ({ film }) => {
  const { poster_path, original_title, vote_average, overview } = film;

  return (
    <SearchFilmItem>
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="poster"
          height="650"
        ></img>
      ) : (
        <img
          src="https://placehold.co/500x750?text=Poster+not+available"
          alt="poster"
          height="650"
        ></img>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 20,
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Heder1>{original_title}</Heder1>
        <p style={{ fontSize: '25px' }}>User Score {vote_average}</p>
        <h2 style={{ margin: '0' }}>Overview</h2>
        <p style={{ fontSize: '25px' }}>{overview}</p>
        <h3 style={{ margin: '0' }}>Genres</h3>
        {/* <p>{genres}</p> */}
      </div>
    </SearchFilmItem>
  );
};

export default MovieCard;
