import React from 'react';
import { shallow } from 'enzyme';

import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('renders correctly', () => {
    const component = shallow(<TextInput placeholder='Hello' />);
    expect(component.html()).toEqual(
      '<input class="TextInput" placeholder="Hello" aria-label="Hello"/>'
    );
  });
});
