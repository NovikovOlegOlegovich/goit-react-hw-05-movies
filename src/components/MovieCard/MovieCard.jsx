import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  SearchFilmItem,
  Poster,
  FilmCardWrapper,
  EverageDescription,
  HederOverview,
  OverviewDescription,
  HederGenres,
  GenresDescription,
  FilmTitle,
  BackLinkLocationRef,
} from './MovieCard.styled';

const MovieCard = ({ film }) => {
  const { poster_path, original_title, vote_average, overview, genres } = film;

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const ganres = () => {
    let stringOfGanres = '';
    genres?.map(ganre => (stringOfGanres += ` ${ganre.name}`));
    return stringOfGanres;
  };

  const listOfGanres = ganres();
  const average = vote_average?.toFixed(1);
  const defaultPoster =
    'https://placehold.co/500x750?text=Poster+not+available';
  return (
    <>
      <BackLinkLocationRef to={backLinkLocationRef.current}>
        Back
      </BackLinkLocationRef>
      <SearchFilmItem>
        <Poster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : defaultPoster
          }
          alt="poster"
          height="650"
        ></Poster>
        <FilmCardWrapper>
          <FilmTitle>{original_title}</FilmTitle>
          <EverageDescription>User Score: {average}</EverageDescription>
          <HederOverview>Overview</HederOverview>
          <OverviewDescription>{overview}</OverviewDescription>
          <HederGenres>Genres</HederGenres>
          <GenresDescription>{listOfGanres}</GenresDescription>
        </FilmCardWrapper>
      </SearchFilmItem>
    </>
  );
};

MovieCard.propTypes = {
  searchFilm: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};

export default React.memo(MovieCard);
