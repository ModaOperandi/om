import React from 'react';

import { States } from 'storybook-states';
import { Overlay } from './Overlay';
import { Loading } from '../Loading';

export default { title: 'Components|Overlay' };

export const Default = () => (
  <States>
    <>
      {`This content is blurred by the <Overlay /> component.`}
      <Overlay>
        <Loading />
      </Overlay>
    </>
  </States>
);
