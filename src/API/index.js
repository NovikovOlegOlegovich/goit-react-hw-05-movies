const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '91ae85947dca7203ec2b4d7841a3c73b';

export const getTrendingFilms = async () => {
  const response = await fetch(
    `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) {
    throw new Error('Ops .... ');
  }
  const { results } = await response.json();

  return results;
};

export const getFilmById = async id => {
  const response = await fetch(
    `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en - US`
  );
  if (!response.ok) {
    throw new Error('Ops .... ');
  }
  const film = await response.json();

  return film;
};

export const getFilmByQuery = async query => {
  const response = await fetch(
    `${BASE_URL}/3/search/movie?query=${query}&api_key=${API_KEY}&language=en - US`
  );
  if (!response.ok) {
    throw new Error('Ops .... ');
  }
  const { results } = await response.json();

  return results;
};

export const getActorsByFilmId = async id => {
  const response = await fetch(
    `${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}&language=en - US`
  );
  if (!response.ok) {
    throw new Error('Ops .... ');
  }
  const { cast } = await response.json();

  return cast;
};

export const getReviewsByFilmId = async id => {
  const response = await fetch(
    `${BASE_URL}/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) {
    throw new Error('Ops .... ');
  }
  const { results } = await response.json();
  return results;
};
