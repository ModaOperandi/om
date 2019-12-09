import React from 'react';

import { States } from '../../utilities/States';
import { Breadcrumbs } from './Breadcrumbs';

export default { title: 'Components|Breadcrumbs' };

export const Default = () => (
  <States>
    <Breadcrumbs>
      <a href='#men'>Men</a>
      <a href='#clothing'>Clothing</a>
      <a href='#coats-jackets'>Coats &amp; Jackets</a>
      Peach Skin Nylon Coat
    </Breadcrumbs>
  </States>
);
