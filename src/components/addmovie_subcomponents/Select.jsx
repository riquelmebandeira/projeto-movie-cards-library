import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { genre, callback } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre-input"
          value={ genre }
          data-testid="genre-input"
          onChange={ callback }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  genre: PropTypes.string,
  callback: PropTypes.func,
}.isRequired;

export default Select;
