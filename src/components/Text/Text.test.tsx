import React from 'react';
import { shallow } from 'enzyme';

import { Text } from './Text';

describe('Text', () => {
  it('renders correctly', () => {
    const component = shallow(
      <Text treatment='body2' color='money-good' family='serif'>
        Hello
      </Text>
    );
    expect(component.html()).toEqual(
      '<span class="Text Text--body2 Text--serif" style="color:rgb(4, 108, 0)">Hello</span>'
    );
  });
});
