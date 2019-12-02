import React from 'react';

import { States } from '../../utilities/States';
import { Stack } from '../Stack';
import { ColorSwatch } from './ColorSwatch';

export default { title: 'Components|ColorSwatch' };

export const Default = () => (
  <States
    states={[
      null,
      { hover: true },
      { selected: true },
      { onSale: true },
      { soldOut: true },
      { onSale: true, soldOut: true },
      { selected: true, onSale: true, soldOut: true }
    ]}
  >
    <ColorSwatch color='yellow' />
  </States>
);

export const Swatches = () => (
  <States>
    <Stack space={1} direction='horizontal'>
      <ColorSwatch color='red' />
      <ColorSwatch color='bronze' soldOut />
      <ColorSwatch color='nude' onSale />
    </Stack>
  </States>
);
