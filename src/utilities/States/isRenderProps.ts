export type RenderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (props: any): JSX.Element;
};

export const isRenderProps = (children: JSX.Element | RenderProps): children is RenderProps =>
  typeof children === 'function';
