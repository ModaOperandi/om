import React from 'react';
import { mount } from 'enzyme';

import { Popover } from './Popover';

describe('Popover', () => {
  it('renders correctly', () => {
    const component = mount(
      <Popover content={<div>Secret</div>}>
        <span>Hover</span>
      </Popover>
    );

    expect(component.html()).not.toContain('Secret');
    component.simulate('mouseenter');
    expect(component.html()).toContain('Secret');
  });
});
