import React, { ComponentProps } from 'react';
import { FocusOn } from 'react-focus-on';
import classNames from 'classnames';

import './Modal.scss';

export type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose(): void;
  shards?: ComponentProps<typeof FocusOn>['shards'];
};

export const Modal: React.FC<ModalProps> = ({ className, children, onClose, shards, ...rest }) => (
  <div className={classNames('Modal', className)} {...rest}>
    <FocusOn shards={shards} onClickOutside={onClose} onEscapeKey={onClose}>
      {children}
    </FocusOn>
  </div>
);
