import React from 'react';

import { States } from '../../utilities/States';
import { Loading } from './Loading';

export default { title: 'Components|Loading' };

export const Default = () => (
  <States states={[{ speed: 100 }, { speed: 250 }, { speed: 500 }]}>
    <Loading />
  </States>
);
