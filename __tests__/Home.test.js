/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../src/components/Home';

describe('With Snapshot Testing', () => {
    it('App shows "Hello world!"', () => {
        const component = renderer.create(<Home />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
