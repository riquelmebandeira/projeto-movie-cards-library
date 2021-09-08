import React from 'react';
import TextInputs from './addmovie_subcomponents/TextInputs';

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
        <TextInputs
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          callback={ this.handleTextInputs }
        />
      </form>
    );
  }
}

export default AddMovie;
