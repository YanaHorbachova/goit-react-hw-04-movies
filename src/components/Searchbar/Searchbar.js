import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = ({ currentTarget }) => {
    this.setState({ query: currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { query } = this.state;

    onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state

    return (
      <div className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.Button}>
            <span className={styles.ButtonLabel}>Search</span>
          </button>

          <input
            className={styles.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter the title of the movie"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
