import React from 'react';
import { shallow } from 'enzyme';

import { SiteFooter } from './SiteFooter';

describe('SiteFooter', () => {
  // TODO: Investigate how to test media queries in this environment
  xit('renders correctly', () => {
    const component = shallow(<SiteFooter />);
    expect(component.text()).toContain('Contact Client Services');
  });
});
