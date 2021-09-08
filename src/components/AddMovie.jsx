import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };

    this.handleTitleInput = this.handleTitleInput.bind(this);
  }

  handleTitleInput(event) {
    this.setState(
      { [event.target.name]: event.target.value },
    );
  }

  render() {
    // const { onClick } = this.props;
    const { title } = this.state;
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
            onChange={ this.handleTitleInput }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
