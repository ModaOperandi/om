import React, { useState, useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames';
import './Popover.scss';

export type PopoverProps = React.HTMLAttributes<HTMLDivElement> & {
  content: JSX.Element;
  children: JSX.Element;
  open?: boolean;
  anchor?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
};

export const POPOVER_MOUSEOUT_DELAY_MS = 200;

export const Popover: React.FC<PopoverProps> = ({
  className,
  children,
  content,
  open = false,
  anchor = 'topLeft',
  ...rest
}) => {
  const [isOpen, setOpen] = useState(open);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (!open) {
      timeout.current && clearTimeout(timeout.current);
      setOpen(true);
    }
  }, [open]);

  const handleMouseLeave = useCallback(() => {
    if (!open) {
      timeout.current = setTimeout(() => setOpen(false), POPOVER_MOUSEOUT_DELAY_MS);
    }
  }, [open]);

  useEffect(() => setOpen(open), [open]);

  return (
    <div
      className={classNames(`Popover Popover--anchor-${anchor}`, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      <span className='Popover__trigger'>
        {isOpen && (
          <>
            <div className='Popover__caret' />
            <div className='Popover__content'>{content}</div>
          </>
        )}
        {children}
      </span>
    </div>
  );
};
