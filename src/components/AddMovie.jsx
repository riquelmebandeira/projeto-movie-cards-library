import React from 'react';
import TextInputs from './addmovie_subcomponents/TextInputs';
import Textarea from './addmovie_subcomponents/Textarea';
import NumberInput from './addmovie_subcomponents/NumberInput';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };

    this.handleFormData = this.handleFormData.bind(this);
  }

  handleFormData(event) {
    this.setState(
      { [event.target.name]: event.target.value },
    );
  }

  render() {
    // const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextInputs
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          callback={ this.handleFormData }
        />
        <Textarea
          storyline={ storyline }
          callback={ this.handleFormData }
        />
        <NumberInput
          rating={ rating }
          callback={ this.handleFormData }
        />
      </form>
    );
  }
}

export default AddMovie;
