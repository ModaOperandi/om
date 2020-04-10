import React from 'react';
import classNames from 'classnames';

import './Overlay.scss';

interface Props {
  className: string;
}

export const Overlay: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div className={classNames('ModalOverlay', className)} {...rest}>
      {children}
    </div>
  );
};
