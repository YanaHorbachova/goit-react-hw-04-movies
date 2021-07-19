import React from 'react';
import PropTypes from 'prop-types';
import style from './CardList.module.css'


const CardListPreview = ({ poster_path, title, vote_average, vote_count }) => {
    const Base_Url = 'https://image.tmdb.org/t/p/w400';
  
    return (
      <div className = {style.Cards}>
        {poster_path !== null ? (
          <div className= {style.Image}>
            <img  src={`${Base_Url}/${poster_path}`} alt={title} />
          </div>
          ) : (
            <img
              src={`https://dummyimage.com/150x100/000/fff.jpg&text=no+image+:((`}
              alt={title}
            />
        )}
        <div>
          <h2 className={style.Title} >{title}</h2>
          <span  className={style.MovieContent} >
          <p className={style.Vote}>Vote: {vote_average}/10</p>
          <p className={style.Vote}>Vote count: {vote_count} votes</p>
          </span>
        </div>
      </div>
    );
  };
  

  CardListPreview.defaultProps = {
    posterUrl: '',
  };
  
  CardListPreview.propTypes = {
    posterUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote_count: PropTypes.number.isRequired,
    vote_average: PropTypes.number.isRequired
  }; 
  export default CardListPreview;
  