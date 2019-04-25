/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../pages/index.js';

describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    const app = shallow(<App name="ok" />);
    expect(app.find('p').text()).toEqual('Hello World, ok');
  });
});

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(<App name="user"/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
