import { Link } from 'react-router-dom';
// import { getFilmById } from '../API/index';

const Movies = () => {
  return (
    <>
      <p>Film Name</p>
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
    </>
  );
};

export default Movies;
