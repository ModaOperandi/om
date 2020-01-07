import React from 'react';
import classNames from 'classnames';

import './Label.scss';

export interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  hidden?: boolean;
}

export const Label: React.FC<Props> = ({ className, hidden, ...rest }) => (
  <label
    className={classNames('Label', className, {
      'Label--hidden': hidden
    })}
    {...rest}
  />
);
