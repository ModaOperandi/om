import React from 'react';
import classNames from 'classnames';

import './LoadingBalls.scss';

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

const defaultSize = 32;

export const LoadingBalls: React.FC<Props> = ({ className, width, height }: Props) => (
  <svg
    className={classNames('LoadingBalls', className)}
    viewBox="0 0 32 32"
    width={width || defaultSize}
    height={height || defaultSize}
  >
    <circle transform="translate(8 0)" cx="0" cy="16" r="0">
      <animate
        attributeName="r"
        values="0; 4; 0; 0"
        dur="1.2s"
        repeatCount="indefinite"
        begin="0"
        keyTimes="0;0.2;0.7;1"
        keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
        calcMode="spline"
      />
    </circle>
    <circle transform="translate(16 0)" cx="0" cy="16" r="0">
      <animate
        attributeName="r"
        values="0; 4; 0; 0"
        dur="1.2s"
        repeatCount="indefinite"
        begin="0.3"
        keyTimes="0;0.2;0.7;1"
        keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
        calcMode="spline"
      />
    </circle>
    <circle transform="translate(24 0)" cx="0" cy="16" r="0">
      <animate
        attributeName="r"
        values="0; 4; 0; 0"
        dur="1.2s"
        repeatCount="indefinite"
        begin="0.6"
        keyTimes="0;0.2;0.7;1"
        keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
        calcMode="spline"
      />
    </circle>
  </svg>
);
