import React, { Component } from 'react';
import { randInt } from 'utils/math';
import GuessBox from 'components/GuessBox/GuessBox.jsx';
import CTConfigGame from 'containers/CTConfigGame/CTConfigGame.jsx';
import PropTypes from 'prop-types';

import './CTGame.css';

/*
* Container for main gameplay
*/
class CTGame extends Component {
  constructor(props) {
    super(props);
    
    // Set default state and generate the mystery number
    const lower = props.lower || 1;
    const upper = props.upper || 10;
    this.state = { lower, upper, number: randInt(lower, upper), prev: 'none', msg: '' };

    this.onGuess = this.onGuess.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  // Handle guess
  onGuess (guess) {
    const userGuess = guess || 0;
    const { number } = this.state;
    this.setState({ prev: guess });
    if (userGuess > number) {
      this.setState({ msg: 'Nope. Lower' });
    } else if (userGuess < number) {
      this.setState({ msg: 'Nope. Higher' });
    } else {
      this.setState({ msg: 'You got it!' });
    }
  };

  // Handle reset from config of new upper and lower value
  onReset(l, u) {
    this.setState({ lower: l, upper: u, number: randInt(l, u), prev: 'none', msg: '' });
  }

  render() {
    const { lower, upper, prev, msg } = this.state;

    // Only render a status (e.g. "too low!") if one is available
    let status;
    if (msg !== '') {
      status = (<div className='instructions'>{msg}</div>)
    }

    return (
      <div className='window'>
        <div className='play-label'>Play!</div>
        <div className='instructions'>
          Guess a number between {lower} and {upper}
        </div>
        <div className='instructions'>
          Previous guess was {prev}
        </div>
        {status}
        <GuessBox onSubmit={this.onGuess} />
        <CTConfigGame upper={upper} lower={lower} onReset={this.onReset} />
      </div>
    );
  }
}

CTGame.propTypes = {
  lower: PropTypes.number,
  upper: PropTypes.number,
}

export default CTGame;
