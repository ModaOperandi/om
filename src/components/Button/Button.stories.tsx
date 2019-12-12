import React, { useState, useCallback, useEffect, useRef } from 'react';
import { action } from '@storybook/addon-actions';

import { States } from '../../utilities/States';
import { Button } from './Button';
import { Stack } from '../Stack';
import Heart from '@moda/icons/favorite-outline-16';

export default { title: 'Components|Button' };

const STATES = [
  null,
  { hover: true },
  { focus: true },
  { disabled: true },
  { loading: true },
  { success: true }
];

export const Primary = () => (
  <States states={STATES}>
    <Button onClick={action('clicked')}>Add to Cart</Button>
  </States>
);

export const Secondary = () => (
  <States states={STATES}>
    <Button secondary onClick={action('clicked')}>
      Add to Cart
    </Button>
  </States>
);

export const PrimaryWithHref = () => (
  <States states={STATES}>
    <Button href='#href' onClick={action('clicked')}>
      Add to Cart
    </Button>
  </States>
);

export const PrimaryWithIcon = () => (
  <States states={STATES}>
    <Button onClick={action('clicked')}>
      <Heart /> Add to Favorites
    </Button>
  </States>
);

export const SecondaryWithIcon = () => (
  <States states={STATES}>
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

VerticallyStacked.story = { parameters: { viewport: { defaultViewport: 'xs' } } };

enum Mode {
  Resting,
  Loading,
  Success
}

export const SimulateLoading = () => {
  const [mode, setMode] = useState(Mode.Resting);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const handleClick = useCallback(() => {
    setMode(Mode.Loading);
  }, []);

  useEffect(() => {
    if (mode === Mode.Loading) {
      timeout.current && clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setMode(Mode.Success), 2500);
    }

    if (mode === Mode.Success) {
      timeout.current && clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setMode(Mode.Resting), 1000);
    }
  }, [mode]);

  return (
    <Stack space={2}>
      <Button onClick={handleClick} loading={mode === Mode.Loading} success={mode === Mode.Success}>
        {
          {
            [Mode.Resting]: 'Add to bag',
            [Mode.Loading]: 'Add to bag',
            [Mode.Success]: 'Item added to bag'
          }[mode]
        }
      </Button>
    </Stack>
  );
};

SimulateLoading.story = { parameters: { viewport: { defaultViewport: 'xs' } } };
