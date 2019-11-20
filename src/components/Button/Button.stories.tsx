import React from 'react';
import { action } from '@storybook/addon-actions';

import { States } from '../../utilities/States';
import { Button } from './Button';
import { Stack } from '../Stack';
import Heart from '@moda/icons/favorite-outline-16';

export default { title: 'Components|Button' };

export const Primary = () => (
  <States states={[null, { hover: true }, { focus: true }, { disabled: true }]}>
    <Button onClick={action('clicked')}>Add to Cart</Button>
  </States>
);

export const Secondary = () => (
  <States states={[null, { hover: true }, { focus: true }, { disabled: true }]}>
    <Button secondary onClick={action('clicked')}>
      Add to Cart
    </Button>
  </States>
);

export const PrimaryWithHref = () => (
  <States states={[null, { hover: true }, { focus: true }, { disabled: true }]}>
    <Button href='#href' onClick={action('clicked')}>
      Add to Cart
    </Button>
  </States>
);

export const PrimaryWithIcon = () => (
  <States states={[null, { hover: true }, { focus: true }, { disabled: true }]}>
    <Button onClick={action('clicked')}>
      <Heart /> Add to Favorites
    </Button>
  </States>
);

export const SecondaryWithIcon = () => (
  <States states={[null, { hover: true }, { focus: true }, { disabled: true }]}>
    <Button secondary onClick={action('clicked')}>
      <Heart /> Add to Favorites
    </Button>
  </States>
);

export const VerticallyStacked = () => (
  <Stack space={2}>
    <Button>Add to cart</Button>
    <Button secondary>
      <Heart /> Add to Favorites
    </Button>
  </Stack>
);
