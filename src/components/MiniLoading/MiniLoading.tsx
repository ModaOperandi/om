import React, { useEffect } from 'react';
import { useCursor } from 'use-cursor';
import { LoadingTriangle, LoadingDiamond, LoadingWindow, LoadingCircle } from '../Shape';
import './MiniLoading.scss';

const FRAMES = [
  <LoadingTriangle key='triangle' />,
  <LoadingDiamond key='diamond' />,
  <LoadingWindow key='window' />,
  <LoadingCircle key='circle' />
];

export const MiniLoading: React.FC = ({ ...rest }) => {
  const { index, handleNext } = useCursor({ max: FRAMES.length });

  useEffect(() => {
    const interval = setInterval(handleNext, 1000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className='MiniLoading' {...rest}>
      {FRAMES[index]}
    </div>
  );
};
