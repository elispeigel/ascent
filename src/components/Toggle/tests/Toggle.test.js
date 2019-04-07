import React from 'react';
import Toggle from '../Toggle';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Toggle />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})