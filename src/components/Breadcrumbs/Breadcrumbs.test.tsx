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
      '<ol itemscope="" itemType="http://schema.org/BreadcrumbList" class="Breadcrumbs"><li class="Breadcrumbs__crumb" itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem"><a>One</a></li><li class="Breadcrumbs__crumb" itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem"><a>Two</a></li><li class="Breadcrumbs__crumb" itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem"><span>Three</span></li></ol>'
    );
  });
});
