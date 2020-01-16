import React, { useState } from 'react';

import { States } from '../../utilities/States';
import { Text } from '../Text';
import { RadioButton } from './RadioButton';

export default { title: 'Components|RadioButton' };

export const Default = () => (
  <States
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
    <>
      <Text>Value: {selected}</Text>

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
    </>
  );
};
