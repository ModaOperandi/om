import React from 'react';
import type { Meta } from '@storybook/react';
import { Button } from '../Button';
import { ConfirmProvider, useConfirm } from './Confirm';

const meta: Meta = {
  title: 'Components/Confirm',
  decorators: [
    Story => (
      <ConfirmProvider>
        <Story />
      </ConfirmProvider>
    )
  ]
};

export default meta;

export const Default = () => {
  const { confirm } = useConfirm();

  return (
    <Button
      onClick={() =>
        confirm({
          title: 'Are you sure?',
          message: 'Are you sure you want to delete this?',
          confirmationText: 'Delete'
        })
      }
    >
      Show Confirmation Dialog
    </Button>
  );
};
