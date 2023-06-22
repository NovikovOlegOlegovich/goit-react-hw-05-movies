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

  const defaultPoster =
    'https://placehold.co/500x750?text=Poster+not+available';
  const isCast = actors.length;

  return isCast > 0 ? (
    <CastList>
      {actors.map(({ profile_path, name, character, id }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/original${profile_path}`
                : defaultPoster
            }
            alt="actor"
            width="200"
          ></img>

          <CastName>{name}</CastName>
          <CastCharacter>Character: {character}</CastCharacter>
        </li>
      ))}
    </CastList>
  ) : (
    <p>Cast not found</p>
  );
};
export default Cast;
