import React from 'react';
import PropTypes from 'prop-types';
import TextInputs from './addmovie_subcomponents/TextInputs';
import Textarea from './addmovie_subcomponents/Textarea';
import NumberInput from './addmovie_subcomponents/NumberInput';
import Select from './addmovie_subcomponents/Select';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleFormData = this.handleFormData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleFormData(event) {
    this.setState(
      { [event.target.name]: event.target.value },
    );
  }

  handleClick(event) {
    event.preventDefault();

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });

    const { onClick } = this.props;

    onClick(this.state);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
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
        <Select
          genre={ genre }
          callback={ this.handleFormData }
        />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ (event) => this.handleClick(event) }
          disabled={ !Object.values(this.state).every(Boolean) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
