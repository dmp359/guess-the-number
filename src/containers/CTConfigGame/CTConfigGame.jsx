import React, { Component } from 'react';
import LabelBox from 'components/LabelBox/LabelBox.jsx';
import PropTypes from 'prop-types';

import './CTConfigGame.css';

/*
* Container for configuring gameplay
*/
class CTConfigGame extends Component {
  constructor(props) {
    super(props);
    this.state = { userLower: '', userUpper: '' };

    this.onChangeLower = this.onChangeLower.bind(this);
    this.onChangeUpper = this.onChangeUpper.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  // On change of input boxes
  onChangeLower(e) {
    this.setState({ userLower: parseInt(e.target.value, 10) });
  };

  onChangeUpper(e) {
    this.setState({ userUpper: parseInt(e.target.value, 10) });
  };

  // On press of reset button
  onReset() {
    const { userLower, userUpper } = this.state;
    const lower = userLower || this.props.lower;
    const upper = userUpper || this.props.upper;
    this.props.onReset(lower, upper);
  }

  render() {
    const { lower, upper } = this.props;
    const { userLower, userUpper } = this.state;
    return (
      <div className='config'>
        <div className='config-label'>Game Config</div>
        <LabelBox
          label="Lower bound: "
          onChange={this.onChangeLower}
          value={userLower || lower} 
        />
        <LabelBox
          label="Upper bound: "
          onChange={this.onChangeUpper}
          value={userUpper || upper} 
        />
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

CTConfigGame.propTypes = {
  lower: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
  upper: PropTypes.number.isRequired,
}

export default CTConfigGame;
