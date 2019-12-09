import React from 'react';
import { sample } from '../../utilities/sample';
import * as Shapes from '../Shape';

export const RandomShape: React.FC = () => {
  const shape = sample(Object.keys(Shapes)) as keyof typeof Shapes;
  const Shape = Shapes[shape];
  return <Shape />;
};
