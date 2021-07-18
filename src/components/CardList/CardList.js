import React from 'react' ;
import { Link, withRouter } from 'react-router-dom';
import CardListPreview from './CardListPreview';

const CardList = ({ movies, location }) => {
    return (
        <ul>
            {movies.map(({ id, poster_path, title, vote_average, vote_count }) => (
                <li key = {id}>
                   <Link to={{
              pathname: `/movies/${id}`,
              state: {
                from: location,
              },
            }}> 
            <CardListPreview
              poster_path={poster_path}
              title={title}
              vote_average={vote_average}
              vote_count={vote_count}
            />
             </Link>
                </li>
            ))}
        </ul>


    );
}



export default withRouter(CardList);