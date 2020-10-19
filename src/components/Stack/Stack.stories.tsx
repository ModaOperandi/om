import React from 'react';
import { States } from 'storybook-states';
import { space } from '@moda/tokens';
import { Stack, StackProps } from './Stack';

export default { title: 'Components/Stack' };

export const Vertical = () => (
  <States<StackProps> states={space.scale.map((_, i) => ({ space: i }))}>
    <Stack space={0}>
      <div style={{ backgroundColor: 'yellow' }}>One</div>
      <div style={{ backgroundColor: 'yellow' }}>Two</div>
      <div style={{ backgroundColor: 'yellow' }}>Three</div>
    </Stack>
  </States>
);

export const Horizontal = () => (
  <States<StackProps>
    states={space.scale.map((_, i) => ({
      space: i,
      direction: 'horizontal'
    }))}
  >
    <Stack space={0}>
      <div style={{ backgroundColor: 'yellow' }}>One</div>
      <div style={{ backgroundColor: 'yellow' }}>Two</div>
      <div style={{ backgroundColor: 'yellow' }}>Three</div>
    </Stack>
  </States>
);

export const VerticalUsingAlignItems = () => (
  <States<StackProps>
    states={['flex-start', 'flex-end', 'stretch', 'center'].map(alignItems => ({
      space: 2,
      alignItems
    }))}
  >
    <Stack space={0}>
      <div style={{ backgroundColor: 'yellow' }}>One</div>
      <div style={{ backgroundColor: 'yellow' }}>Two</div>
      <div style={{ backgroundColor: 'yellow' }}>Three</div>
    </Stack>
  </States>
);

export const HorizontalUsingJustifyContent = () => (
  <States<StackProps>
    states={['flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly'].map(
      justifyContent => ({
        space: 2,
        justifyContent,
        direction: 'horizontal'
      })
    )}
  >
    <Stack space={0}>
      <div style={{ backgroundColor: 'yellow' }}>One</div>
      <div style={{ backgroundColor: 'yellow' }}>Two</div>
      <div style={{ backgroundColor: 'yellow' }}>Three</div>
    </Stack>
  </States>
);
