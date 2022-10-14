import React, { ComponentProps } from 'react';
import { FocusOn } from 'react-focus-on';
import classNames from 'classnames';

import './Modal.scss';

export type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose(): void;
  shards?: ComponentProps<typeof FocusOn>['shards'];
  autoFocus?: boolean;
};

export const Modal: React.FC<ModalProps> = ({
  className,
  children,
  onClose,
  shards,
  autoFocus,
  ...rest
}) => (
  <div className={classNames('Modal', className)} {...rest}>
    <FocusOn autoFocus={autoFocus} shards={shards} onClickOutside={onClose} onEscapeKey={onClose}>
      {children}
    </FocusOn>
  </div>
);
