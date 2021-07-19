import React from 'react';
import PropTypes from 'prop-types';
import style from './Cast.module.css';
import defaultAvatar from '../../img/defaultAvatar.png';

const CAST_IMG_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = ({ cast }) => {
    return (
      <>
        {cast.length > 0 ? (
          <ul className={style.CastList}>
            {cast.map(({ cast_id, profile_path, name, character }) => (
              <li key={cast_id}>
                <img
                  src={profile_path
                      ? `${CAST_IMG_URL}${profile_path}`
                      : defaultAvatar
                  }
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