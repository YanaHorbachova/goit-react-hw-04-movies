import React, { Component }  from 'react';
import Navigation from '../components/Navigation';
import SearchBar from '../components/Searchbar';
import CardList from '../components/CardList';
import { fetchMovieByName } from '../services/api-services';

const queryString = require('query-string');

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const query = this.getQueryFromProps(this.props);

    if (query) {
      this.onChangeQuery(query);
    }
  }

  onChangeQuery = query => {
    fetchMovieByName(query)
      .then(({ data }) => {
        this.setState({
          searchQuery: query,
          movies: data.results,
        });
      })
      .then(() => {
        const { history, location } = this.props;

        history.push({
          pathname: location.pathname,
          search: `?query=${query}`,
        });
      })
      .catch(console.log);
  };

  getQueryFromProps = props => queryString.parse(props.location.search).query;

  render() {
    const { movies } = this.state;

    return (
      <>
        <Navigation/>
        <SearchBar onSubmit={this.onChangeQuery} />
        <CardList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;