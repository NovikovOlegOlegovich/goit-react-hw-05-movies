import React from 'react';
import {
  SearchFilmItem,
  Poster,
  FilmCardWrapper,
  EverageDescription,
  HederOverview,
  OverviewDescription,
  HederGenres,
  GenresDescription,
} from './MovieCard.styled';
import Heder1 from '../Heder1';

const MovieCard = ({ film }) => {
  const { poster_path, original_title, vote_average, overview, genres } = film;

  const ganres = () => {
    let stringOfGanres = '';
    genres?.map(ganre => {
      stringOfGanres += ` ${ganre.name}`;
    });
    return stringOfGanres;
  };

  const listOfGanres = ganres();
  const average = vote_average?.toFixed(1);

  return (
    <SearchFilmItem>
      {poster_path ? (
        <Poster
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="poster"
          height="650"
        ></Poster>
      ) : (
        <Poster
          src="https://placehold.co/500x750?text=Poster+not+available"
          alt="poster"
          height="650"
        ></Poster>
      )}
      <FilmCardWrapper>
        <Heder1>{original_title}</Heder1>
        <EverageDescription>User Score: {average}</EverageDescription>
        <HederOverview>Overview</HederOverview>
        <OverviewDescription>{overview}</OverviewDescription>
        <HederGenres>Genres</HederGenres>
        <GenresDescription>{listOfGanres}</GenresDescription>
      </FilmCardWrapper>
    </SearchFilmItem>
  );
};

export default React.memo(MovieCard);
