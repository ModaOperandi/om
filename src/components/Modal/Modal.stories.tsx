import React, { useState } from 'react';

import { Button } from '../Button';
import { Text } from '../Text';
import { Modal } from './Modal';

export default { title: 'Components/Modal' };

enum Mode {
  Resting,
  Open
}

export const Default = () => {
  const [mode, setMode] = useState(Mode.Resting);

  return (
    <>
      <Button onClick={() => setMode(Mode.Open)}>Open Modal</Button>
      {mode === Mode.Open && (
        <Modal onClose={() => setMode(Mode.Resting)}>
          <Text>Click (or press &lt;esc&gt;) to close</Text>
        </Modal>
      )}
    </>
  );
};

export const BackdropContent = () => {
  const [mode, setMode] = useState(Mode.Resting);

  return (
    <>
      <Button onClick={() => setMode(Mode.Open)}>Open Modal</Button>
      {mode === Mode.Open && (
        <Modal onClose={() => setMode(Mode.Resting)}>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                padding: '1rem 1.5rem'
              }}
              onClick={event => event.stopPropagation()}
            >
              <Text>In the Modal. Click outside (or press &lt;esc&gt;) to close.</Text>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
