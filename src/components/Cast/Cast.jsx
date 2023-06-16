import { useEffect, useState } from 'react';
import { getActorsByFilmId } from '../../API/index';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [actors, setActors] = useState([]);

  const { filmId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const actors = await getActorsByFilmId(filmId);
      setActors(actors);
    };
    fetch();
  }, [filmId]);

  return actors.map(({ profile_path, name, character, id }) => (
    <div key={id}>
      {profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/original${profile_path}`}
          alt="actor"
          height="400"
        ></img>
      ) : (
        <img
          src="https://placehold.co/500x750?text=Poster+not+available"
          alt="actor"
          height="400"
        ></img>
      )}

      <p>{name}</p>
      <p>Character: {character}</p>
    </div>
  ));
};
export default Cast;
