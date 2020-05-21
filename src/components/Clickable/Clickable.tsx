import React from 'react';
import classNames from 'classnames';
import { Link, LinkProps } from 'react-router-dom';

import './Clickable.scss';

type ButtonElProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorElProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ClickableProps<T = ButtonElProps | AnchorElProps | LinkProps> = T & {
  disabled?: boolean;
  styleless?: boolean;
};

const isLink = (props: ButtonElProps | AnchorElProps | LinkProps): props is LinkProps =>
  'to' in props;
const isAnchor = (props: ButtonElProps | AnchorElProps | LinkProps): props is AnchorElProps =>
  'href' in props;
const isButton = (props: ButtonElProps | AnchorElProps | LinkProps): props is ButtonElProps =>
  !('href' in props);

export const Clickable = React.forwardRef(
  (
    {
      className,
      styleless = false,
      disabled,
      ...rest
    }: ClickableProps<LinkProps | AnchorElProps | ButtonElProps>,
    ref: React.Ref<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const props = {
      ...rest,
      className: classNames({ Clickable: !styleless, 'Clickable--disabled': disabled }, className),
      disabled
    };

    if (isLink(props)) return <Link {...props} ref={ref as React.Ref<HTMLAnchorElement>} />;
    if (isAnchor(props)) return <a {...props} ref={ref as React.Ref<HTMLAnchorElement>} />;
    if (isButton(props)) return <button {...props} ref={ref as React.Ref<HTMLButtonElement>} />;

    return null;
  }
);

Clickable.displayName = 'Clickable';
