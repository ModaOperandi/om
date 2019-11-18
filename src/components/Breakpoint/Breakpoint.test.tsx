import React from 'react';
import { shallow } from 'enzyme';

import { Breakpoint } from './Breakpoint';

describe('Breakpoint', () => {
  // TODO: Investigate how to test media queries in this environment
  xit('renders correctly', () => {
    const breakpoint = shallow(
      <>
        <Breakpoint gt='sm'>Visible on mobile</Breakpoint>
        <Breakpoint lt='sm'>Visible on desktop</Breakpoint>
      </>
    );
    expect(breakpoint.text()).toContain('Visible on mobile');
    expect(breakpoint.text()).not.toContain('Visible on desktop');
  });
});
