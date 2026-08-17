import React, { useState } from 'react';
import { Button } from '../Button';
import { Text } from '../Text';
import { Drawer } from './Drawer';

export default { title: 'Components/Drawer' };

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: 'flex' }}>
      <Drawer open={open} style={{ backgroundColor: 'lightgray' }}>
        <Text>Drawer content</Text>
      </Drawer>

      <div style={{ flex: 1, padding: '1rem' }}>
        <Button onClick={() => setOpen(open => !open)}>{open ? 'Close' : 'Open'} drawer</Button>
        <Text>
          The drawer pushes this content over when open, rather than overlaying it — no backdrop, no
          focus trap.
        </Text>
      </div>
    </div>
  );
};
