import React from 'react';

import './font-smoothing.stories.scss';

import { Stack } from '../../components/Stack';
import { Text } from '../../components/Text';

export default { title: 'Mixins/font-smoothing' };

export const Default = () => (
  <Stack space={3}>
    <div className='Story Mixins font-smoothing--antialiased'>
      <Text treatment='eyebrow'>@include font-smoothing(antialiased);</Text>
    </div>

    <div className='Story Mixins font-smoothing--subpixel'>
      <Text treatment='eyebrow'>@include font-smoothing(subpixel);</Text>
    </div>

    <div className='Story Mixins font-smoothing--antialiased' style={{ backgroundColor: 'black' }}>
      <Text color='snow' treatment='eyebrow'>
        @include font-smoothing(antialiased);
      </Text>
    </div>

    <div className='Story Mixins font-smoothing--subpixel' style={{ backgroundColor: 'black' }}>
      <Text color='snow' treatment='eyebrow'>
        @include font-smoothing(subpixel);
      </Text>
    </div>
  </Stack>
);
