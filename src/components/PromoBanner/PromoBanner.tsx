import React, { Children, cloneElement } from 'react';
import classNames from 'classnames';
import { Constrain } from '../Constrain';

import './PromoBanner.scss';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | [JSX.Element, JSX.Element] | [JSX.Element, JSX.Element, JSX.Element];
}

export const PromoBanner: React.FC<Props> = ({ className, children, ...rest }) => {
  const length = Children.count(children);
  return (
    <div className={classNames('PromoBanner', className)} {...rest}>
      <Constrain className='PromoBanner__constrain'>
        {Children.map(children, (child: JSX.Element, index) => {
          const isCenter = length % 2 !== 0 && Math.floor(length / 2) === index;
          return cloneElement(child, {
            className: classNames(child.props.className, 'PromoBanner__child', {
              'PromoBanner__child--left': !isCenter && index === 0,
              'PromoBanner__child--center': isCenter,
              'PromoBanner__child--right': !isCenter && index === length - 1
            })
          });
        })}
      </Constrain>
    </div>
  );
};
