import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../img/noPosterImg.png';
import styles from './Movie.module.css';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w300';

const MovieInfo = ({ poster_path, title, genres, overview }) => {
  return (
    <div className={styles.MovieBox}>
        <img
            className={styles.Image}
            src={poster_path ? `${BASE_POSTER_URL}${poster_path}` : defaultImage}
            alt={`${title} poster`}
        />
        <div>
            <h2 className={styles.Title}>{title}</h2>
            {genres.length > 0 ? (
            <ul>
                {genres.map(genre => (
                <li className={styles.Genres} key={genre.id}>
                    {genre.name}
                </li> ))}
            </ul> ) : (
            <h2>
                We have no data on the hotness of this movie.
            </h2>
            )}
            <p className={styles.Overview}>{overview}</p>
        </div>
    </div>
  );
};

export default MovieInfo;

MovieInfo.defaultProps = {
  poster_path: '',
  overview: 'No overview',
  title: 'No title',
};

MovieInfo.propTypes = {
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  title: PropTypes.string,
};
