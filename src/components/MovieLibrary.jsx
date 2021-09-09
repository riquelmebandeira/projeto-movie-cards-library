import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    // const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies: { movies },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      { [target.name]: value },
    );
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.handleChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.handleChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.handleChange }
      />
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.array,
// }.isRequired;

export default MovieLibrary;
