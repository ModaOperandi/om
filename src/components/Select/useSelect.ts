import { useCallback, useEffect, useReducer, useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useUpdateEffect } from '../../hooks/useUpdateEffect';

enum Mode {
  Resting,
  Open
}

type State = {
  value: string | undefined;
  focused: string | undefined;
  mode: Mode;
};

type Action =
  | { type: 'OPEN' }
  | { type: 'CLOSE' }
  | { type: 'SELECT'; payload: { value: string } }
  | { type: 'FOCUS'; payload: { value: string } };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'OPEN':
      return { ...state, mode: Mode.Open };
    case 'CLOSE':
      return { ...state, mode: Mode.Resting };
    case 'SELECT':
      return { ...state, value: action.payload.value, focused: undefined, mode: Mode.Resting };
    case 'FOCUS':
      return { ...state, focused: action.payload.value };
  }
};

interface UseSelectProps {
  value: string | undefined;
  defaultValue: string | undefined;
}

export const useSelect = ({ value, defaultValue }: UseSelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);

  const initialValue = value ?? defaultValue;

  const [state, dispatch] = useReducer(reducer, {
    value: initialValue,
    focused: initialValue,
    mode: Mode.Resting
  });

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'Escape': {
        event.preventDefault();
        return dispatch({ type: 'CLOSE' });
      }
      default:
        break;
    }
  }, []);

  const handleClickOutside = useCallback(() => dispatch({ type: 'CLOSE' }), []);

  useClickOutside(selectRef, handleClickOutside);

  useEffect(() => {
    const el = selectRef.current;
    if (!el) return;
    el.addEventListener('keydown', handleKeyDown);
    return () => {
      el.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useUpdateEffect(() => {
    value && dispatch({ type: 'SELECT', payload: { value } });
  }, [value]);

  return { state, dispatch, Mode, selectRef };
};
