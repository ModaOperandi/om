import React from 'react';

import { States } from 'storybook-states';
import { RadioButton } from '../RadioButton';
import { RadioGroup } from './RadioGroup';
import { Text } from '../Text';
import { Stack } from '../Stack';

export default { title: 'Components / RadioGroup' };

export const Default = () => (
  <States>
    <RadioGroup>
      <Stack space={2}>
        <Text treatment='bold1'>Pizza Crust</Text>

        <RadioButton checked>Regular crust</RadioButton>

        <RadioButton>Deep dish</RadioButton>

        <RadioButton>Thin crust</RadioButton>
      </Stack>
    </RadioGroup>
  </States>
);
