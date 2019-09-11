import React from 'react';
import PropTypes from 'prop-types';

// Dummy component that displays a label and input box
const LabelBox = ({ label, onChange, value }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" onChange={onChange} value={value} />
    </div>
  )
};
  
LabelBox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default LabelBox;
