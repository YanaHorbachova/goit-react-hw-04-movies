import React, {Component} from 'react';
import { NavLink, Route } from 'react-router-dom';
import {fetchMovieById} from '../services/api-services'
import Reviews from './Reviews'


class MovieDetailsPage extends Component {
    state = {
        poster_path: '',
        title: '',
        genres: [],
        overview: '',
        cast: [],
        reviews: [],
      };
    

    async componentDidMount () {
        const { movieId } = this.props.match.params;

        fetchMovieById(movieId)
        .then(({ data: { poster_path, title, genres, overview, credits, reviews } }) => { 
            console.log ({ poster_path, title, genres, overview, credits, reviews })
            this.setState({
                poster_path,
                title,
                overview,
                genres,
                cast: credits.cast,
                reviews: reviews.results,
              });})       
        .catch(console.log);
}

// handleGoBack = () => {
//     const { location, history } = this.props;
//     history.push(location?.state?.from || routes.home);
//   };

    render () {
        const { poster_path, title, genres, overview, cast, reviews } = this.state;
        const { match, location } = this.props;
        const deepLocation = location.state.from;

        return (
            <>
                <NavLink to={{pathname: `${match.url}/reviews`, state: { from: deepLocation }}} >
                    <span>Reviews</span>
                </NavLink>


                <Route path={`${match.path}/reviews`}
                    render={props => <Reviews {...props} reviews={reviews} />}
                 />
            </>
         )
 }
};

export default MovieDetailsPage;