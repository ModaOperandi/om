import React from 'react';

import './overflow-scroll.stories.scss';

export default { title: 'Mixins|overflow-scroll' };

export const Default = () => (
  <div className='Story Mixins overflow-scroll'>Overflowed on the y axis!</div>
);

export const OverflowX = () => (
  <div className='Story Mixins overflow-scroll-x'>Overflowed on the x axis!</div>
);
