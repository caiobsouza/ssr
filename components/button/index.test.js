/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from './index.js';

describe('<Button>', () => {
    it('should be same label as passed in props', () => {
      const app = shallow(<Button type="primary">label</Button>);
      expect(app.find('.btn').text()).toEqual('label');
    });

    it('should be same type as passed in props', () => {
      const app = shallow(<Button type="primary">label</Button>);
      expect(app.find('.btn').hasClass('primary'));
    });
  });

describe('With Snapshot Testing', () => {
    it('should be rendered', () => {
      const component = renderer.create(<Button type="primary">Label</Button>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });