import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { movieReviews } from 'service/tmdbApi';



const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  

  useEffect(() => {
    const fetchReviewsFilms = () => {
      

      movieReviews(movieId)
        .then(reviews => {
          setReviews(reviews);
        })
        .catch(error => {
          console.log(error);
        })
        ;
    };

    fetchReviewsFilms();
  }, [movieId]);

  return (
    <>
      
      {reviews.length !== 0 && (
        <div>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};

export default Reviews;