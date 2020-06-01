import React from 'react';
import { shallow } from 'enzyme';

import { PdpBreadcrumbs } from './PdpBreadcrumbs';

describe('PdpBreadcrumbs', () => {
  it('displays correctly on > sm res', () => {
    const component = shallow(
      <PdpBreadcrumbs>
        <a>One</a>
        <a>Two</a>
        <a>Three</a>
        <span>PRODUCT NAME</span>
      </PdpBreadcrumbs>
    );
    expect(component.html()).toBe(
      '<div class="Breakpoint Breakpoint--lt-sm"><ol itemscope="" itemType="http://schema.org/BreadcrumbList" class="Breadcrumbs"><li class="Breadcrumb" itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem"><a>One</a></li><li class="Breadcrumb" itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem"><a>Two</a></li><li class="Breadcrumb" itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem"><a>Three</a></li></ol></div><div class="Breakpoint Breakpoint--gt-sm"><ol itemscope="" itemType="http://schema.org/BreadcrumbList" class="Breadcrumbs"><li class="Breadcrumb" itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem"><a>One</a></li><li class="Breadcrumb" itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem"><a>Two</a></li><li class="Breadcrumb" itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem"><a>Three</a></li><li class="Breadcrumb" itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem"><span>PRODUCT NAME</span></li></ol></div>'
    );
  });
});
