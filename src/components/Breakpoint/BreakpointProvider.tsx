import React, { createContext } from 'react';

export type BreakpointProviderProps = {
  /**
   * `defaultWidth` controls the behavior of `useBreakpoint` and `Breakpoint` on the initial render
   * possible values are:
   * - undefined: everything is rendered initially
   * - auto: uses window.matchMedia, using this on SSR will render everything
             this is useful for apps that are not SSRd and for content that is loaded after the hydration
   * - number: this specifies the width of the viewport in rem, the content will be rendered accordingly,
   *           this is useful for SSR (with some kind of device detection) and hydration on client-side
   */
  defaultWidth?: 'auto' | number;
};

export const BreakpointContext = createContext<BreakpointProviderProps>({});

export const BreakpointProvider: React.FC<BreakpointProviderProps> = ({
  defaultWidth,
  children
}) => <BreakpointContext.Provider value={{ defaultWidth }}>{children}</BreakpointContext.Provider>;
