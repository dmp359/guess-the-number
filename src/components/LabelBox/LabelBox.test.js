import React from 'react';
import { shallow } from 'enzyme';
import LabelBox from './LabelBox.jsx';

it('renders without crashing with all required and no optional value prop', () => {
  const component = shallow(
    <LabelBox label='label' onChange={() => {}} />
  );
  expect(component.debug()).toMatchSnapshot();
});

it('renders without crashing with all required and one optional value prop', () => {
  const component = shallow(
    <LabelBox label='label' onChange={() => {}} value='10' />
  );
  expect(component.debug()).toMatchSnapshot();
});


