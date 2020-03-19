import React from 'react';
import { States } from 'storybook-states';
import { Divider, NoLineDivider, TwoLineDivider } from './';
import { DividerProps } from './Divider';

export default { title: 'Components|Divider' };

export const Default = () => (
  <States<Partial<DividerProps>> states={[{}, { type: 'no-line' }, { type: 'two-line' }]}>
    <Divider text='Moda Operandi' />
  </States>
);

export const WithNoLine = () => <NoLineDivider text='Divider with No Line' />;

export const WithDoubleLine = () => <TwoLineDivider text='Divider with Double Line' />;
