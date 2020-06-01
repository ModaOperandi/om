import React from 'react';
import { States } from 'storybook-states';

import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';
import { PdpBreadcrumbs } from './PdpBreadcrumbs';

export default { title: 'Components|Breadcrumbs' };

export const Default = () => (
  <States<BreadcrumbsProps>>
    <Breadcrumbs>
      <a href='#men'>Men</a>
      <a href='#clothing'>Clothing</a>
      <a href='#coats-jackets'>Coats &amp; Jackets</a>
      Zippy Safari Straight-Leg Wool Jumpsuit
    </Breadcrumbs>
  </States>
);

export const Mobile = () => (
  <>
    <States<BreadcrumbsProps>>
      <Breadcrumbs>
        <a href='#men'>Men</a>
        <a href='#clothing'>Clothing</a>
        <a href='#coats-jackets'>Coats &amp; Jackets</a>
        Zippy Safari Straight-Leg Wool Jumpsuit
      </Breadcrumbs>
    </States>
    <States<BreadcrumbsProps>>
      <PdpBreadcrumbs>
        <a href='#men'>Men</a>
        <a href='#clothing'>Clothing</a>
        <a href='#coats-jackets'>Coats &amp; Jackets</a>
        Zippy Safari Straight-Leg Wool Jumpsuit
      </PdpBreadcrumbs>
    </States>
  </>
);

Mobile.story = { parameters: { viewport: { defaultViewport: 'xs' } } };
