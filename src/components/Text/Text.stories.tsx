import React from 'react';
import { typography, colors } from '@moda/tokens';

import { States } from '../../utilities/States';
import { Text } from './Text';

export default { title: 'Components|Text' };

export const Treatments = () => (
  <States states={Object.keys(typography['text-treatments']).map(treatment => ({ treatment }))}>
    {props => (
      <>
        <Text {...props} style={{ padding: '0 0.125em' }}>
          Moda Operandi
        </Text>
        <br />
        <Text fontSmoothing='subpixel' style={{ padding: '0 0.125em' }} {...props}>
          Moda Operandi
        </Text>

        <br />

        <Text {...props} style={{ backgroundColor: 'black', color: 'white', padding: '0 0.125em' }}>
          Moda Operandi
        </Text>
        <br />
        <Text
          fontSmoothing='subpixel'
          {...props}
          style={{ backgroundColor: 'black', color: 'white', padding: '0 0.125em' }}
        >
          Moda Operandi
        </Text>
      </>
    )}
  </States>
);

export const Colors = () => (
  <States states={Object.keys(colors.all).map(color => ({ color }))}>
    <Text treatment='h5'>Moda Operandi</Text>
  </States>
);

export const Families = () => (
  <States states={Object.keys(typography.fonts).map(family => ({ family }))}>
    <Text treatment='h5'>Moda Operandi</Text>
  </States>
);

export const Complex = () => (
  <Text>
    <Text treatment='h6' color='fuchsia' family='serif'>
      Moda Operandi
    </Text>
    {' — '}
    <Text color='money-good' treatment='eyebrow'>
      Happy <Text color='code-red'>Holidays</Text>
    </Text>
  </Text>
);
