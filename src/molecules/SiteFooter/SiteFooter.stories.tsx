import React from 'react';

import { SiteFooter } from './SiteFooter';

export default {
  title: 'Molecules|SiteFooter',
  parameters: { viewport: { defaultViewport: 'reset' } }
};

export const Destkop = () => <SiteFooter />;

export const Mobile = () => <SiteFooter />;

Mobile.story = {
  parameters: {
    viewport: { defaultViewport: 'sm' }
  }
};
