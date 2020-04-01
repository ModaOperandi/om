import React from 'react';
import { States } from 'storybook-states';

import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

export default { title: 'Components|Breadcrumbs' };

export const Default = () => (
  <States<BreadcrumbsProps>>
    <Breadcrumbs>
      <a href='#men'>Men</a>
      <a href='#clothing'>Clothing</a>
      <a href='#coats-jackets'>Coats &amp; Jackets</a>
      Peach Skin Nylon Coat
    </Breadcrumbs>
  </States>
);

export const Mobile = () => (
  <States<BreadcrumbsProps>>
    <Breadcrumbs>
      <a href='#men'>Men</a>
      <a href='#clothing'>Clothing</a>
      <a href='#coats-jackets'>Coats &amp; Jackets</a>
      Peach Skin Nylon Coat
    </Breadcrumbs>
  </States>
);

Mobile.story = { parameters: { viewport: { defaultViewport: 'xs' } } };
