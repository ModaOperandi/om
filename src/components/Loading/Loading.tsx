import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { colors } from '@moda/tokens';

import { omit } from '../../utilities/omit';
import { RandomShape } from './RandomShape';
import { sample } from '../../utilities/sample';

import './Loading.scss';

const SCHEME = {
  ...colors.global,
  // Remove colors with poor contrast ratios on white
  ...omit(colors.mens, 'noise', 'blush'),
  ...omit(colors.womens, 'cream')
};
type Color = keyof typeof SCHEME;
const COLORS = Object.keys(SCHEME) as Color[];

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number;
}

export const Loading: React.FC<Props> = ({ className, style, speed = 250, ...rest }) => {
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setKey(Date.now()), speed);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={classNames('Loading', className)}
      style={{ color: SCHEME[sample(COLORS)], ...style }}
      {...rest}
    >
      <RandomShape key={key} />
    </div>
  );
};
