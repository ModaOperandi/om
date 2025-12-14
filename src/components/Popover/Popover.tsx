import React, { useState, useCallback, useEffect, useRef, ReactNode, JSX } from 'react';
import classNames from 'classnames';
import './Popover.scss';

export type PopoverProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> & {
  content: ReactNode;
  children: JSX.Element;
  open?: boolean;
  anchor?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
  zIndex?: number;
  autoPreview?: boolean;
  smoothTransitioning?: boolean;
  /** Semantic role for the popover content (e.g., 'tooltip', 'dialog', 'menu', 'listbox') */
  role?: 'tooltip' | 'dialog' | 'menu' | 'listbox';
  /** Accessible label for the popover content */
  'aria-label'?: string;
  /** ID of element that labels the popover */
  'aria-labelledby'?: string;
  /** ID for the popover content */
  popoverId?: string;
  /** Open popover when trigger receives focus */
  openOnFocus?: boolean;
  /** Close popover when Escape is pressed */
  closeOnEscape?: boolean;
  /** Callback fired when user attempts to close (e.g., Escape key). */
  onClose?: () => void;
  /** Automatically focus the popover content when opened */
  autoFocus?: boolean;
};

export const POPOVER_MOUSEOUT_DELAY_MS = 200;
const THREE_QUARTER_SECOND_DELAY = 750;
const ONE_SECOND_DELAY = 1000;
const FIVE_SECOND_DELAY = 5000;

enum Mode {
  Opening = 'opening',
  Open = 'open',
  Closing = 'closing',
  AutoOpening = 'autoOpening',
  AutoOpen = 'autoOpen',
  Closed = 'closed'
}

export const Popover: React.FC<PopoverProps> = ({
  className,
  children,
  content,
  open,
  anchor = 'topLeft',
  zIndex,
  autoPreview = false,
  smoothTransitioning = false,
  role,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  popoverId,
  openOnFocus = false,
  closeOnEscape = true,
  onClose,
  autoFocus = false,
  ...rest
}) => {
  const [mode, setMode] = useState(() => {
    if (open && smoothTransitioning) {
      return Mode.Opening;
    }

    if (open && !smoothTransitioning) {
      return Mode.Open;
    }

    if (autoPreview) {
      return Mode.AutoOpening;
    }

    return Mode.Closed;
  });

  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleOpen = useCallback(() => {
    if (smoothTransitioning) setMode(Mode.Opening);

    if (!smoothTransitioning) setMode(Mode.Open);
  }, [smoothTransitioning]);

  const handleClose = useCallback(() => {
    if (smoothTransitioning) setMode(Mode.Closing);

    if (!smoothTransitioning) setMode(Mode.Closed);
  }, [smoothTransitioning]);

  const handleMouseEnter = useCallback(() => {
    if (!open) {
      if (timeout.current) clearTimeout(timeout.current);
      handleOpen();
    }
  }, [handleOpen, open]);

  const handleMouseLeave = useCallback(() => {
    if (open) return;

    timeout.current = setTimeout(handleClose, POPOVER_MOUSEOUT_DELAY_MS);
  }, [handleClose, open]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (closeOnEscape && event.key === 'Escape') {
        onClose?.();
        handleClose();
        event.preventDefault();
      }
    },
    [closeOnEscape, onClose, handleClose]
  );

  const handleFocus = useCallback(() => {
    if (openOnFocus && open === undefined) {
      if (timeout.current) clearTimeout(timeout.current);
      handleOpen();
    }
  }, [openOnFocus, open, handleOpen]);

  const handleBlur = useCallback(
    (event: React.FocusEvent) => {
      if (openOnFocus && open === undefined) {
        // Only close if focus moved outside the popover entirely
        if (!event.currentTarget.contains(event.relatedTarget)) {
          timeout.current = setTimeout(handleClose, POPOVER_MOUSEOUT_DELAY_MS);
        }
      }
    },
    [openOnFocus, open, handleClose]
  );

  useEffect(() => {
    if (mode !== Mode.Closing) return;

    const closingTimeout = setTimeout(() => setMode(Mode.Closed), THREE_QUARTER_SECOND_DELAY);

    return () => clearTimeout(closingTimeout);
  }, [mode]);

  useEffect(() => {
    if (mode !== Mode.AutoOpening) return;

    const openingTimeout = setTimeout(() => setMode(Mode.AutoOpen), ONE_SECOND_DELAY);

    return () => clearTimeout(openingTimeout);
  }, [mode]);

  useEffect(() => {
    if (mode !== Mode.Opening) return;

    const openingTimeout = setTimeout(() => setMode(Mode.Open), THREE_QUARTER_SECOND_DELAY);

    return () => clearTimeout(openingTimeout);
  }, [mode]);

  useEffect(() => {
    if (mode !== Mode.AutoOpen) return;

    const stayingTimeout = setTimeout(handleClose, FIVE_SECOND_DELAY);

    return () => clearTimeout(stayingTimeout);
  }, [handleClose, mode, smoothTransitioning]);

  useEffect(() => {
    if (open === undefined) return;

    if (open) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [handleClose, handleOpen, open]);

  const isOpen =
    mode === Mode.AutoOpen || mode === Mode.Opening || mode === Mode.Open || mode === Mode.Closing;

  useEffect(() => {
    if (autoFocus && isOpen && contentRef.current) {
      contentRef.current.focus();
    }
  }, [autoFocus, isOpen]);

  return (
    <div
      className={classNames(`Popover Popover--anchor-${anchor}`, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...rest}
    >
      <span className='Popover__trigger'>
        {isOpen && (
          <div
            className={classNames('Popover__box', {
              'Popover__box--opening': mode === Mode.Opening,
              'Popover__box--closing': mode === Mode.Closing
            })}
          >
            <div
              className='Popover__caret'
              aria-hidden='true'
              style={{ zIndex: zIndex != null ? zIndex + 1 : undefined }}
            />

            <div
              ref={contentRef}
              id={popoverId}
              role={role}
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledby}
              tabIndex={autoFocus ? -1 : undefined}
              className='Popover__content'
              style={{ zIndex }}
            >
              {content}
            </div>
          </div>
        )}

        {children}
      </span>
    </div>
  );
};
