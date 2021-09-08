import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };

    this.handleTextInputs = this.handleTextInputs.bind(this);
  }

  handleTextInputs(event) {
    this.setState(
      { [event.target.name]: event.target.value },
    );
  }

  render() {
    // const { onClick } = this.props;
    const { subtitle, title, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="title-input"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleTextInputs }
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
            onChange={ this.handleTextInputs }
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
            onChange={ this.handleTextInputs }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
