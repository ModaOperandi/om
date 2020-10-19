import React from 'react';
import { action } from '@storybook/addon-actions';
import { breakpoints } from '@moda/tokens';

import { Breakpoint } from './Breakpoint';

export default { title: 'Components/Breakpoint' };

const Debug: React.FC<{
  name: string;
  width: string;
  mode: string;
}> = ({ name, width, mode }) => {
  React.useEffect(() => {
    action(`mount ${mode} ${name}`)();
    return (): void => action(`unmount ${mode} ${name}`)();
  }, [mode, name]);

  return (
    <div>
      {mode}: {name} @{width}
    </div>
  );
};

const Display: React.FC<{ width: string }> = ({ width }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height: '100%',
        border: '1px solid red',
        borderBottom: 0,
        textAlign: 'right',
        pointerEvents: 'none'
      }}
    >
      {width}
    </div>
  );
};

const Watcher: React.FC<{ from: string }> = ({ from }) => {
  React.useEffect(() => {
    console.log('<Watcher /> mounted', { from });
  }, [from]);

  return (
    <>
      {console.log('<Watcher /> rendered', { from })}
      <div>View console</div>
    </>
  );
};

export const Values = () => (
  <>
    {Object.values(breakpoints).map(width => (
      <Display key={width} width={width} />
    ))}

    {Object.entries(breakpoints).map(([name, width]: [string, string]) => {
      return (
        <>
          <Breakpoint key={`at:${name}`} at={name}>
            <Debug name={name} width={width} mode='at' />
          </Breakpoint>

          <Breakpoint key={`gt:${name}`} gt={name}>
            <Debug name={name} width={width} mode='gt' />
          </Breakpoint>

          <Breakpoint key={`lt:${name}`} lt={name}>
            <Debug name={name} width={width} mode='lt' />
          </Breakpoint>
        </>
      );
    })}
  </>
);

export const Simple = () => (
  <>
    {Object.values(breakpoints).map(width => (
      <Display key={width} width={width} />
    ))}

    <Breakpoint lt='sm'>Only displays on small screens</Breakpoint>
    <Breakpoint gt='sm'>Only displays on large screens</Breakpoint>
  </>
);

export const WithEvents = () => (
  <>
    <Breakpoint lt='sm'>
      Only displays on smaller screens
      <Watcher from='sm' />
    </Breakpoint>

    <Breakpoint gt='sm'>
      Only displays on large screens
      <Watcher from='lg' />
    </Breakpoint>
  </>
);
