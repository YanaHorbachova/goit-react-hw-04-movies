import React from 'react';


const CardListPreview = ({ poster_path, title, vote_average, vote_count }) => {
    const Base_Url = 'https://image.tmdb.org/t/p/w400';
  
    return (
      <div>
        {poster_path !== null ? (
          <div>
            <img src={`${Base_Url}/${poster_path}`} alt={title} />
          </div>
        ) : (
          <img
            src={`https://dummyimage.com/150x100/000/fff.jpg&text=no+image+:((`}
            alt={title}
          />
        )}
        <div >
          <h2 >{title}</h2>
          <span>
            <p >Vote: {vote_average}/10</p>
            <p >Vote count: {vote_count} votes</p>
          </span>
        </div>
      </div>
    );
  };
  
  export default CardListPreview;
  