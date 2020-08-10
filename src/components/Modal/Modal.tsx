import React from 'react';
import { FocusOn } from 'react-focus-on';
import classNames from 'classnames';

import './Modal.scss';

export type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose(): void;
};

export const Modal: React.FC<ModalProps> = ({ className, children, onClose, ...rest }) => (
  <div className={classNames('Modal', className)} {...rest}>
    <FocusOn onClickOutside={onClose} onEscapeKey={onClose}>
      {children}
    </FocusOn>
  </div>
);
