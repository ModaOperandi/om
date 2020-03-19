import React from 'react';
import classNames from 'classnames';
import './Label.scss';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  hidden?: boolean;
};

export const Label: React.FC<LabelProps> = ({ className, hidden, ...rest }) => (
  <label
    className={classNames('Label', className, {
      'Label--hidden': hidden
    })}
    {...rest}
  />
);
