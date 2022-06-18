import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;

    return (
      <form className="search-bar-form">
        <label htmlFor="text-field" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="searchText"
            id="text-field"
            value={ searchText }
            data-testid="text-input"
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="select-field" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="select-field"
            name="selectedGenre"
            value={ selectedGenre }
            data-testid="select-input"
            onChange={ onSelectedGenreChange }
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
        <label htmlFor="checkbox-field" className="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarkedOnly"
            id="checkbox-field"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
