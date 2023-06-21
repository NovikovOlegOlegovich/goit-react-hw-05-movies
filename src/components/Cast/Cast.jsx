import { useEffect, useState } from 'react';
import { getActorsByFilmId } from '../../API/index';
import { useParams } from 'react-router-dom';
import { CastList, CastName, CastCharacter } from './Cast.styled';

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

  return (
    <CastList>
      {actors.map(({ profile_path, name, character, id }) => (
        <li key={id}>
          {profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
              alt="actor"
              width="200"
            ></img>
          ) : (
            <img
              src="https://placehold.co/500x750?text=Poster+not+available"
              alt="actor"
              width="200"
            ></img>
          )}

          <CastName>{name}</CastName>
          <CastCharacter>Character: {character}</CastCharacter>
        </li>
      ))}
    </CastList>
  );
};
export default Cast;
