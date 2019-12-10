export const stringifyProps = (props: any) => {
  const stringifiedProps = Object.entries(props || {}).reduce((memo: string, [key, value]) => {
    if (key === 'children') return `${memo} children={...}`;
    if (typeof value === 'string') return `${memo} ${key}="${value}"`;
    if (typeof value === 'function') return `${memo} ${key}={fn}`;
    if (typeof value === 'boolean') return `${memo} ${key}${value ? '' : '={false}'}`;
    if (typeof value === 'number') return `${key}={${value}}`;
    if (typeof value === 'object') return `${key}={...}`;
    return `${memo} ${key}=${value}`;
  }, '');

  return stringifiedProps.trim();
};
