import React from 'react';
import { mount } from 'enzyme';

import { SelectableButton } from './SelectableButton';

describe('SelectableButton', () => {
  it('renders correctly', () => {
    const component = mount(<SelectableButton>Click me</SelectableButton>);
    expect(component.text()).toEqual('Click me');
  });
});
