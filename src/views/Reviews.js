import React, { Component } from 'react';
import {fetchMovieById} from '../services/api-services'

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