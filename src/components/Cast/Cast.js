import React from 'react';
import PropTypes from 'prop-types';

const CAST_IMG_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = ({ cast }) => {
    return (
      <>
        {cast.length > 0 ? (
          <ul>
            {cast.map(({ cast_id, profile_path, name, character }) => (
              <li key={cast_id}>
                <img
                  src={`${CAST_IMG_URL}${profile_path}`}
                  alt={name}
                />
                <div>
                  <h3>{name}</h3>
                  <p>{character}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <h2>No Info</h2>
        )}
      </>
    );
  };
  
  export default Cast;
  
  Cast.defaultProps = {
    cast: [],
    profile_path: '',
  };
  
  Cast.propTypes = {
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        cast_id: PropTypes.number.isRequired,
        profile_path: PropTypes.string,
        name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
      }),
    ),
  };