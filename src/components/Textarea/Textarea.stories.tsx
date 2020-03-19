import React from 'react';
import { States } from 'storybook-states';
import { Textarea, TextareaProps } from './Textarea';

export default { title: 'Components|Textarea' };

const MULTI_LINE_TEXT_EXAMPLE =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus iusto neque quidem dolor optio dignissimos, perspiciatis cumque voluptates! Maxime fugit at similique nemo illum tenetur excepturi maiores consequuntur eveniet quidem.';

export const Default = () => (
  <States<TextareaProps>
    states={[
      {},
      { focus: true },
      { disabled: true },
      { defaultValue: 'With value' },
      { error: 'Error', defaultValue: 'With value' },
      { defaultValue: MULTI_LINE_TEXT_EXAMPLE }
    ]}
  >
    <Textarea placeholder='A textarea' />
  </States>
);
