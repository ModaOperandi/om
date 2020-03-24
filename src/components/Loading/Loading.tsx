import React, { useEffect } from 'react';
import { useCursor } from 'use-cursor';
import classNames from 'classnames';
import { colors } from '@moda/tokens';
import { Brancusi, Bradley, Oval, Keyhole, Mirror } from '../Shape';
import './Loading.scss';

export type LoadingProps = React.HTMLAttributes<HTMLDivElement> & {
  speed?: number;
};

const FRAMES = [
  <Brancusi key='brancusi' style={{ fill: colors.all.brick }} />,
  <Bradley key='bradley' style={{ fill: colors.all.fuchsia }} />,
  <Oval key='oval' style={{ fill: colors.all['cornflower-blue'] }} />,
  <Keyhole key='keyhole' style={{ fill: colors.all.seafoam }} />,
  <Mirror key='mirror' style={{ fill: colors.all.goldenrod }} />,
];

export const Loading: React.FC<LoadingProps> = ({ className, speed = 250, ...rest }) => {
  const { index, handleNext } = useCursor({ max: FRAMES.length });

  useEffect(() => {
    const interval = setInterval(handleNext, speed);
    return () => clearInterval(interval);
  }, [handleNext, speed]);

  return (
    <div className={classNames('Loading', className)} {...rest}>
      {FRAMES[index]}
    </div>
  );
};
