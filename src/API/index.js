const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '91ae85947dca7203ec2b4d7841a3c73b';

export const getTrendingFilms = async () => {
  const response = await fetch(
    `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&language=en - US`
  );
  if (!response.ok) {
    throw new Error('Ops .... ');
  }
  const filmList = await response.json();

  return filmList.results;
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

//   const params = new URLSearchParams({
//     api_key: '91ae85947dca7203ec2b4d7841a3c73b',
//     language: 'en - US',
//   });
