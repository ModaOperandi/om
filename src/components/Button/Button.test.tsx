import React from 'react';
import { shallow } from 'enzyme';

import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    const button = shallow(<Button>Click me</Button>);
    expect(button.text()).toEqual('Click me');
  });
});
