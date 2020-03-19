import React from 'react';
import { States } from 'storybook-states';
import { PromoBanner, PromoBannerProps } from './PromoBanner';

export default { title: 'Components|PromoBanner' };

export const Default = () => (
  <States<PromoBannerProps>
    states={[
      { children: <span>Center</span> },
      {
        children: [<span key='left'>Left</span>, <span key='right'>Right</span>]
      },
      {
        children: [
          <span key='left'>Left</span>,
          <span key='center'>Center</span>,
          <span key='right'>Right</span>
        ]
      },
      {
        children: [
          <span key='left'>Currency: USA (USD $)</span>,
          <span key='center' className='FOO'>
            Order by Dec. 12 for delivery by Dec. 25 — <a href='#'>LEARN MORE</a>
          </span>,
          <span key='right'>Hi, Friend</span>
        ]
      }
    ]}
  >
    {props => <PromoBanner {...props} />}
  </States>
);

export const Mobile = () => (
  <States<PromoBannerProps>>
    <PromoBanner>
      <span>Currency: USA (USD $)</span>
      <span>
        Order by Dec. 12 for delivery by Dec. 25 — <a href='#'>LEARN MORE</a>
      </span>
      <span>Hi, Friend</span>
    </PromoBanner>
  </States>
);

Mobile.story = { parameters: { viewport: { defaultViewport: 'xs' } } };
