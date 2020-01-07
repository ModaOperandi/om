
import React from 'react';
import { shallow } from 'enzyme';

import { Label } from './Label';

describe('Label', () => {
  it('renders correctly', () => {
    const component = shallow(<Label />);
    expect(component.text()).toEqual('Hello');
  });
});
