import React from 'react';
import { action } from '@storybook/addon-actions';

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
    <ColorSwatch color='yellow' onClick={action('onClick')} />
  </States>
);

export const Swatches = () => (
  <States>
    <Stack space={1} direction='horizontal'>
      <ColorSwatch onClick={action('onClick')} color='red' />
      <ColorSwatch onClick={action('onClick')} color='bronze' soldOut />
      <ColorSwatch onClick={action('onClick')} color='nude' onSale />
      <ColorSwatch
        onClick={action('onClick')}
        backgroundUrl='https://cdn-integration.modaoperandi.com/mojo/assets/variants/black_and_white-500bdf259c1ca9877872d3e91c1a75375c6b6a09db1f5fdce715a01260b4d4a5.png'
        color='nude'
        onSale
        onMouseOver={color => alert(color)}
        onMouseOut={() => alert('out')}
      />
    </Stack>
  </States>
);
