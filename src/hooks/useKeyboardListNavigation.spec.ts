/* eslint-disable @typescript-eslint/no-magic-numbers */
import { renderHook, fireEvent } from '@testing-library/react';
import { useRef } from 'react';
import { useKeyboardListNavigation } from './useKeyboardListNavigation';

describe('useKeyboardListNavigation', () => {
  const list = ['first', 'second', 'third', 'fourth'];
  const noop = () => {};

  it('selects the first element', () => {
    const { result } = renderHook(() => useKeyboardListNavigation({ list, onEnter: noop }));

    expect(result.current.cursor).toBe(0);
    expect(result.current.index).toBe(0);
    expect(result.current.selected).toBe('first');
  });

  it('selects the defaultSelected element', () => {
    const { result } = renderHook(() =>
      useKeyboardListNavigation({ list, defaultSelected: 'second', onEnter: noop })
    );

    expect(result.current.cursor).toBe(1);
    expect(result.current.index).toBe(1);
    expect(result.current.selected).toBe('second');
  });

  it('selects the second element when the "ArrowDown" key is pressed', () => {
    const { result } = renderHook(() => useKeyboardListNavigation({ list, onEnter: noop }));

    expect(result.current.cursor).toBe(0);
    expect(result.current.index).toBe(0);
    expect(result.current.selected).toBe('first');

    fireEvent.keyDown(window, { key: 'ArrowDown' });

    expect(result.current.cursor).toBe(1);
    expect(result.current.index).toBe(1);
    expect(result.current.selected).toBe('second');
  });

  it('selects the third element when the "ArrowDown" key is pressed twice', () => {
    const { result } = renderHook(() => useKeyboardListNavigation({ list, onEnter: noop }));

    expect(result.current.cursor).toBe(0);
    expect(result.current.index).toBe(0);
    expect(result.current.selected).toBe('first');

    fireEvent.keyDown(window, { key: 'ArrowDown' });
    fireEvent.keyDown(window, { key: 'ArrowDown' });

    expect(result.current.cursor).toBe(2);
    expect(result.current.index).toBe(2);
    expect(result.current.selected).toBe('third');
  });

  it('selects the last element when the "ArrowUp" key is pressed initially', () => {
    const { result } = renderHook(() => useKeyboardListNavigation({ list, onEnter: noop }));

    expect(result.current.cursor).toBe(0);
    expect(result.current.index).toBe(0);
    expect(result.current.selected).toBe('first');

    fireEvent.keyDown(window, { key: 'ArrowUp' });

    expect(result.current.cursor).toBe(-1);
    expect(result.current.index).toBe(3);
    expect(result.current.selected).toBe('fourth');
  });

  it('selects the last element when the "End" key is pressed no matter where in the list one is', () => {
    const { result } = renderHook(() => useKeyboardListNavigation({ list, onEnter: noop }));

    expect(result.current.cursor).toBe(0);
    expect(result.current.index).toBe(0);
    expect(result.current.selected).toBe('first');

    fireEvent.keyDown(window, { key: 'End' });

    expect(result.current.cursor).toBe(3);
    expect(result.current.index).toBe(3);
    expect(result.current.selected).toBe('fourth');

    fireEvent.keyDown(window, { key: 'ArrowUp' });
    fireEvent.keyDown(window, { key: 'ArrowUp' });

    expect(result.current.cursor).toBe(1);
    expect(result.current.index).toBe(1);
    expect(result.current.selected).toBe('second');

    fireEvent.keyDown(window, { key: 'End' });

    expect(result.current.cursor).toBe(3);
    expect(result.current.index).toBe(3);
    expect(result.current.selected).toBe('fourth');
  });

  it('selects the first element when the "Home" key is pressed no matter where in the list one is', () => {
    const { result } = renderHook(() =>
      useKeyboardListNavigation({
        list,
        onEnter: noop,
        waitForInteractive: true
      })
    );

    expect(result.current.cursor).toBe(0);
    expect(result.current.index).toBe(-1);
    expect(result.current.selected).toBeUndefined();

    fireEvent.keyDown(window, { key: 'Home' });

    expect(result.current.cursor).toBe(0);
    expect(result.current.index).toBe(0);
    expect(result.current.selected).toBe('first');

    fireEvent.keyDown(window, { key: 'ArrowUp' });
    fireEvent.keyDown(window, { key: 'ArrowUp' });

    expect(result.current.cursor).toBe(-2);
    expect(result.current.index).toBe(2);
    expect(result.current.selected).toBe('third');

    fireEvent.keyDown(window, { key: 'Home' });

    expect(result.current.cursor).toBe(0);
    expect(result.current.index).toBe(0);
    expect(result.current.selected).toBe('first');
  });

  it('selects the third item when the t key is pressed', () => {
    const { result } = renderHook(() =>
      useKeyboardListNavigation({
        list,
        onEnter: noop
      })
    );

    expect(result.current.cursor).toBe(0);
    expect(result.current.index).toBe(0);
    expect(result.current.selected).toBe('first');

    fireEvent.keyDown(window, { key: 't' });

    expect(result.current.cursor).toBe(2);
    expect(result.current.index).toBe(2);
    expect(result.current.selected).toBe('third');
  });

  it('calls `onEnter` with the selected items when the "Enter" key is pressed', () => {
    const onEnter = jest.fn();
    renderHook(() => useKeyboardListNavigation({ list, onEnter }));

    fireEvent.keyDown(window, { key: 'Enter' });

    expect(onEnter).toHaveBeenCalledTimes(1);
    expect(onEnter).toHaveBeenCalledWith({
      element: 'first',
      event: expect.anything(),
      index: 0,
      state: { cursor: 0, interactive: false, length: 4 }
    });

    fireEvent.keyDown(window, { key: 'ArrowDown' });
    fireEvent.keyDown(window, { key: 'ArrowDown' });

    fireEvent.keyDown(window, { key: 'Enter' });

    expect(onEnter).toHaveBeenCalledTimes(2);
    expect(onEnter).toHaveBeenLastCalledWith({
      element: 'third',
      event: expect.anything(),
      index: 2,
      state: { cursor: 2, interactive: true, length: 4 }
    });
  });

  it('supports a focusable ref', () => {
    const div = document.createElement('div');
    const { result } = renderHook(() => {
      const ref = useRef(div);
      return useKeyboardListNavigation({ list, ref, onEnter: noop });
    });

    expect(result.current.cursor).toBe(0);

    fireEvent.keyDown(window, { key: 'ArrowDown' });

    expect(result.current.cursor).toBe(0);

    fireEvent.keyDown(div, { key: 'ArrowDown' });

    expect(result.current.cursor).toBe(1);
  });

  describe('waitForInteractive', () => {
    it('returns an invalid index until some interaction takes place', () => {
      const { result } = renderHook(() =>
        useKeyboardListNavigation({
          list,
          onEnter: noop,
          waitForInteractive: true
        })
      );

      expect(result.current.cursor).toBe(0);
      expect(result.current.index).toBe(-1);
      expect(result.current.selected).toBeUndefined();

      fireEvent.keyDown(window, { key: 'ArrowDown' });

      expect(result.current.cursor).toBe(0);
      expect(result.current.index).toBe(0);
      expect(result.current.selected).toEqual('first');
    });

    it('does not trigger `onEnter` if no interaction has taken place', () => {
      const onEnter = jest.fn();
      renderHook(() => useKeyboardListNavigation({ list, onEnter, waitForInteractive: true }));

      fireEvent.keyDown(window, { key: 'Enter' });

      expect(onEnter).toHaveBeenCalledTimes(0);

      fireEvent.keyDown(window, { key: 'ArrowDown' });

      fireEvent.keyDown(window, { key: 'Enter' });

      expect(onEnter).toHaveBeenCalledTimes(1);
    });
  });
});
