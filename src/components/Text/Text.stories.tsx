import React from 'react';
import { typography, colors } from '@moda/tokens';
import { States } from 'storybook-states';
import { Text, TextProps, TextTreatment, TextColor, TextFontFamily } from './Text';

export default { title: 'Components/Text' };

const TREATMENTS = Object.keys(typography['text-treatments']).map(treatment => ({
  treatment
})) as { treatment: TextTreatment }[];

const COLORS = Object.keys(colors.all).map(color => ({ color })) as { color: TextColor }[];

const FAMILIES = Object.keys(typography.fonts).map(family => ({ family })) as {
  family: TextFontFamily;
}[];

export const Treatments = () => (
  <States<TextProps> states={TREATMENTS}>
    <Text>Moda Operandi</Text>
  </States>
);

export const Colors = () => (
  <States<Partial<TextProps>> states={COLORS}>
    <Text treatment='h5'>Moda Operandi</Text>
  </States>
);

export const Families = () => (
  <States<Partial<TextProps>> states={FAMILIES}>
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
