import React from 'react';
import { shallow } from 'enzyme';

import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    const component = shallow(<Input placeholder='Placeholder' defaultValue='Hello' />);
    expect(component.html()).toEqual(
      '<input class="Input" placeholder="Placeholder" value="Hello"/>'
    );
  });
});
