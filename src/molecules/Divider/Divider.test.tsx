import React from 'react';
import { shallow } from 'enzyme';

import { Divider } from './Divider';

describe('Divider', () => {
  it('renders correctly', () => {
    const component = shallow(<Divider style={{ padding: '30px 0' }} text='Hello' />);
    expect(component.text()).toEqual('Hello');
    expect(component.html()).toContain('style="padding:30px 0"');
  });
});
