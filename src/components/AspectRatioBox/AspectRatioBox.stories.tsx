import React from 'react';

import { States } from '../../utilities/States';
import { AspectRatioBox } from './AspectRatioBox';

export default { title: 'Components|AspectRatioBox' };

export const Default = () => (
  <States
    states={[
      { aspectWidth: 3, aspectHeight: 4 },
      { aspectWidth: 4, aspectHeight: 3 },
      { aspectWidth: 3, aspectHeight: 3 },
      { aspectWidth: 3, aspectHeight: 4, maxHeight: 100 },
      { aspectWidth: 3, aspectHeight: 4, children: <div>Hello world</div> }
    ]}
  >
    <AspectRatioBox aspectHeight={4} aspectWidth={3} maxWidth={200} maxHeight={200} outlined />
  </States>
);
