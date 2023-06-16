import { useEffect, useState } from 'react';
import { getReviewsByFilmId } from '../../API/index';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { filmId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const reviews = await getReviewsByFilmId(filmId);
      setReviews(reviews);
    };
    fetch();
  }, [filmId]);

  return reviews.length ? (
    reviews.map(({ content }) => <p style={{ fontSize: '25px' }}>{content}</p>)
  ) : (
    <p>Reviews does not found</p>
  );
};

export default Reviews;
