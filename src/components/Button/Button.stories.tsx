import React from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';

export default { title: 'Components|Button' };

export const ButtonWithLabel = () => <Button onClick={action('clicked')}>Click Me</Button>;
