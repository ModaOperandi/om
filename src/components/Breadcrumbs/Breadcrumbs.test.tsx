import React from 'react';
import { shallow } from 'enzyme';

import { Breadcrumbs, Breadcrumb } from './index';

describe('Breadcrumbs', () => {
  it('wraps elements with microdata tags', () => {
    const component = shallow(
      <Breadcrumbs>
        <Breadcrumb href='/one'>One</Breadcrumb>
        <Breadcrumb href='/two'>Two</Breadcrumb>
        <Breadcrumb>Three</Breadcrumb>
      </Breadcrumbs>
    );
    expect(component.html()).toEqual(
      '<ol itemscope="" itemType="http://schema.org/BreadcrumbList" class="Breadcrumbs"><li class="Breadcrumb" itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem"><a itemProp="item" href="/one" class="Clickable ControlLink ControlLink--underlined"><span itemProp="name">One</span></a><meta itemProp="position" content="1"/></li><li class="Breadcrumb" itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem"><a itemProp="item" href="/two" class="Clickable ControlLink ControlLink--underlined"><span itemProp="name">Two</span></a><meta itemProp="position" content="2"/></li><li class="Breadcrumb" itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem"><span itemProp="name">Three</span><meta itemProp="position" content="3"/></li></ol>'
    );
  });
});
