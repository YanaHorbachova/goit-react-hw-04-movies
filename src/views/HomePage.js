import React, { Component } from 'react';
import { fetchPopularMovies } from '../services/api-services';
import CardList from '../components/CardList';
import Navigation from '../components/Navigation';

class HomeView extends Component {
state = {
    movies: []
};

async componentWillMount() {
    fetchPopularMovies()
    .then(({ data }) => this.setState({ movies: data.results }))
    .catch(console.log);

}
render () {
    const { movies } = this.state;
    return (
        <>        
        <Navigation />
        <CardList movies={movies}/>
        </>
    );
};
}


export default HomeView;