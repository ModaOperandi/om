import React from 'react';
import { shallow } from 'enzyme';

import { SiteFooter } from './SiteFooter';

describe('SiteFooter', () => {
  it('renders correctly', () => {
    const component = shallow(<SiteFooter />);
    expect(component.text()).toContain('Contact Client Services');
  });
});
