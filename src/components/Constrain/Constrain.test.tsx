import React from 'react';
import { shallow } from 'enzyme';

import { Constrain } from './Constrain';

describe('Constrain', () => {
  xit('renders correctly', () => {
    const component = shallow(<Constrain>Hello</Constrain>);
    expect(component.text()).toContain('Hello');
  });
});
