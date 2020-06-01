import React from 'react';
import { shallow } from 'enzyme';

import { Breadcrumbs } from './Breadcrumbs';

describe('Breadcrumbs', () => {
  it('wraps elements with microdata tags', () => {
    const component = shallow(
      <Breadcrumbs>
        <a>One</a>
        <a>Two</a>
        <span>Three</span>
      </Breadcrumbs>
    );
    expect(component.html()).toEqual(
      '<ol itemscope="" itemType="http://schema.org/BreadcrumbList" class="Breadcrumbs"><li class="Breadcrumb" itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem"><a>One</a></li><li class="Breadcrumb" itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem"><a>Two</a></li><div class="Breakpoint Breakpoint--gt-sm"><li class="Breadcrumb" itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem"><span>Three</span></li></div></ol>'
    );
  });
});
