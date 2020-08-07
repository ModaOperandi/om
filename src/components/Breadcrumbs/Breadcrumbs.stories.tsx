import React from 'react';
import { States } from 'storybook-states';

import { Breadcrumbs, Breadcrumb, BreadcrumbsProps } from './index';

export default { title: 'Components|Breadcrumbs' };

export const Default = () => (
  <States<BreadcrumbsProps>>
    <Breadcrumbs>
      <Breadcrumb href='#men'>Men</Breadcrumb>
      <Breadcrumb href='#clothing'>Clothing</Breadcrumb>
      <Breadcrumb href='#coats-jackets'>Coats &amp; Jackets</Breadcrumb>
      <Breadcrumb>Zippy Safari Straight-Leg Wool Jumpsuit</Breadcrumb>
    </Breadcrumbs>
  </States>
);

export const Mobile = () => (
  <States<BreadcrumbsProps>>
    <Breadcrumbs>
      <Breadcrumb href='#men'>Men</Breadcrumb>
      <Breadcrumb href='#clothing'>Clothing</Breadcrumb>
      <Breadcrumb href='#coats-jackets'>Coats &amp; Jackets</Breadcrumb>
      <Breadcrumb>Zippy Safari Straight-Leg Wool Jumpsuit</Breadcrumb>
    </Breadcrumbs>
  </States>
);

Mobile.story = { parameters: { viewport: { defaultViewport: 'xs' } } };
