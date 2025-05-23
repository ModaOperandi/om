import React from 'react';
import { States } from '../../utilities';
import { DividerProps } from './Divider';
import { Divider, NoLineDivider, TwoLineDivider } from './';

export default { title: 'Components/Divider' };

export const Default = () => (
  <States<Partial<DividerProps>> states={[{}, { type: 'no-line' }, { type: 'two-line' }]}>
    <Divider text='Moda Operandi' />
  </States>
);

export const WithNoLine = () => (
  <States>
    <NoLineDivider text='Divider with No Line' />
  </States>
);

export const WithDoubleLine = () => (
  <States>
    <TwoLineDivider text='Divider with Double Line' />
  </States>
);

export const WithNoText = () => (
  <States>
    <TwoLineDivider />
  </States>
);
