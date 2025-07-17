import React from 'react';
import { action } from 'storybook/actions';
import { States } from '../../utilities';
import { Toast, ToastProps } from './Toast';

export default { title: 'Components/Toast' };

export const Default = () => (
  <States<ToastProps> states={[{ theme: 'success' }, { theme: 'warning' }, { theme: 'error' }]}>
    <Toast theme='success' onRemove={() => action('removed')}>
      This is a toast notification.
    </Toast>
  </States>
);
