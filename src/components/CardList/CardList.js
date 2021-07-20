import React from 'react' ;
import { NavLink, withRouter } from 'react-router-dom';
import CardListPreview from './CardListPreview';
import style from './CardList.module.css'

const CardList = ({ movies, location }) => {
  return (
    <ul className = {style.list}>
      {movies.map(({ id, poster_path, title, vote_average, vote_count }) => (
        <li className = {style.Item} key = {id} >
          <NavLink to={{pathname: `/movies/${id}`, state: {from: location,}}}> 
            <CardListPreview
              poster_path={poster_path}
              title={title}
              vote_average={vote_average}
              vote_count={vote_count}
            />
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default withRouter(CardList);