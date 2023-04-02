import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from 'services/Api';
import css from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (reviews === null) {
      Api(`${movieId}/reviews`).then(res => {
        setReviews(res.results);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    reviews && (
      <div className={css.reviews}>
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <span>{review.author}</span>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}
