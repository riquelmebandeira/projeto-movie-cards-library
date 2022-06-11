import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { labelText, name, value, callback } = this.props;
    return (
      <label htmlFor={ name }>
        { labelText }
        <input
          type="text"
          name={ name }
          id={ name }
          value={ value }
          onChange={ callback }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  labelText: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  callback: PropTypes.func,
}.isRequired;

export default TextInput;
