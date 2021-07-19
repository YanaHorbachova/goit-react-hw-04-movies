import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => {
    return (
      <>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h2>
            We don't have any reviews to this movie
          </h2>
        )}
      </>
    );
  };
  
  export default Reviews;

  Reviews.propTypes = {
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };