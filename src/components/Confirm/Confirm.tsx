import React, { ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Dialog } from '../Dialog';
import { Button } from '../Button';

export type TConfirmOptions = {
  title: ReactNode;
  message: ReactNode;
  confirmationText: ReactNode;
  cancellationText: ReactNode;
};

type TConfirm = (options?: Partial<TConfirmOptions>) => Promise<boolean>;

const DEFAULT_OPTIONS: TConfirmOptions = {
  title: 'Are you sure?',
  message: '',
  confirmationText: 'Ok',
  cancellationText: 'Cancel'
};

const ConfirmContext = createContext<{ confirm: TConfirm }>({
  confirm: () => Promise.resolve(false)
});

export const ConfirmProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [options, setOptions] = useState<Partial<TConfirmOptions>>({});
  const [resolve, setResolve] = useState<((confirmed: boolean) => void) | null>(null);

  const { title, message, confirmationText, cancellationText } = { ...DEFAULT_OPTIONS, ...options };

  const confirm = useCallback(
    (options?: Partial<TConfirmOptions>) =>
      new Promise<boolean>(resolve => {
        setOptions(options ?? {});
        setResolve(() => resolve);
      }),
    []
  );

  const handleCancel = useCallback(() => {
    resolve?.(false);
    setResolve(null);
  }, [resolve]);

  const handleConfirm = useCallback(() => {
    resolve?.(true);
    setResolve(null);
  }, [resolve]);

  return (
    <ConfirmContext.Provider value={useMemo(() => ({ confirm }), [confirm])}>
      {children}
      <Dialog
        show={resolve != null}
        onClose={handleCancel}
        title={title}
        message={message}
        actions={
          <>
            {cancellationText && (
              <Button secondary onClick={handleCancel}>
                {cancellationText}
              </Button>
            )}
            <Button onClick={handleConfirm}>{confirmationText}</Button>
          </>
        }
      />
    </ConfirmContext.Provider>
  );
};

/**
 * Shows a confirmation dialog and returns a Promise<boolean> representing the user choice (resolves with true on confirmation and with false on cancellation).
 *
 * Inspired by https://www.npmjs.com/package/material-ui-confirm
 *
 * Usage:
 * ```
 * const {confirm} = useConfirm();
 *
 * confirm({
 *  title: 'Are you sure you want to delete this?',
 *  confirmationText: 'Delete'
 * }).then(confirmed => {
 *  // ...
 * });
 * ```
 */
export const useConfirm = () => useContext(ConfirmContext);
