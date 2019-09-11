import React from 'react';
import ReactDOM from 'react-dom';
import LabelBox from './LabelBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LabelBox />, div);
});
