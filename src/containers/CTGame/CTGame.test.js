import React from 'react';
import { shallow } from 'enzyme';
import CTGame from './CTGame';

it('renders without crashing', () => {
  const component = shallow(<CTGame />);
  expect(component.debug()).toMatchSnapshot();
});

it('renders message if exists', () => {
  const component = shallow(<CTGame />);
  const str = 'test-message';
  expect(component.state('msg')).toEqual('');
  component.setState({ msg: str });
  expect(component.state('msg')).toEqual(str);
  component.update();
  expect(component.debug()).toMatchSnapshot();
});

it('handles a correct guess', () => {
  const component = shallow(<CTGame />);
  component.setState({ number: 5 }); // Mystery number is now 5
  component.instance().onGuess(5);
  component.update();
  expect(component.debug()).toMatchSnapshot();  
});

it('handles a low guess', () => {
  const component = shallow(<CTGame />);
  component.setState({ number: 5 }); // Mystery number is now 5
  component.instance().onGuess(4);
  component.update();
  expect(component.debug()).toMatchSnapshot();  
});

it('handles a high guess', () => {
  const component = shallow(<CTGame />);
  component.setState({ number: 5 }); // Mystery number is now 5
  component.instance().onGuess(6);
  component.update();
  expect(component.debug()).toMatchSnapshot();  
});

it('resets properly', () => {
  const component = shallow(<CTGame />);
  component.instance().onReset(0, 100);
  component.update();
  expect(component.debug()).toMatchSnapshot();  
});
