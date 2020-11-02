import { useCallback, useEffect, useReducer, useRef } from 'react';
import { mapCursorToMax } from 'map-cursor-to-max';

export type UseKeyboardListNavigationAction =
  | { type: 'RESET'; payload: { defaultCursor: number } }
  | { type: 'INTERACT' }
  | { type: 'PREV' }
  | { type: 'NEXT' }
  | { type: 'FIRST' }
  | { type: 'LAST' }
  | { type: 'SET'; payload: { cursor: number } };

export type UseKeyboardListNavigationState = {
  cursor: number;
  length: number;
  interactive: boolean;
};

const reducer = (
  state: UseKeyboardListNavigationState,
  action: UseKeyboardListNavigationAction
): UseKeyboardListNavigationState => {
  switch (action.type) {
    case 'RESET':
      return { ...state, cursor: action.payload.defaultCursor, interactive: false };
    case 'INTERACT':
      return { ...state, interactive: true };
    case 'PREV':
      return { ...state, cursor: state.cursor - 1, interactive: true };
    case 'NEXT':
      return { ...state, cursor: state.cursor + 1, interactive: true };
    case 'FIRST':
      return { ...state, cursor: 0, interactive: true };
    case 'LAST':
      return { ...state, cursor: state.length - 1, interactive: true };
    case 'SET':
      return { ...state, cursor: action.payload.cursor };
    default:
      return state;
  }
};

export type UseKeyboardListNavigationProps<T> = {
  list: T[];
  defaultSelected?: T;
  waitForInteractive?: boolean;
  onEnter({
    event,
    element,
    state,
    index
  }: {
    event: KeyboardEvent;
    element: T;
    state: UseKeyboardListNavigationState;
    index: number;
  }): void;
  extractValue?(item: T): string;
  ref?: React.MutableRefObject<any>;
};

const IDLE_TIMEOUT_MS = 1000;

export const useKeyboardListNavigation = <T>({
  list,
  defaultSelected,
  onEnter,
  waitForInteractive = false,
  ref,
  extractValue = item => (typeof item === 'string' ? item.toLowerCase() : '')
}: UseKeyboardListNavigationProps<T>) => {
  const defaultCursor = defaultSelected ? list.indexOf(defaultSelected) : 0;
  const [state, dispatch] = useReducer(reducer, {
    cursor: defaultCursor,
    length: list.length,
    interactive: false
  });

  const searchTerm = useRef('');
  const idleTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const index = mapCursorToMax(state.cursor, list.length);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp': {
          event.preventDefault();
          return dispatch({ type: 'PREV' });
        }
        case 'ArrowDown': {
          event.preventDefault();
          if (waitForInteractive && !state.interactive) return dispatch({ type: 'INTERACT' });
          return dispatch({ type: 'NEXT' });
        }
        case 'Enter': {
          if (waitForInteractive && !state.interactive) break;
          return onEnter({ event, element: list[index], state, index });
        }
        case 'Home': {
          return dispatch({ type: 'FIRST' });
        }
        case 'End': {
          return dispatch({ type: 'LAST' });
        }
        default:
          // allow searching by name
          if (/^[a-z0-9_-]$/i.test(event.key)) {
            searchTerm.current = searchTerm.current + event.key;

            const node = list.find(item => extractValue(item).startsWith(searchTerm.current));

            if (node) {
              dispatch({
                type: 'SET',
                payload: { cursor: list.indexOf(node) }
              });
            }

            if (idleTimeout.current) clearTimeout(idleTimeout.current);

            idleTimeout.current = setTimeout(() => {
              searchTerm.current = '';
            }, IDLE_TIMEOUT_MS);
          }

          break;
      }
    },
    [index, list, onEnter, state, waitForInteractive, extractValue]
  );

  useEffect(() => {
    const el = ref?.current ?? window;
    el.addEventListener('keydown', handleKeyDown);
    return () => {
      el.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, ref, idleTimeout]);

  useEffect(() => dispatch({ type: 'RESET', payload: { defaultCursor } }), [list.length]);

  const interactiveIndex = waitForInteractive && !state.interactive ? -1 : index;

  return {
    ...state,
    index: interactiveIndex,
    selected: list[interactiveIndex]
  };
};
