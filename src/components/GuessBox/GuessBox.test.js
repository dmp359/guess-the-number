import React from 'react';
import { shallow } from 'enzyme';
import GuessBox from './GuessBox';

it('renders without crashing', () => {
  const component = shallow(<GuessBox onSubmit={() => {}}/>);
  expect(component.debug()).toMatchSnapshot();
});

it('handles parsing value of number', () => {
  const component = shallow(<GuessBox onSubmit={() => {}} />);
  expect(component.state('value')).toEqual('');
  component.instance().handleChange({ target: { value: '5' }});
  expect(component.state('value')).toEqual(5);
  component.instance().handleChange({ target: { value: 5 }});
  expect(component.state('value')).toEqual(5);
});
