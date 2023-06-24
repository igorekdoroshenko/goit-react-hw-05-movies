import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { movieReviews } from 'service/tmdbApi';
import { List } from './Reviews.styled';


const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  

  useEffect(() => {
    const reviewsFilms = () => {
      

      movieReviews(movieId)
        .then(reviews => {
          setReviews(reviews);
        })
        .catch(error => {
          console.log(error);
        })
        ;
    };

    reviewsFilms();
  }, [movieId]);

  return (
    <>
      
      {reviews.length !== 0 && (
        <div>
          <List>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </List>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};

export default Reviews;