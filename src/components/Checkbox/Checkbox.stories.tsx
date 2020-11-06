import React, { useState } from 'react';
import { States } from 'storybook-states';

import { Text } from '../Text';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Stack } from '../Stack';
import { RadioButton } from '../RadioButton';

export default { title: 'Components/Checkbox' };

export const Default = () => (
  <States<CheckboxProps>
    states={[
      {},
      { checked: true },
      { defaultChecked: true },
      { children: 'Remember me' },
      { children: 'Remember me', checked: true },
      { children: 'Disabled', disabled: true },
      { children: 'Disabled', checked: true, disabled: true },
      { children: <Text color='code-red'>Important!</Text> }
    ]}
  >
    <Checkbox />
  </States>
);

export const Check = () => {
  const [checked, check] = useState(false);

  return (
    <States>
      <Stack space={2}>
        <Text color='burnt-orange'>{checked ? 'Remembering' : 'Forgetting'}</Text>

        <Checkbox
          id='rememberMe'
          name='rememberMe'
          checked={checked}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            check(event.target.checked);
          }}
        >
          Remember me
        </Checkbox>
      </Stack>
    </States>
  );
};

const LONG_LABEL =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rem at possimus ipsam cupiditate labore velit molestiae odio provident suscipit rerum minima, perferendis repellat vero recusandae quasi quos maxime incidunt!';

export const LongLabel = () => (
  <States>
    <Checkbox>{LONG_LABEL}</Checkbox>
  </States>
);

export const StackExample = () => (
  <States>
    <Stack space={3}>
      <Checkbox>All Coats</Checkbox>
      <Checkbox>Trench</Checkbox>
      <Checkbox>Fur</Checkbox>
      <Checkbox>Double Breasted</Checkbox>
      <Checkbox>Leather</Checkbox>
      <Checkbox>Cape</Checkbox>
      <Checkbox>Down Coats</Checkbox>
      <Checkbox>Parkas</Checkbox>
      <Checkbox>Vest</Checkbox>
    </Stack>
  </States>
);

export const LongStackExample = () => (
  <States>
    <Stack space={2}>
      <Checkbox>Menswear Newsletter</Checkbox>
      <Checkbox>
        <>
          Special Announcements
          <br />
          (Sale alerts, Moda Friends Events, and exclusive news)
        </>
      </Checkbox>
      <Checkbox>Shopping Bag Reminders</Checkbox>
      <Checkbox>
        <>
          Emails from your Personal Stylist
          <br />
          (special event invitations and exclusive access)
        </>
      </Checkbox>
      <Checkbox>Designer Announcements</Checkbox>
      <Checkbox>
        <>
          Trunkshow iOS Notification
          <br />
          (messages about your preferred designers from the MO app)
        </>
      </Checkbox>
    </Stack>
  </States>
);

export const RadioComparison = () => (
  <States>
    <Stack space={3}>
      <Checkbox>Check</Checkbox>
      <RadioButton>Radio</RadioButton>
      <Checkbox checked>Check</Checkbox>
      <RadioButton checked>Radio</RadioButton>
    </Stack>
  </States>
);
