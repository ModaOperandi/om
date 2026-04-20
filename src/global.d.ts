import React from 'react';

declare global {
  namespace JSX {
    type Element = React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>;
  }
}

export {};
