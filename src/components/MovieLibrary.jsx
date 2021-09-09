import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterMovieList = this.filterMovieList.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      { [target.name]: value },
    );
  }

  filterMovieList() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    let result = movies;

    if (bookmarkedOnly === true) {
      result = movies.filter(({ bookmarked }) => bookmarked === true);
      return result;
    }
    if (selectedGenre !== '') {
      result = movies.filter(({ genre }) => genre === selectedGenre);
      return result;
    }
    if (searchText !== '') {
      result = movies.filter(
        ({ title, subtitle, storyline }) => title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText),
      );
      return result;
    }
    return result;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filteredMovieList = this.filterMovieList();
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ filteredMovieList } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
