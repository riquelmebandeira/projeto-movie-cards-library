import React from 'react';
import PropTypes from 'prop-types';

class TextInputs extends React.Component {
  render() {
    const { title, subtitle, imagePath, callback } = this.props;
    return (
      <>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="title-input"
            value={ title }
            data-testid="title-input"
            onChange={ callback }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="title-input"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ callback }
          />
        </label>
        <label htmlFor="imagePath-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="image-input"
            value={ imagePath }
            data-testid="image-input"
            onChange={ callback }
          />
        </label>
      </>
    );
  }
}

TextInputs.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
}.isRequired;

export default TextInputs;
