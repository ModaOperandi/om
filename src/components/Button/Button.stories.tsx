import React from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';

export default { title: 'Components|Button' };

export const Primary = () => (
  <>
    <p>
      <Button onClick={action('clicked')}>Add to cart</Button>
    </p>
    <p>
      <Button hover onClick={action('clicked')}>
        Add to cart
      </Button>
    </p>

    <p>
      <Button focus onClick={action('clicked')}>
        Add to cart
      </Button>
    </p>

    <p>
      <Button disabled>Please select a size first</Button>
    </p>
  </>
);

export const Secondary = () => (
  <>
    <p>
      <Button secondary onClick={action('clicked')}>
        Add to cart
      </Button>
    </p>
    <p>
      <Button secondary hover onClick={action('clicked')}>
        Add to cart
      </Button>
    </p>

    <p>
      <Button secondary focus onClick={action('clicked')}>
        Add to cart
      </Button>
    </p>

    <p>
      <Button secondary disabled>
        Please select a size first
      </Button>
    </p>
  </>
);
