import React, { useState } from 'react';

import { States } from '../../utilities/States';
import { Text } from '../Text';
import { Checkbox } from './Checkbox';

export default { title: 'Components|Checkbox' };

export const Default = () => (
  <States
    states={[
      {},
      { checked: true },
      { defaultChecked: true },
      { label: 'Remember me' },
      { label: 'Remember me', checked: true }
    ]}
  >
    <Checkbox />
  </States>
);

export const Check = () => {
  const [checked, check] = useState(false);

  return (
    <>
      <Text>Value: {JSON.stringify(checked)}</Text>

      <Checkbox
        id='rememberMe'
        name='rememberMe'
        label='Remember me'
        checked={checked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          check(event.target.checked);
        }}
      />
    </>
  );
};
