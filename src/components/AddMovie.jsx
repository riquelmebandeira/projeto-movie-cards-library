import React from 'react';
import TextInputs from './addmovie_subcomponents/TextInputs';
import Textarea from './addmovie_subcomponents/Textarea';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };

    this.handleInputText = this.handleInputText.bind(this);
  }

  handleInputText(event) {
    this.setState(
      { [event.target.name]: event.target.value },
    );
  }

  render() {
    // const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextInputs
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          callback={ this.handleInputText }
        />
        <Textarea
          storyline={ storyline }
          callback={ this.handleInputText }
        />
      </form>
    );
  }
}

export default AddMovie;
