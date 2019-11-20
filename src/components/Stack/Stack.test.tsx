import React from 'react';
import { shallow } from 'enzyme';

import { Stack } from './Stack';

describe('Stack', () => {
  it('renders correctly', () => {
    const component = shallow(
      <Stack space={6} direction='horizontal'>
        <div>Hello</div>
        <div>World</div>
      </Stack>
    );

    expect(component.html()).toContain('Stack--horizontal-6');
    expect(component.text()).toContain('HelloWorld');
  });
});
