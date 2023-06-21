import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SearchFilmItem = styled.div`
  display: flex;
  font-size: 40px;
  color: #010101;
  margin: 15px;
`;

export const Poster = styled.img``;

export const FilmCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 40px;
  color: #010101;
`;

export const EverageDescription = styled.p`
  font-size: 25px;
  margin: 0px;
  margin-bottom: 20px;
`;

export const HederOverview = styled.h2`
  font-size: 35px;
  margin: 0px;
`;

export const OverviewDescription = styled.p`
  font-size: 25px;
`;

export const HederGenres = styled.h3`
  font-size: 35px;
  margin: 0px;
`;

export const GenresDescription = styled.p`
  font-size: 25px;
`;

export const FilmTitle = styled.h1`
  margin: 0px;
  margin-bottom: 20px;
  font-size: 35px;
  color: #000000;
`;

export const BackLinkLocationRef = styled(Link)`
  font-size: 20px;
  font-weight: 500;

  text-decoration: none;

  padding: 2px 8px;

  border: 1px solid transparent;
  border-radius: 5px;

  color: white;
  background-color: #646565;
`;
