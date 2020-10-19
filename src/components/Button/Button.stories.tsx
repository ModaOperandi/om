import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { States } from 'storybook-states';

import { Button, ButtonProps } from './Button';
import { Stack } from '../Stack';
import Heart from '@moda/icons/favorite-outline-16';

export default { title: 'Components/Button' };

export const Primary = () => (
  <States<ButtonProps> states={[{}, { hover: true }, { focus: true }, { disabled: true }]}>
    <Button onClick={action('clicked')}>Add to Cart</Button>
  </States>
);

export const PrimaryChip = () => (
  <States<ButtonProps> states={[{}, { hover: true }, { focus: true }, { disabled: true }]}>
    <Button chip onClick={action('clicked')}>
      Add to Favorites
    </Button>
  </States>
);

export const Secondary = () => (
  <States<ButtonProps> states={[{}, { hover: true }, { focus: true }, { disabled: true }]}>
    <Button secondary onClick={action('clicked')}>
      Add to Cart
    </Button>
  </States>
);

export const SecondaryChip = () => (
  <States<ButtonProps> states={[{}, { hover: true }, { focus: true }, { disabled: true }]}>
    <Button secondary chip onClick={action('clicked')}>
      Add to Favorites
    </Button>
  </States>
);

export const PrimaryWithHref = () => (
  <States<ButtonProps> states={[{}, { hover: true }, { focus: true }, { disabled: true }]}>
    <Button href='#href' onClick={action('clicked')}>
      Add to Cart
    </Button>
  </States>
);

export const PrimaryAsReactRouterLink = () => (
  <BrowserRouter>
    <States<ButtonProps> states={[{}, { hover: true }, { focus: true }, { disabled: true }]}>
      <Button to='#href' onClick={action('clicked')}>
        Add to Cart
      </Button>
    </States>
  </BrowserRouter>
);

export const PrimaryWithIcon = () => (
  <States<ButtonProps> states={[{}, { hover: true }, { focus: true }, { disabled: true }]}>
    <Button onClick={action('clicked')}>
      <Heart /> Add to Favorites
    </Button>
  </States>
);

export const SecondaryWithIcon = () => (
  <States<ButtonProps> states={[{}, { hover: true }, { focus: true }, { disabled: true }]}>
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

export const VerticallyStackedChips = () => (
  <Stack space={2}>
    <Button chip>Add to cart</Button>
    <Button secondary chip>
      <Heart /> Add to Favorites
    </Button>
  </Stack>
);
