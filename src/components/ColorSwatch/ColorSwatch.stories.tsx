import React from 'react';
import { action } from '@storybook/addon-actions';

import { States } from '../../utilities/States';
import { Stack } from '../Stack';
import { ColorSwatch } from './ColorSwatch';

export default { title: 'Components|ColorSwatch' };

const STATES = [
  null,
  { hover: true },
  { focus: true },
  { selected: true },
  { onSale: true },
  { soldOut: true },
  { onSale: true, soldOut: true },
  { selected: true, onSale: true, soldOut: true },
  { disabled: true, soldOut: true }
];

export const Default = () => (
  <States states={STATES}>
    <ColorSwatch color='yellow' onClick={action('onClick')} />
  </States>
);

export const Small = () => (
  <States states={STATES}>
    <ColorSwatch size='small' color='yellow' onClick={action('onClick')} />
  </States>
);

export const White = () => (
  <States states={STATES}>
    <ColorSwatch size='small' color='white' onClick={action('onClick')} />
  </States>
);

export const Swatches = () => (
  <States>
    <Stack space={1} direction='horizontal'>
      <ColorSwatch onClick={action('onClick')} color='red' />
      <ColorSwatch onClick={action('onClick')} color='white' />
      <ColorSwatch onClick={action('onClick')} color='bronze' soldOut disabled />
      <ColorSwatch onClick={action('onClick')} color='nude' onSale />
      <ColorSwatch
        onClick={action('onClick')}
        backgroundUrl='https://www.modaoperandi.com/assets/images/products/730581/340267/sw/prada-animal-leopard-print-shell-shoulder-bag.jpg?_v=1581323237'
        color='nude'
        onSale
        onMouseEnter={action('onMouseEnter')}
        onMouseLeave={action('onMouseLeave')}
      />
    </Stack>
  </States>
);
