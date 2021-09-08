import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { storyline, callback } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-input"
          cols="30"
          rows="10"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ callback }
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  storyline: PropTypes.string,
  callback: PropTypes.func,
}.isRequired;

export default Textarea;
