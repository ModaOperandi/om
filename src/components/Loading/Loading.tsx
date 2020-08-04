import React, { useEffect } from 'react';
import { useCursor } from 'use-cursor';
import classNames from 'classnames';
import { LoadingTriangle, LoadingDiamond, LoadingWindow, LoadingCircle } from '../Shape';
import './Loading.scss';

export type LoadingProps = React.HTMLAttributes<HTMLDivElement>;

const FRAMES = [
  <LoadingTriangle key='triangle' />,
  <LoadingDiamond key='diamond' />,
  <LoadingWindow key='window' />,
  <LoadingCircle key='circle' />
];

export const Loading: React.FC<LoadingProps> = ({ className, ...rest }) => {
  const { index, handleNext } = useCursor({ max: FRAMES.length });

  useEffect(() => {
    const interval = setInterval(handleNext, 1000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className={classNames('Loading', className)} {...rest}>
      {FRAMES[index]}
    </div>
  );
};
