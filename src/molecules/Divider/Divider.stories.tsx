import React from 'react';

import { States } from '../../utilities/States';
import { Divider, NoLineDivider, TwoLineDivider } from './';

export default { title: 'Molecules|Divider' };

export const Default = () => (
  <States states={[{}, { type: 'no-line' }, { type: 'two-line' }]}>
    <Divider text='Moda Operandi' />
  </States>
);

export const withNoLine = () => <NoLineDivider text='Divider with No Line' />;

export const withDoubleLine = () => <TwoLineDivider text='Divider with Double Line' />;
