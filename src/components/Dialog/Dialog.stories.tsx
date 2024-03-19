import React, { useState } from 'react';

import { Button } from '../Button';
import { Dialog } from './Dialog';

export default { title: 'Components/Dialog' };

enum Mode {
  Resting,
  Open
}

export const Default = () => {
  const [mode, setMode] = useState(Mode.Resting);

  return (
    <>
      <Button onClick={() => setMode(Mode.Open)}>Open Dialog</Button>
      <Dialog
        show={mode === Mode.Open}
        onClose={() => setMode(Mode.Resting)}
        title='Exclusive Offer'
        message='Get 20% off your next purchase when you sign up for our newsletter today. Be the first to know about our latest products, promotions, and exclusive deals!'
        actions={<Button onClick={() => setMode(Mode.Resting)}>OK</Button>}
      />
    </>
  );
};
