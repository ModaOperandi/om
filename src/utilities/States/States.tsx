import React from 'react';

import './States.scss';

interface Props {
  states: any[];
  children: JSX.Element;
}

const stringifyProps = (props: any) => {
  return Object.entries(props || {}).reduce((memo: string, [key, value]) => {
    if (key === 'children') return `${memo} children={...}`;
    if (typeof value === 'string') return `${memo} ${key}="${value}"`;
    if (typeof value === 'function') return `${memo} ${key}={fn}`;
    if (typeof value === 'boolean') return `${memo} ${key}`;
    return `${memo} ${key}=${value}`;
  }, '');
};

export const States: React.FC<Props> = ({ states, children, ...rest }) => {
  return (
    <div className='States'>
      {states.map(props => (
        <div className='States__specimen' key={JSON.stringify(props)} {...rest}>
          {React.cloneElement(children, props)}
          <code className='States__props'>
            <strong>{stringifyProps(props)}</strong>
            {stringifyProps(children.props)}
          </code>
        </div>
      ))}
    </div>
  );
};
