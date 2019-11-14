import React from 'react';

import './text.stories.scss';

export default { title: 'Mixins|text' };

export const Default = () => (
  <>
    <div className='Story Mixins text text--h1'>Brandon Maxwell</div>

    <div className='Story Mixins text text--h2'>Halter-Style Mini Sweater Dress</div>

    <div className='Story Mixins text text--h3'>$4,200 ($2,100 Deposit)</div>

    <div className='Story Mixins text text--h4'>Editor’s Note</div>

    <div className='Story Mixins text text--body'>
      Jacquemus' dress is designed as a halter-style mini dress that's knit for a super-soft,
      curve-defining finish. Style yours with knee-high boots for a retro-inspired look.
    </div>
  </>
);
