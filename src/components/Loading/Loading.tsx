import React, { useEffect } from 'react';
import { useCursor } from 'use-cursor';
import classNames from 'classnames';
import { Triangle, Diamond, ArcWindow, Circle } from '../Shape';

import './Loading.scss';

export type LoadingProps = React.HTMLAttributes<HTMLDivElement>;

const FRAMES = [Triangle, Diamond, ArcWindow, Circle];

export const Loading: React.FC<LoadingProps> = ({ className, ...rest }) => {
  const { index, handleNext } = useCursor({ max: FRAMES.length });

  useEffect(() => {
    const interval = setInterval(handleNext, 1000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const CurrentComponent = FRAMES[index];

  return (
    <div className={classNames('Loading', className)} {...rest}>
      <CurrentComponent />
    </div>
  );
};
