import React from 'react';
import classNames from 'classnames';
import ExitIcon from '@moda/icons/exit-16';
import { Clickable } from '../Clickable';
import './Tag.scss';

export type TagProps = {
  disabled?: boolean;
  onRemove?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const Tag: React.FC<TagProps> = ({ className, disabled, onRemove, children, ...rest }) => (
  <div className={classNames('Tag', className, { 'Tag--disabled': disabled })} {...rest}>
    <div>{children}</div>
    {onRemove && (
      <Clickable disabled={disabled} aria-label='Remove' onClick={onRemove}>
        <ExitIcon />
      </Clickable>
    )}
  </div>
);
