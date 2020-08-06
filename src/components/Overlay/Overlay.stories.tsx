import React, { useState } from 'react';

import { States } from 'storybook-states';
import { Overlay } from './Overlay';
import { Button } from '../Button';

export default { title: 'Components|Overlay' };

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <States>
      <>
        <Button onClick={() => setIsOpen(true)}>
          {`This content ${isOpen ? 'is' : 'will be'} blurred by the <Overlay /> component.`}{' '}
        </Button>

        <Overlay show={isOpen}>
          <Button onClick={() => setIsOpen(false)}>
            {`This is the main content. Click it to make the <Overlay /> dissapear.`}
          </Button>
        </Overlay>
      </>
    </States>
  );
};
