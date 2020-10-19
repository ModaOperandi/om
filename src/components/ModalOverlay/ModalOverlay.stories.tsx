import React, { useState } from 'react';

import { Button } from '../Button';
import { Text } from '../Text';
import { ModalOverlay } from './ModalOverlay';

export default { title: 'Components/ModalOverlay' };

enum Mode {
  Resting,
  Open
}

export const Default = () => {
  const [mode, setMode] = useState(Mode.Resting);

  return (
    <>
      <Button onClick={() => setMode(Mode.Open)}>Open Modal With Overlay</Button>

      <ModalOverlay show={mode === Mode.Open} onClose={() => setMode(Mode.Resting)}>
        <Text>Click overylay or press &lt;esc&gt; to close</Text>
      </ModalOverlay>
    </>
  );
};
