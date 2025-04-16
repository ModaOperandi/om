import React from 'react';
import { States } from '../../utilities';
import { PasswordInput, PasswordInputProps } from './PasswordInput';

export default { title: 'Components/PasswordInput' };

export const Default = () => (
  <States<Partial<PasswordInputProps>> states={[{}, { error: 'Password cannot be empty.' }]}>
    <PasswordInput id='signInPassword' placeholder='Password' />
  </States>
);
