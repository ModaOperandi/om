import React from 'react';
import { shallow } from 'enzyme';

import { Clickable } from './Clickable';

describe('Clickable', () => {
  it('renders correctly', () => {
    const component = shallow(<Clickable>Hello</Clickable>);
    expect(component.text()).toEqual('Hello');
  });
});
