import React from 'react';
import { shallow } from 'enzyme';
import CTConfigGame from './CTConfigGame';

it('renders without crashing with all required props', () => {
  const component = shallow(
    <CTConfigGame lower={1} onReset={() => {}} upper={10} />
  );
  expect(component.debug()).toMatchSnapshot();
});

it('handles parsing value of changing lower number', () => {
  const component = shallow(<CTConfigGame lower={1} onReset={() => {}} upper={10} />);
  expect(component.state('userLower')).toEqual('');
  component.instance().onChangeLower({ target: { value: '5' }});
  expect(component.state('userUpper')).toEqual('');
  expect(component.state('userLower')).toEqual(5);
});

it('handles parsing value of changing upper number', () => {
  const component = shallow(<CTConfigGame lower={1} onReset={() => {}} upper={10} />);
  expect(component.state('userUpper')).toEqual('');
  component.instance().onChangeUpper({ target: { value: '5' }});
  expect(component.state('userUpper')).toEqual(5);
  expect(component.state('userLower')).toEqual('');
});

it('calls parent reset when onReset() is invoked', () => {
  const mockFunction = jest.fn();
  const component = shallow(<CTConfigGame lower={1} onReset={mockFunction} upper={10} />);
  component.instance().onReset();
  expect(mockFunction.mock.calls.length).toBe(1);
});
