import React, { useState } from 'react';
import { States } from 'storybook-states';
import { Text } from '../Text';
import { RadioButton, RadioButtonProps } from './RadioButton';
import { Stack } from '../Stack';

export default { title: 'Components/RadioButton' };

export const Default = () => (
  <States<RadioButtonProps>
    states={[
      {},
      { checked: true },
      { children: 'With label' },
      { children: 'With label', checked: true }
    ]}
  >
    <RadioButton />
  </States>
);

const EXAMPLES = ['Foo', 'Bar', 'Baz'];

export const Select = () => {
  const [selected, select] = useState('Foo');

  return (
    <States>
      <Stack space={3}>
        <Text color='burnt-orange'>{selected}</Text>

        {EXAMPLES.map(value => (
          <RadioButton
            key={value}
            name={value}
            value={value}
            checked={selected === value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              select(event.currentTarget.value)
            }
          >
            {value}
          </RadioButton>
        ))}
      </Stack>
    </States>
  );
};
