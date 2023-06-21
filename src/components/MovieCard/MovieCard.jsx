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

  return (
    <>
      <BackLinkLocationRef to={backLinkLocationRef.current}>
        Back
      </BackLinkLocationRef>
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
  film: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
    overview: PropTypes.string,
    genres: PropTypes.string,
  }),
};

export default React.memo(MovieCard);
