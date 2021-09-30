import React from 'react';
import { mount } from 'enzyme';

import { Divider } from './Divider';

describe('Divider', () => {
  it('renders correctly', () => {
    const component = mount(<Divider style={{ padding: '30px 0' }} text='Hello' />);
    expect(component.text()).toEqual('Hello');
    expect(component.html()).toContain('style="padding: 30px 0px;"');
  });
});
