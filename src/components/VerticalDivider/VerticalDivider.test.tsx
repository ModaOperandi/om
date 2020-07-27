import React from 'react';
import { shallow } from 'enzyme';

import { VerticalDivider } from './VerticalDivider';

describe('VerticalDivider', () => {
  it('renders correctly', () => {
    const component = shallow(<VerticalDivider />);

    expect(component.html()).toContain('<div class="VerticalDivider"></div>');
  });

  it('renders correctly - double', () => {
    const component = shallow(<VerticalDivider double />);

    expect(component.html()).toContain(
      '<div class="VerticalDivider VerticalDivider--double"></div>'
    );
  });
});
