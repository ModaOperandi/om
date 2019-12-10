import React from 'react';
import { mount } from 'enzyme';

import { PromoBanner } from './PromoBanner';

describe('PromoBanner', () => {
  it('renders correctly', () => {
    const component = mount(
      <PromoBanner>
        <span>Hello</span>
      </PromoBanner>
    );
    expect(component.text()).toEqual('Hello');
  });
});
