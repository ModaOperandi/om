import React from 'react';

import { States } from '../../utilities/States';
import { PromoBanner } from './PromoBanner';

export default { title: 'Components|PromoBanner' };

export const Default = () => (
  <States
    states={[
      { children: <span>Center</span> },
      {
        children: [<span>Left</span>, <span>Right</span>]
      },
      {
        children: [<span>Left</span>, <span>Center</span>, <span>Right</span>]
      },
      {
        children: [
          <span>Currency: USA (USD $)</span>,
          <span className='FOO'>
            Order by Dec. 12 for delivery by Dec. 25 — <a href='#'>LEARN MORE</a>
          </span>,
          <span>Hi, Friend</span>
        ]
      }
    ]}
  >
    {props => <PromoBanner {...props} />}
  </States>
);

export const Mobile = () => (
  <States>
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
