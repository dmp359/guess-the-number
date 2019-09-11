import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LabelBox from 'components/LabelBox/LabelBox.jsx';

/*
* A simple React form to handle user input
*/
class GuessBox extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Handle typing in input box. Sets state with value
  handleChange (e) {
    //  Error checking before parsing int should go here. Omitting for time.
    this.setState({ value: parseInt(e.target.value, 10) });
  }

  // Handle submitting of form
  onSubmit (e) {
    e.preventDefault(); // Don't refresh page
    this.props.onSubmit(this.state.value);
  }

  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        <LabelBox label="Guess: " onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

GuessBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default GuessBox;
